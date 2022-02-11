import { getSoda } from '../fetch-utils.js';
import { renderSodaDetail } from '../render-utils.js';

const sodaDetailContainer = document.getElementById('soda-detail-container');


window.addEventListener('load', async() =>{
    

    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const soda = await getSoda(id);

    const sodaDetails = renderSodaDetail(soda);
    sodaDetailContainer.append(sodaDetails);

    
    

});