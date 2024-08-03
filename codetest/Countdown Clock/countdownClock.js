// let increase= document.querySelector("#increase");
// // setter = parseInt(setter); 
// let setter;
// increase.addEventListener("click", () => {
//     let setter = document.querySelector("#countdownSetter").value;
//     setter = Number(setter);
//     console.log(setter);
//     for (let i=0; i<setter.length; i++) {
//         setter[i]
//     }
    
// })


// function getTimeRemaining(endtime) {
//     var t = Date.parse(endtime) - Date.parse(new Date());
//     var seconds = Math.floor((t / 1000) % 60);
//     var minutes = Math.floor((t / 1000 / 60) % 60);
//     var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
//     var days = Math.floor(t / (1000 * 60 * 60 * 24));
//     return {
//         'total' : t,
//         'days' : days,
//         'hours' : hours,
//         'minutes' : minutes,
//         'seconds' : seconds
//     };
// }

// function initializeClock(id, endtime) {
//     var clock = document.getElementById(id);
//     var daysSpan = clock.querySelector('.days');
//     var hoursSpan = clock.querySelector('.hours');
//     var minutesSpan = clock.querySelector('.minutes');
//     var secondsSpan = clock.querySelector('.seconds');

//     function updateClock() {
//         var t = getTimeRemaining(endtime);

//         daysSpan.innerHTML = t.days;
//         hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
//         minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
//         secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

//         if (t.total <= 0) {
//             clearInterval(timeinterval);
//         }
//     }

//     updateClock();
//     var timeinterval = setInterval(updateClock, 1000);
// }

// var deadline = new Date(Date.parse(new Date()) + 4 * 24 * 60 * 60 * 1000);
// initializeClock('clockdiv', deadline);




function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total' : t,
        'days' : days,
        'hours' : hours,
        'minutes' : minutes,
        'seconds' : seconds
    };
}

let timeLimit = 8

function initializeClock(id, endtime) {
    let zeroTime = new Date(Date.parse(new Date()) + 0 * 0 * 0 * 0 * 1000);

    console.log("endtime =>",endtime)
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        let t = getTimeRemaining(endtime);
        if (Date.parse(new Date()) >= Date.parse(endtime) ) {
            // t = getTimeRemaining(zeroTime);
            t.total = 0

        } else {
            t = getTimeRemaining(endtime)
            
        }

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            // clearInterval(timeinterval);
            window.clearInterval(window.endtime)
        }
    }


        updateClock();
        var timeinterval = setInterval(updateClock, 1000);



}


let increase= document.querySelector("#increase");
// setter = parseInt(setter); 
let setter = 0;

//
var deadline = new Date(Date.parse(new Date()) + setter * 24 * 60 * 60 * 1000);

increase.addEventListener("click", () => {
    let setter = document.querySelector("#countdownSetter").value;
    setter = Number(setter);
    console.log(setter);
    for (let i=0; i<setter.length; i++) {
        setter[i]
    }

    var newDeadline = new Date(Date.parse(new Date()) + setter * 24 * 60 * 60 * 1000);


    initializeClock('clockdiv', newDeadline);

    
})



console.log("setter =>", setter, "deadline =>", deadline)
initializeClock('clockdiv', deadline);
window.clearInterval(window.deadline)


