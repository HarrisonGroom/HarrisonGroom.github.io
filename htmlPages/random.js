function change() // no ';' here
{
    var elem = document.getElementById("myButton1");
    if (elem.value=="hello") elem.value = "goodbye";
    else elem.value = "hello";
}




//button 3
function myFunction() {
    var x = document.getElementById("myInput");
    document.getElementById("demo").innerHTML = "searching for: " + x.value;
}





// random number
const app = new Vue({
	el: "#app",
  data: {
    min: 1,
    max: 10,
    number: 1,
  },
  created: function () {
    this.getRandomNumber()
  },
  methods: {
    loadNum: function () {
      this.min = 1;
      this.max = 10;
      this.getRandomNumber();
    },
    getInput: function () {
      let min = Number(this.min)
      let max = Number(this.max)
      if(min > max) {
        [min, max] = [max, min]
      }
      this.min = min
      this.max = max
      this.getRandomNumber()
    },
    getRandomNumber: function () {
      this.number = this.generateNumber()
    },
    generateNumber: function () {
      return Math.floor(Math.random()*(this.max-this.min+1)+this.min);
    }
  }
})