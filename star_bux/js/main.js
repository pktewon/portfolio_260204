let pick = document.querySelector(".pick");
let moved = false;

let photo = document.querySelector(".photo");

window.addEventListener("scroll", function(){
    let value = this.window.scrollY;
    console.log("scrollY", value);

    if( value> 700){
        pick.style.animation = 'unpick 1s ease-out forwards'
    } else{
        pick.style.animation = 'pick 1s ease-out'
    }
}
)

window.addEventListener("scroll", function(){
    let value = this.window.scrollY;
    console.log("scrollY", value);

    if( value > 400){
        photo.style.animation = 'unphoto 3s ease-out forwards'
    } else{
        photo.style.animation = 'photo 3s ease-out'
    }
}
)