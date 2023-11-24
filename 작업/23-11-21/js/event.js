function evNext() {
    document.getElementsByClassName("eventPo")[0].style.display = "none";
    document.getElementsByClassName("eventPo2")[0].style.display = "block";


}

function evBefore(){
    document.getElementsByClassName("eventPo")[0].style.display = "none";
}


+1

function setEvent(){
    var resultImg = document.createElement('img');
    const imgDiv = document.querySelector('eventPo');
    var imgURL = 'img/event/event' + point + '.png';
    resultImg.src = imgURL;
    resultImg.alt = point;
    resultImg.classList.add('img-fluid');
    imgDiv.appendChild(eventPo);
}