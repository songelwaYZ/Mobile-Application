
document.getElementById('section2').style.display="none"

var app = new Vue({
    el: '#app',
    data:{
        username:'',
        password :'',
        usernameError:false,
        passwordError:false,
        usernameErrorMessage:[],
        passwordErrorMessage:[]
    },
    methods: {
        validate: function () {
            this.passwordError=false 
            this.usernameError=false
            this.usernameErrorMessage= []
            this.passwordErrorMessage= []

            if(this.password.length < 6){
                this.passwordError=true
                this.passwordErrorMessage.push({msg:'Password is too short', date: Date.now()})
            }
            
            if(this.username.length < 3){
                this.usernameError=true
                this.usernameErrorMessage.push({msg:'Username is too short', date: Date.now()})
            }
            
            if(!(this.username.includes('@'))){
                this.usernameError=true
                this.usernameErrorMessage.push({msg:'Username must be a valid email address',date:Date.now()})
            }else{
                loadMap()
            }
        }
    }
})
function loadMap() {
    document.getElementById('map-form').style.display="block"
    mapboxgl.accessToken = 'pk.eyJ1IjoidXdjbGVjdHVyZXIiLCJhIjoiY2ptdWJ6aWt1MGQ4aDN3bzhiM2V1dnRiYyJ9.lWYq773rwVmRzbyHcYAVHw'
    window.map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v10',
        center: [18.4241, -33.9249], // starting position [lng, lat]
        zoom: 9
    })

    window.startPin = new mapboxgl.Marker({ draggable: true }).setLngLat([0, 0]).addTo(window.map)
    window.destinationPin = new mapboxgl.Marker({ draggable: true }).setLngLat([0, 0]).addTo(window.map)

    window.map.on('click', function (event) {
        console.log(event)
        if(window.startPoint == true) {
            window.destinationPin.setLngLat(event.lngLat)
            window.startPoint = false
            document.getElementById('destination').value = event.lngLat.lng + ',' + event.lngLat.lat 
        } else {
            window.startPin.setLngLat(event.lngLat)
            window.startPoint = true
            document.getElementById('start').value = event.lngLat.lng + ',' + event.lngLat.lat
        }
    })

}


  // app.js

window.addEventListener('load', function() {

    var webAuth = new auth0.WebAuth({
      domain: 'zizo123.auth0.com',
      clientID: 'aXEW29OOBVzt7K9Fq_Zy6votXUPHpA5p',
      responseType: 'token id_token',
      scope: 'openid',
      redirectUri: window.location.href
    });
  
    var loginBtn = document.getElementById('login');
  
    loginBtn.addEventListener('click', function(e) {
      e.preventDefault();
      webAuth.authorize();
    });
  
  });