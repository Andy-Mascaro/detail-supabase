import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const main = document.getElementById('dog-list-container');

window.addEventListener('load', async() => {
    const dogs = await getDogs();

    for (let dog of dogs) {
        const dogDiv = renderDogCard(dog);
        main.append(dogDiv);
    
    }

});