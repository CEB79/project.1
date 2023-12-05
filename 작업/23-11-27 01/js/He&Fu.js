function init(){
fetch("footer.html").then(function response(response){
    return response.text();
}).then(function data (data) {
    document.querySelector("footer").innerHTML = data; /* '= '-> '+='로 변경 엎어치기 x*/
});


fetch("header.html").then(function response(response){
    return response.text();
}).then(function data (data) {
    document.querySelector("header").innerHTML = data; /* '= '-> '+='로 변경 엎어치기 x*/
});
      
fetch("borderC.html").then(function response(response){
    return response.text();
}).then(function data (data) {
    document.querySelector(".borderC").innerHTML += data; /* '= '-> '+='로 변경 엎어치기 x*/
});
    
}


init();