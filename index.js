let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let containerDom = document.querySelector('.container');
let listItemDom = document.querySelector('.container .list');
let tumbnailDom = document.querySelector('.container .tumbnail');

nextDom.onclick = function(){
    showSlider('next');
}

prevDom.onclick = function(){
    showSlider('prev');
}

let timeRunning = 3000;
let runTimeOut;
function showSlider(type){
    let itemSlider = document.querySelectorAll('.container .list .item');
    let itemTumbnail = document.querySelectorAll('.container .tumbnail .item');

    if(type === 'next'){
       listItemDom.appendChild(itemSlider[0]);
       tumbnailDom.appendChild(itemTumbnail[0]);
       containerDom.classList.add('next');
    }else{
       let positionLastItem = itemSlider.length-1;
       listItemDom.prepend(itemSlider[positionLastItem]);
       tumbnailDom.prepend(itemTumbnail[positionLastItem]);
       containerDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() =>{
       containerDom.classList.remove('next');
       containerDom.classList.remove('prev');
    }, timeRunning)

}