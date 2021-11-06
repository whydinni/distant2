let zones = document.querySelectorAll('.redBlock');
let whiteBlock = document.getElementById('white');
let gooditem = document.getElementById('good-item');

whiteBlock.addEventListener('dragstart', dragstart);

whiteBlock.addEventListener('dragend', dragend);

zones.forEach(zone => {
    zone.addEventListener('dragenter', dragenter);
    zone.addEventListener('dragleave', dragleave);
    zone.addEventListener('dragover', dragover);
    zone.addEventListener('drop', dragdrop);
})

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
    if (e.target.id === e.dataTransfer.getData('id')) {
        gooditem.style.background = "#fabea7";
    }
    e.target.append(whiteBlock);
}