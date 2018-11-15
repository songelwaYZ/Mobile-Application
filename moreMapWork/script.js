var map = L.map('map').setView([-33.91, 18.41], 11)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map)

const appId = 'KJ6cnWOsYvr9KvqqaCUM'
const appCode = '7de96-6CbM2EPWL6khyztA'

const autocompleteUrl = "http://autocomplete.geocoder.api.here.com/6.2/suggest.json" +
  "?app_id=" + appId +
  "&app_code=" + appCode +
  "&query="
  
const geocodeUrl = "https://geocoder.api.here.com/6.2/geocode.json" +
  "?app_id=" + appId +
  "&app_code=" + appCode +
  "&searchtext="

var app = new Vue({
    el: '#app',
    data: {
        startAddress: '',
        destinationAddress: '',
        autoCompleteResults: [],
        startPoint: undefined,
        endPoint: undefined

    },
    methods: {
        
        autocomplete: function () {
            var _this = this
            if(this.startAddress.length < 5) {
                return false
            }

            fetch(autocompleteUrl + this.startAddress)
                .then(function (response) {
                    return response.json()
                })
                .then(function (response) {
                    _this.autoCompleteResults = response.suggestions
                })
        },
        autocomplete2: function(){
            var _this = this
            if(this.destinationAddress.length < 5){
                return false
            }

            fetch(autocompleteUrl + this.destinationAddress)
                .then(function(response){
                    return response.json()
                })
                .then(function (response) {
                    _this.autoCompleteResults = response.suggestions
                })

        },
        resultSelect: function (result) {
            var _this = this
            fetch(geocodeUrl + result.label)
                .then(function (response) {
                    return response.json()
                })
                .then(function (response) {
                    var location = response.Response.View[0].Result[0].Location.DisplayPosition
                    _this.startPoint = L.marker([location.Latitude, location.Longitude]).addTo(map)
                    _this.endPoint = L.marker([location.Latitude, location.Longitude]).addTo(map)
                    _this.autoCompleteResults = []                    
                })
        }
    }
})