// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Aggiungere un’immagine presa anch’essa da un data
var app = new Vue({
  el: '#root',
  data: {
    message: 'Questo esercizio era veramente tosto!!!!!!',
    titleClass: 'title',
    buttonText:'CAMBIAMI',
  },
  methods:{
    changeTitle: function(){
      if (this.buttonText === 'CAMBIAMI') {
        this.titleClass = 'change-title';
        this.buttonText = 'RESET';
      } else {
        this.titleClass = 'title';
        this.buttonText = 'CAMBIAMI';
      }

    },
    reverseTitle: function(){
      return this.message = this.message.split("").reverse().join("");

    }
  }
});

Vue.config.devtools = true;
