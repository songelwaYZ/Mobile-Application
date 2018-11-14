
var appID= '1WB7LqCQdbOdyLygyQr3'
var appCode = '1bV2IzGcpvox50hw2406gg'



var url = "http://autocomplete.geocoder.api.here.com/6.2/suggest.json" + "?app_id=" +appID + " &app_code=" + appCode + "&query="

var geocodeUrl = "https://geocoder.api.here.com/6.2/geocode.json" 
        + "?app_id=" + appID
        + " &app_code=" + appCode 
        + "&searchtext="


var app = new Vue({
    el: '#app',
    data: {
        address: '',
        results: [],
        geocodeResults: []
    },
    methods:{
        klick: function(result){
            this.address = result.label
        },

        find: function(){
            var _this = this
            fetch(geocodeUrl + this.address)
            .then(function (response){    
                return response.json()
            })
            .then(function(response){
                console.log('geocode' , response)
                console.log('location', response.Response.View[0].Result[0].Location.DisplayPosition)
                _this.geocodeResults = response.Response.View[0].Result

            })
        },

        search: function(){
            if(this.address.length>5){
                var _this = this
                console.log('search', this)
                fetch(url+this.address)
                    .then(function(response){
                        return response.json()
                    })
                    .then(function(response){
                        _this.results = response.suggestions
                    })

            }else{
                console.log('must use a valid address')
            }
        }
    }
})
