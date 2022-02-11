import { getSoda } from './fetch-utils.js';
import { renderSodaCard } from './render-utils.js';

const main = document.getElementById('soda-list-container');

window.addEventListener('load', async() => {
    const sodas = await getSoda();

    for (let soda of sodas) {
        const sodaDiv = renderSodaCard(soda);
        main.append(sodaDiv);
    
    }

});