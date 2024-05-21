let toggleText = (x,y) => {
    let paragraph = document.getElementById(y);
    let picture = document.getElementById(x);
    console.log(picture);
    console.log(paragraph);
    if (paragraph.style.display=='none'){
        picture.src='assets/images/icon-minus.svg'
        paragraph.style.display='block';
    }else{
        picture.src='assets/images/icon-plus.svg'
        paragraph.style.display='none'
    }
}