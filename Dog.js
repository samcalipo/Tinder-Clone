// Create the Dog class here
import dogs from './data.js';


class DogClass{
    constructor(data) {
        Object.assign(this, data);
    }

    // has been liked
    dogHasBeenLiked() {
        this.hasBeenLiked = true;
    }
    
    // has been swipped
    dogHasBeenSwipped() {
        this.hasBeenSwiped = true;
    }

    // returns HTML STRING FOR RENDERING
    getDogImgHtml() {
        return `<img src="${this.avatar}" alt="Main profile in view's profile picture">`
    }
    getDogTextHtml() {
        return `<p>${this.name}, ${this.age} <span>${this.bio}</span`
    }
}

export default DogClass;