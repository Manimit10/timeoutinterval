

const btn = document.getElementById('settime');

btn.addEventListener('click',click);

function click(){
    console.log('button clicked');
    settime();
}
function settime(){
    setTimeout(function(){
        alert("5 second passed from your click!")
    },5000)
}
