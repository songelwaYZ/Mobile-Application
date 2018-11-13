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
            }
        }
    }
})

  // app.js

// window.addEventListener('load', function() {

//     var webAuth = new auth0.WebAuth({
//       domain: 'zizo123.auth0.com',
//       clientID: 'aXEW29OOBVzt7K9Fq_Zy6votXUPHpA5p',
//       responseType: 'token id_token',
//       scope: 'openid',
//       redirectUri: window.location.href
//     });
  
//     var loginBtn = document.getElementById('login');
  
//     loginBtn.addEventListener('click', function(e) {
//       e.preventDefault();
//       webAuth.authorize();
//     });
  
//   });