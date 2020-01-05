const timer = document.getElementById('timer');

timer.addEventListener('click', intervalManager);


function intervalManager(){
    console.log('button clicked...');
    setInterval(() => {//using arrow style for Anonymous function
        alert('I am setInerval from JS');
    }, 30000); // 30000 is equal to 30 seconds
}