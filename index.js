// Remember to import the data and Dog class!
import dogs from './data.js';
import DogClass from './Dog.js';

let dogArray = ["Rex", "Bella", "Teddy"];
let dogsInteractedWith = [];
let dogsAvailable = true; 
let isWaiting = false;

function renderDog(){
    if(dogsAvailable){
        document.querySelector('.mainImg').innerHTML = currentDog.getDogImgHtml();
        document.querySelector('.overMainImgText').innerHTML = currentDog.getDogTextHtml();    

    }
    
}

document.addEventListener('click', (e) => {

   if(dogsAvailable && !isWaiting){


        if(e.target.dataset.disliked){
            isWaiting = true; 
            document.getElementById('nope-badge').style.display = 'block';
            addDogsInteractedWithToArray(currentDog)
           
            setTimeout( () => {
                currentDog.dogHasBeenSwipped();
                currentDog = getNewDog();
                renderDog();
                isWaiting = false;

                document.getElementById('nope-badge').style.display = 'none';
            }, 500)           
        } 
        else if(e.target.dataset.liked){
            isWaiting = true; 
            document.getElementById('like-badge').style.display = 'block';
            addDogsInteractedWithToArray(currentDog)

            setTimeout( () => {
                currentDog.dogHasBeenLiked();
                currentDog.dogHasBeenSwipped();
                currentDog = getNewDog();
                renderDog();
                isWaiting = false;

                document.getElementById('like-badge').style.display = 'none';
            }, 500)
            
        }

           
   }

});


function addDogsInteractedWithToArray(dog){
    if (dogsInteractedWith.length < dogs.length){
        dogsInteractedWith.push(dog);
    }
}

function getNewDog(){
    
    let currentDog = dogArray.shift(); 

    if(!currentDog){
        dogsAvailable = false; 
    }
    
    const nextDogData = dogs.filter(function(dog){
        return dog.name == currentDog
        
    })[0]

    const newDogObject = nextDogData ? new DogClass(nextDogData) : {};
    
    return newDogObject;
    

}
let currentDog = getNewDog();


renderDog();



// I'm trying to get the above function "getnewDog()" to return an object 
// but it returns undefined