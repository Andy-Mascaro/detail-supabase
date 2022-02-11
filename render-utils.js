export function renderSodaCard(soda) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('soda-card');

    p.textContent = soda.name;
    img.src = `./assets/${soda.name}.jpeg`;
    a.href = `./detail/?id=${soda.id}`;
     // link to the dog's detail page here
    
    div.append(p, img);

    a.append(div);

    return a;
}

export function renderSodaDetail(soda) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const descriptionEl = document.createElement('p');
    const nameEl = document.createElement('p');
    const sugarEl = document.createElement('p');
    const caloriesEl = document.createElement('p');
    const caloriesAndSugarEl = document.createElement('div');

    div.classList.add('soda-detail');

    nameEl.textContent = soda.name;
    nameEl.classList.add('name');

    descriptionEl.textContent = soda.description;
    descriptionEl.classList.add('description');

    caloriesEl.textContent = `${soda.calories} has`;    
    caloriesEl.classList.add('calories');

    sugarEl.textContent = soda.sugar;
    sugarEl.classList.add('breed');

    caloriesAndSugarEl.classList.add('calories-and-sugar');

    caloriesAndSugarEl.append(caloriesEl, sugarEl);

    img.src = `../assets/${soda.name}.jpeg`;
    
    div.append(nameEl, img, caloriesAndSugarEl, descriptionEl);

    return div;

}
