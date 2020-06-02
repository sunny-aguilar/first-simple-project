// Hello JS!
// I'm back baby lol

let banner = document.getElementById('banner');

banner.onload = function() { load_banner() };

function load_banner()
{
    let message = "Welcome back to web development!";
    banner.innerText = message;
}


