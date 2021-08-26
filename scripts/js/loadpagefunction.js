function addScript(arquivo){
    let js = document.createElement("script");

    js.type = "text/javascript";
    js.src = 'scripts/js/'+arquivo+'.js';

    document.head.appendChild(js);
}

function mudaTitle(titulo){
    document.querySelectorAll('title')[0].innerHTML = titulo
}

addEventListener('load',function(){
    let urldosite = window.location.href
    let itemnav = document.getElementsByClassName('nav-item')

    if(urldosite.includes('cadastronoestoque')){
        addScript('app')
        itemnav[0].classList.add('active')
        mudaTitle('HOME')
    }

    if(urldosite.includes('consulta')){
        addScript('app')
        itemnav[1].classList.add('active')
        mudaTitle('New User')
    }

    if(urldosite.includes('registranotas')){
        addScript('registranotas')
        itemnav[2].classList.add('active')
        mudaTitle('History')
    }
/* alert(window.onload) */
})