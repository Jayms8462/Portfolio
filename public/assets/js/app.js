function imageChange(img){
    if (img === "one"){
        $('section.one').css('background-image', 'url("../../images/banner.jpg")');
    } else if (img === "two"){
        $('section.one').css('background-image', 'url("../../images/pic05.jpg")');
    } else if (img === "three"){
        $('section.one').css('background-image', 'url("../../images/pic06.jpg")');
    }
}
