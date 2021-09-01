function addScript(file){
    let js = document.createElement("script");

    js.type = "text/javascript";
    js.src = 'scripts/js/'+file+'.js';

    document.head.appendChild(js);
}

function selectByTitle(title){
    document.querySelectorAll('title')[0].innerHTML = title
}

addEventListener('load',function(){
    let url = window.location.href
    let itemnav = document.getElementsByClassName('nav-item')

    if(url.includes('index')){
        addScript('app')
        itemnav[0].classList.add('active')
        selectByTitle('HOME')
    }

    if(url.includes('controlusers')){
        addScript('app')
        itemnav[1].classList.add('active')
        selectByTitle('New User')
    }

    if(url.includes('history')){
        addScript('app')
        itemnav[2].classList.add('active')
        selectByTitle('History')
    }
})