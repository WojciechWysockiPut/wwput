const count = document.getElementById("count");

incrementVisitsCount();

function incrementVisitsCount() {
    let visits;

    if (!localStorage.getItem("visits")) localStorage.setItem("visits", 1);
    else {
        visits = +localStorage.getItem("visits");
        const incrementedCount = visits + 1;

        localStorage.setItem("visits", incrementedCount);
    }

    count.innerText = localStorage.getItem("visits");
}



    
var startTime = sessionStorage.getItem("startTime");

    
if (!startTime) {
    startTime = new Date().getTime();
    sessionStorage.setItem("startTime", startTime);
}


setInterval(function() {
    // Aktualny czas
    var currentTime = new Date().getTime();

    // Oblicz czas spędzony na stronie
    var timeElapsed = currentTime - startTime;

    
    var hours = Math.floor((timeElapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeElapsed % (1000 * 60)) / 1000);

    // Wyświetl czas w elemencie HTML
    document.getElementById("czas").innerHTML = hours + ":" + minutes + ":" + seconds;
}, 1000); // 1000 ms = 1 sekunda
