const cafeList = document.querySelector('#cafe-list')

// create element and render cafe

function renderCafe(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let city = document.createElement('span');

    li.appendChild(name);
    li.appendChild(city);

    cafeList.appendChild(li);
}


db.collection('Everything').get().then(snapshot) => {
    snapshot.docs.forEach(doc => {
        renderCafe(doc);
    })
}