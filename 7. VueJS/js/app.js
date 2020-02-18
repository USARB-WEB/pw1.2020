var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue JS 2.0!',
    showed: false,
    numbers: [1, 4, 5, 8, 1, 2, 3, 5, 9, 0],
    a: 0,
    b: 0
  },
  computed: {
    result: function() {
      return Number(this.a) + Number(this.b)
    },
    sortedNumbers(){
      
      return this.numbers.sort(function(a, b) {
        return a - b;
      })
    }
  }
});

var app2 = new Vue({
  el: '#app2',
  data: {
    students: [
      {
        name: "Ion Creanga",
        age: 88
      },
      {
        name: "Mihai Eminescu",
        age: 80
      },
      {
        name: "Vasile Alecsandri",
        age: 78
      }
    ]
  }
});
