// Hello JS!
// I'm back baby lol


// execute function on window load
// window.onload = function() { load_banner() };

// function load_banner()
// {
//     let message = "Welcome back to web development!";
//     let banner = document.getElementById('banner');
//     banner.innerHTML = message;
// }

// new way using arrow functions :)
window.addEventListener('load', (event) => {
    let message = "Welcome back to web development!";
    let banner = document.getElementById('banner');
    banner.innerHTML = message;
});
