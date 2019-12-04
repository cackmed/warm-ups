class Colors {
    constructor() {
        this.favorites = [];
    }
    addColor(color) {
        if(!this.hasColor(color)) 
            this.favorites.push(color);
    }
    hasColor(color) {
        return this.favorites.includes(color);
    //     for(let i = 0; i < this.favorites.length; i++) {
    //         if(this.favorites[i] === color) {
    //             return console.log(true);
    //         }
    //         else return console.log(false);
    //     }
    }
}
  
const calebsColors = new Colors();
calebsColors.addColor('blue');
calebsColors.addColor('blue');
calebsColors.addColor('red');
calebsColors.addColor('green');
calebsColors.hasColor('blue');
console.log(calebsColors.favorites);
  