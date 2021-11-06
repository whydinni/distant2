let i = 0;
let tabs = [
{
header: 'Тортик',
img: 'img/mood cafe.jpg',
target: '#tab1'
},
{
header: 'Кексики',
target: '#tab2',
img: 'img/222.jpg',
},
{
header: 'Лягушечки',
target: '#tab3',
img: 'img/333.jpg',
},
{
header: 'Клубнички',
target: '#tab4',
img: 'img/444.jpg',
},
]

const ul = document.querySelector('#ul');
const tabBodyItem = document.querySelector('.imgCont');

tabs.forEach(tab=>{

let li = createElement('li');
li.innerHTML = tab.header;
li.dataset.target = i;
li.classList.add('li');
li.addEventListener('click',doActiveTab);
ul.append(li);
i++;
});

function createElement(el){
let element = document.createElement(el);
return element;
}

function doActiveTab(e){
clearTab();
let currentHeader = e.target;
currentHeader.classList.add('active');
let currentBody = tabs[currentHeader.dataset.target];
tabBodyItem.innerHTML = `<img src='${currentBody.img}'></img>`;
tabBodyItem.classList.add('active');
}

function clearTab(){
[...ul.children].forEach(item=>{
item.classList.remove('active');
});

}