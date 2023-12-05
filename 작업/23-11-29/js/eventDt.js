setParam ={}
setParam.borderDat = borderDat;
console.log(setParam);

let bData= setParam
/* 
<tr>
    <td>1</td>
    <th>
    <a href="#!">[공지사항] 개인정보 처리방침 변경안내처리방침</a>
    <p>테스트</p>
    </th>
    <td>2017.07.13</td>
</tr>
*/
let html = "";
for(i=0; i<bData.length; i++){
    html = "<tr>" +
            "    <td>"+bData[i].num+"</td>" +
            "    <th>" +
            "    <a href='#!'>"+ bData[i].title +"</a>" +
            "    <p>테스트</p>" +
            "    </th>" +
            "    <td>"+ bData[i].date +"</td>" +
            "</tr>" 
            let tbody = document.querySelector("tbody");
            tbody.innerHTML += html;
        }

function evNext() {
    document.getElementsByClassName("eventPo")[0].style.display = "none";
    document.getElementsByClassName("eventPo2")[0].style.display = "block";


}

function evBefore(){
    document.getElementsByClassName("eventPo2")[0].style.display = "none";
    document.getElementsByClassName("eventPo")[0].style.display = "block";
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