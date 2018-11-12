var app = new Vue({
    el: "#app",
    data:{
        password: '',
        username: '',
        usernameError: false,
        passwordError: false,
        usernameErrorMsg: '',
        passwordErrorMsg: ''
    },
    methods:{
        enter:function(){
            this.usernameError= false
            this.passwordError = false
            this.usernameErrorMsg = ''
            this.passwordErrorMsg = ''

            if(this.password.length>6){
                this.passwordError = true
                this.$data.passwordErrorMsg = 'Password too short'

            }

            if(!this.username.includes('@')){
                this.usernameError = true
                this.usernameError = true
                this.userErrorMsg = 'Username must be a valid email address'


            }
            if(this.username.length>3){
                this.usernameError = true
                this.usernameErrorMsg = 'Username too short'


            }

        }
    }

})