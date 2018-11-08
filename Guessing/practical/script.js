function generateGuess(){
    return Math.round(Math.random()*10)
    
}

const app = new Vue({
    el: "#app",
    data: {
      timer: 60,
      computerGuess: generateGuess(),
      userinput:0,
      errors: [ ],
      showModal: false,
      failure: false,
      success: false,
      customMessage: ' '

      
    },
    methods:{
        enter: function(){
         if(this.$data.computerGuess==this.$data.userinput){
                //reset game if won
                this.errors = []
                this.timer = 10
                this.computerGuess = generateGuess()
            } else{
                this.errors.push(true)
            if(this.errors.length >=3){
                alert("Wrong generateGuess, Game Over!!" +this.computerGuess)
                //reset game
                this.error = []
                this.timer = 10
                this.computerGuess = generateGuess()
            }
               
        }

        }
    }
  })

  function countDown(){
      app.timer--
      if(app.timer==0){
          alert("Game Over!!!")
          app.timer = 60
          app.success = false
          app.failure = true
          app.showModal = true
          app.customMessage="The correct value was" + app.computerGuess
      }

  }
//   function compUpdates(){
//       app.timer

  //}

  setInterval(countDown, 1000)
  console.log(app.computerGuess)