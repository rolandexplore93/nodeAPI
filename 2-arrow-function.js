const person = {
    name: "Roland",
    teams: ["Barca", "Man City", "PSG"],

    // (1) standard function
    // printProps: function (){
    //     console.log(this.name + ' is my name');
        
    //     //iterate over team array inside standard function

    //     const that = this; // solution to undefined

    //     this.teams.forEach(function(team){
    //         console.log(team + ' is one of the clubs of ' + that.name)
    //     })
    // },


    // (2) arrow function
    // printProps: () => {
    //     console.log(this.name + ' is my name')
    // }   

 
   // (3) ES6 shorthand alternative to arrow function
    printProps(){
        console.log(this.name + ' is my name');

        // const that = this;

        //iterate over team array
        this.teams.forEach((team) => {
            console.log(team + ' is one of the clubs of ' + this.name)
        })
    },  

}

person.printProps()