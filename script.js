var isToggled=false;
var toggle=document.getElementById('toggle');
toggle.addEventListener('click',function(){
    var body=document.querySelector('body');
    var circle=document.getElementById('circle');
    var heading=document.getElementById('heading');
    if(isToggled==false){
        body.style.background = 'black';
        circle.style.marginLeft = '100px';
        heading.style.color = 'white';
        isToggled=true;
    }
    else{
        body.style.background='white';
        circle.style.marginLeft = '1px';
        heading.style.color='black';
        isToggled=false;
    }
});
