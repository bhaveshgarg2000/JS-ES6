function getCountry(ip) {
    if (ip % 10 === 0) {
        return 'America';
    } else if (ip % 2 === 0) {
        return 'England';
    } else {
        return 'India';
    }
}

function getGreeting(country) {
    var time = new Date().getHours();
    var greeting;

    if (time >= 5 && time < 12) {
        greeting = 'Good Morning';
    } else if (time >= 12 && time < 18) {
        greeting = 'Good Afternoon';
    } else {
        greeting = 'Good Night';
    }

    return greeting + ' ' + country;
}

function displayGreeting() {
    var urlParams = new URLSearchParams(window.location.search);
    var ip = urlParams.get('ip');
    var country = getCountry(ip);
    var greeting = getGreeting(country);
    document.getElementById('heading').innerText = greeting;
}

document.addEventListener('DOMContentLoaded', displayGreeting);