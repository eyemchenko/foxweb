var $ = jQuery.noConflict();
$(function () {
    var visits = parseInt(getCookie("visits"));
    var time = 60 * 60 * 24;
    console.log(visits);
    if (isNaN(visits)) {
        createCookie("visits", 1, time);
    } else {
        createCookie("visits", visits + 1, time);
    }
    visits = parseInt(getCookie("visits"));
    if (visits <= 1) {
        var now = new Date();
        createCookie("time-start", Date.now(), time);
        createCookie("time-end", now.setSeconds(now.getSeconds() + time), time);
        window.onload = function () {
            var display = document.querySelector('#top-clock');
            var display2 = document.querySelector('#bottom-clock');
            var display3 = document.querySelector('#head-clock');
            startTimer(time, display);
            startTimer2(time, display2);
            startTimer3(time, display3);
        };
    } else {
        var remainingTime = (parseInt(getCookie("time-end")) - Date.now()) / 1000 | 0;
        if (remainingTime > 0) {
            console.log(Date.now());
            console.log(remainingTime);
            window.onload = function () {
                var display = document.querySelector('#top-clock');
                var display2 = document.querySelector('#bottom-clock');
                var display3 = document.querySelector('#head-clock');
                startTimer(remainingTime, display);
                startTimer2(remainingTime, display2);
                startTimer3(remainingTime, display3);
            };
        }
    }
    console.log(document.cookie);
});
function createCookie(name, value, expires, path, domain) {
    var cookie = name + "=" + escape(value) + ";";
    if (expires) {
        if (expires instanceof Date) {
            if (isNaN(expires.getTime()))
                expires = new Date();
        }
        else
            expires = new Date(new Date().getTime() + parseInt(expires) * 1000 * 60 * 60 * 24);
        cookie += "expires=" + expires.toGMTString() + ";";
    }
    if (path)
        cookie += "path=" + path + ";";
    if (domain)
        cookie += "domain=" + domain + ";";
    document.cookie = cookie;
}

function deleteCookie(name, path, domain) {
    if (getCookie(name))
        createCookie(name, "", -1, path, domain);
}

function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2)return parts.pop().split(";").shift();
}

function startTimer(duration, display) {
    var start = Date.now(), diff, days, hours, minutes, seconds;

    function timer() {
        diff = duration - (((Date.now() - start) / 1000) | 0);
        days = (diff / 86400) | 0;
        hours = (diff / 3600) - days * 24 | 0;
        minutes = (diff / 60) - days * 24 * 60 - hours * 60 | 0;
        seconds = (diff % 60) | 0;
        days = days < 10 ? "0" + days : days;
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.innerHTML = '<div class="timer-block"><p>00</p></div>' + '<div class="timer-block"><p>' + hours + '</p></div>' + '<div class="timer-block"><p>' + minutes + '</p></div>' + '<div class="timer-block timer-block-red"><p>' + seconds + '</p></div>' + '<div class="clear"></div>' + '<p>Дней</p>' + '<p>Часов</p>' + '<p>Минут</p>' + '<p>Секунд</p>';
        if (diff <= 0) {
            start = Date.now() + 1000;
        }
    };
    timer();
    setInterval(timer, 1000);
}

function startTimer2(duration, display) {
    var start = Date.now(), diff, days, hours, minutes, seconds;

    function timer() {
        diff = duration - (((Date.now() - start) / 1000) | 0);
        days = (diff / 86400) | 0;
        hours = (diff / 3600) - days * 24 | 0;
        minutes = (diff / 60) - days * 24 * 60 - hours * 60 | 0;
        seconds = (diff % 60) | 0;
        days = days < 10 ? "0" + days : days;
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.innerHTML = '<div class="timer-block"><p>00</p></div>' + '<div class="timer-block"><p>' + hours + '</p></div>' + '<div class="timer-block"><p>' + minutes + '</p></div>' + '<div class="timer-block timer-block-red"><p>' + seconds + '</p></div>' + '<div class="clear"></div>' + '<p>Дней</p>' + '<p>Часов</p>' + '<p>Минут</p>' + '<p>Секунд</p>';
        if (diff <= 0) {
            start = Date.now() + 1000;
        }
    };
    timer();
    setInterval(timer, 1000);
}

function startTimer3(duration, display) {
    var start = Date.now(), diff, days, hours, minutes, seconds;

    function timer() {
        diff = duration - (((Date.now() - start) / 1000) | 0);
        days = (diff / 86400) | 0;
        hours = (diff / 3600) - days * 24 | 0;
        minutes = (diff / 60) - days * 24 * 60 - hours * 60 | 0;
        seconds = (diff % 60) | 0;
        days = days < 10 ? "0" + days : days;
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.innerHTML = '<div class="timer-block"><p>00</p></div>' + '<div class="timer-block"><p>' + hours + '</p></div>' + '<div class="timer-block"><p>' + minutes + '</p></div>' + '<div class="timer-block timer-block-red"><p>' + seconds + '</p></div>' + '<div class="clear"></div>' + '<p>Дней</p>' + '<p>Часов</p>' + '<p>Минут</p>' + '<p>Секунд</p>';
        if (diff <= 0) {
            start = Date.now() + 1000;
        }
    };
    timer();
    setInterval(timer, 1000);
}