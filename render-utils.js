export function renderSodaCard(soda) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('soda-card');

    p.textContent = soda.name;
    img.src = `./assets/${soda.id}.jpeg`;
    a.href = `./soda/?id=${soda.id}`;
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
    // const caloriesAndSugarEl = document.createElement('div');

    div.classList.add('soda-detail');

    nameEl.textContent = soda.name;
    nameEl.classList.add('name');

    descriptionEl.textContent = soda.description;
    descriptionEl.classList.add('description');

    caloriesEl.textContent = `${soda.calories} calories`;    
    caloriesEl.classList.add('calories');

    sugarEl.textContent = soda.sugar;
    sugarEl.classList.add('sugar');

    // caloriesAndSugarEl.classList.add('calories-and-sugar');

    // caloriesAndSugarEl.append(caloriesEl, sugarEl);

    img.src = `../assets/${soda.id}.jpeg`;
    
    div.append(nameEl, img, caloriesEl, sugarEl, descriptionEl);

    return div;

}
