let divContainTheImg = document.querySelector('.image');
let container = document.querySelector('.container');

function phones(img){

    divContainTheImg.firstElementChild.src=img;
}

function colors(color){
    
    container.style.background=color
}