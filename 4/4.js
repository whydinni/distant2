let zones = document.querySelectorAll('.block');
let dragElement = document.getElementById('dragElement');

let img = document.getElementById('dragElement');

dragElement.addEventListener('dragstart', dragstart);
dragElement.addEventListener('dragend', dragend);

zones.forEach(zone => {
    zone.addEventListener('dragenter', dragenter);
    zone.addEventListener('dragleave', dragleave);
    zone.addEventListener('dragover', dragover);
    zone.addEventListener('drop', dragdrop);
});

function dragstart(e) {
    e.target.classList.add('drag-start');
    e.dataTransfer.setData('id', e.target.dataset.target);
    setTimeout(() => {
        e.target.style.opacity = "0.01";
    }, 0);
}
function dragend(e) {
    e.target.classList.remove('drag-start');
    e.target.style.opacity = "1";
}

function dragenter(e) {
    e.preventDefault();
    e.target.classList.add('drop-zone')
}
function dragover(e) {
    e.preventDefault();
}
function dragleave(e) {
    e.preventDefault();
    e.target.classList.remove('drop-zone');
}
function dragdrop(e) {
    e.preventDefault();
    e.target.classList.remove('drop-zone');
    e.target.append(dragElement);
}
