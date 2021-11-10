let cards = [
    {
    id: "1",
    head: "Тортик черничный",
    body: "Черничка черничка черничка черничка черничка черничка черничка черничка черничка черничка черничка черничка черничка черничка черничка черничка черничка черничка черничка черничка черничка ",
    image: "img/1.jpg" ,
    },
    {
    id: "2",
    head: "Тортик малиновый",
    body: "Малинка малинка малинка малинка малинка малинка малинка малинка малинка малинка малинка малинка малинка малинка малинка малинка малинка малинка малинка малинка малинка малинка малинка малинка малинка ",
    image: "img/2.jpg",
    },
    {
    id: "3",
    head: "Тортик цветочный",
    body: "Цветочек цветочек цветочек цветочек цветочек цветочек цветочек цветочек цветочек цветочек цветочек цветочек цветочек цветочек цветочек цветочек цветочек цветочек цветочек цветочек цветочек цветочек цветочек цветочек цветочек ",
    image: "img/3.jpg",
    },
    ]
    
    let cardsCount = document.querySelector('.cards');
    
    createManyCards(cards, cardsCount);
    
    function createManyCards(array, cont) {
    array.forEach(item => {
    cont.insertAdjacentHTML('beforeend',createCard(item));
    });
    }
    
    function createCard({id, image, head, body}) {
    return `
    <article class = "card" id = "${id}">
    <img src = "${image}" alt = "head">
    <h2>${head}<h2>
    <p>${cropText(body)}</p>
    <div class = "bnts">
    <button class = "btn-delete">Удалить</button>
    <button class = "btn-info">Подробнее</button>
    </div>
    </article">
    `;
    }
    
    function cropText(text, length = 20) {
    return text.substr(0, length) + '...';
    }
    
    const modalWrapper = document.querySelector('.modal-wrapper');
    const btnClose = document.querySelector('.modal-close');
    
    document.querySelectorAll('.btn-info').forEach(btn => {
    btn.addEventListener('click', showInfo)
    });
    
    document.querySelectorAll('.btn-delete').forEach(btn => {
    btn.addEventListener('click', deleteCard);
    });
    
    btnClose.addEventListener('click', closeModal);
    
    modalWrapper.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
    closeModal();
    }
    });
    
    function showInfo(e){
    modalWrapper.classList.remove('hide');
    
    showCard(cards, e);
    }
    
    function closeModal(){
    modalWrapper.classList.add('hide');
    }
    
    function deleteCard(e){
    e.target.closest('article.card').remove();
    }
    
    document.addEventListener('keydown', e => {
    if (e.code === 'Escape'){
    closeModal();
    }
    });
    
    function showCard(array, e){
    let {image, head, body} = array.find(item => item.id === e.target.closest('article.card').id);
    document.querySelector('.card-model-left > img').src = image;
    document.querySelector('.card-model-right > h3').textContent = head;
    document.querySelector('.card-model-right > p').textContent = body;
    }