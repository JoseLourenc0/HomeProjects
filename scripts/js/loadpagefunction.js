// function addScript(file){
//     let js = document.createElement("script");

//     js.type = "text/javascript";
//     js.src = 'scripts/js/'+file+'.js';

//     document.head.appendChild(js);
// }

function selectByTitle(title){
    document.querySelectorAll('title')[0].innerHTML = title
}

addEventListener('load',function(){
    let url = window.location.href
    let itemnav = document.getElementsByClassName('nav-item')

    if(url.includes('index')){
        //addScript('app')
        itemnav[0].classList.add('active')
        selectByTitle('HOME')
    }

    if(url.includes('controlusers')){
        //addScript('app')
        itemnav[1].classList.add('active')
        selectByTitle('New User')
    }

    if(url.includes('history')){
        //addScript('app')
        itemnav[2].classList.add('active')
        selectByTitle('History')
    }
})

function buildModal(
    {
        title='Modal',
        modal_title_div='Modal Title',
        modal_content='Modal content',
        btn_text='Button text',
        btn_class='danger'
    }
    =
    {}
    ){
    document.getElementById('modal_title').innerHTML = title
    document.getElementById('modal_title_div').className = modal_title_div
    document.getElementById('modal_content').innerHTML = modal_content
    document.getElementById('modal_btn').innerHTML = btn_text
    document.getElementById('modal_btn').className = `btn btn-${btn_class}`
    $('#modalUtilities').modal('show')

}