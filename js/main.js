const pet = {
    name: "Jack",
    species: "German Shepherd",
    nickName: ["Kutta", "Kookur", "Tiger"],
    age: 5,
    bark: function(){
            window.alert("WOOF!")
    },
    eat: function(food){
        window.alert(`${this.name} like's to eat ${food}`)
    },
    jump: function(){
        window.alert(`${this.name} like's to jump around and play with kids`)
    }


}
pet.bark();
pet.eat("Dog Food");
pet.jump();