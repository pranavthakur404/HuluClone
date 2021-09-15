function Click1(){
    let x=document.getElementById("tab-click");
    x.style.backgroundImage="url('../images/section4-banner1.jpg')"

}
function Click2(){
    let y=document.getElementById("tab-click");
    y.style.backgroundImage="url('../images/section4-banner2.jpg')";
    
}
function Click3(){
    let z=document.getElementById("tab-click");
    z.style.backgroundImage="url('../images/section4-banner3.jpg')";
}


// add on funtion
function addOn(){
    let x = document.getElementById("accordion-content");
    if(x.style.display == 'none'){
        x.style.display='block';
    }
    else{
        x.style.display='none';
    }
}
