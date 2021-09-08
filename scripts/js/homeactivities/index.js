let root = document.getElementById('root')

function buildSkeleton(){
    root.innerHTML = 
    `
    <div class = "text-light" id = "LastActivity"></div>
    `
}

function getLastActivity(){
    $.ajax({
        url:'../../scripts/php/homeactivities/getlastactivity.php',
        method:'GET',
        dataType:'json'
    }).done(e=>{

        let lastActivity = document.getElementById('LastActivity')

        lastActivity.innerHTML = ''

        if(e){

            lastActivity.innerHTML += `
            <h3 class="text-light" align="center">
                Last Activity by: ${e.usr_reg} at ${e.date_reg}
            </h3>
            <br>
            `

        }else{

            lastActivity.innerHTML += 
            `
            <h3 class="text-light" align="center">
                Last Activity by: No one at Never
            </h3>
            <br>
            `

        }

    })

}


let arr = new Array()
let arr2 = new Array()

function getUsers(){
    $.ajax({

        url:'../../scripts/php/homeactivities/getusers.php',
        method:'GET',
        dataType:'json'

    }).done(e=>{
        
        if(e){

            e.forEach((element,i) => {
                arr[i] = element.name
                arr2[i] = element.user_name
            })

            root.innerHTML += '<section id = "section-creation">'

            let section = document.getElementById('section-creation')

            if(typeof arr !== 'undefined'){

                if(arr.length%2===0){

                    for(let i = 0 ; i < arr.length ; i+=2){
                        
                        let u = i + 1

                        section.innerHTML += 
                            `<div class = "even">
                                <input onclick = newReg('${arr[i]}','${arr2[i]}') animation = "left" type = "button" id = "${arr[i]}_element" value = "${arr[i]}">
                                <input onclick = newReg('${arr[u]}','${arr2[u]}') animation = "right" type = "button" id = "${arr[u]}_element" value = "${arr[u]}">
                            </div>
                            <br>
                            `
                        
                    }

                    section.innerHTML += '</section>'

                }else{

                    if(arr.length!==1){
                        
                        for(let i = 0 ; i < arr.length ; i+=2){
                            
                            let u = i + 1

                            if(arr.length-i===1)
                                break

                            section.innerHTML += 
                                `<div class = "even">
                                    <input onclick = newReg('${arr[i]}','${arr2[i]}') animation = "left" type = "button" id = "${arr[i]}_element" value = "${arr[i]}">
                                    <input onclick = newReg('${arr[u]}','${arr2[u]}') animation = "right" type = "button" id = "${arr[u]}_element" value = "${arr[u]}">
                                </div>
                                <br>
                                `
                            
                        }
                    }

                    section.innerHTML += 
                            `<div class = "odd">
                                <input onclick = newReg('${arr[arr.length-1]}','${arr2[arr2.length-1]}') animation = "top" type = "button" id = "${arr[arr.length-1]}_element" value = "${arr[arr.length-1]}">
                            </div>
                            <br>
                            `

                    section.innerHTML += '</section>'
                }

            }
        }
    })
}

function newReg(usr,username){
    if(typeof usr !== 'undefined'){

        $.ajax({

            url: '../../scripts/php/homeactivities/regnewactivity.php',
            data: {usr,username},
            method: 'POST',
            dataType: 'json'

        }).done(function(e){

            getLastActivity()

        })

    }
}

buildSkeleton()
getLastActivity()
getUsers()