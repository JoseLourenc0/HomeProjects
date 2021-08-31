let arr = new Array()

$.ajax({

    url:'../../scripts/php/homeactivities/getusers.php',
    method:'GET',
    dataType:'json'

}).done(e=>{
    console.log(e)
    if(e){

        e.forEach((element,i) => {
            arr[i] = element.name
        })

        let root = document.getElementById('root')

        root.innerHTML = '<section id = "section-creation">'

        let section = document.getElementById('section-creation')

        if(typeof arr !== 'undefined'){

            if(arr.length%2===0){

                for(let i = 0 ; i < arr.length/2 ; i++){
                    
                    let u = i + 1

                    section.innerHTML += 
                        `<div class = "even">
                            <input onclick = newReg('${arr[i]}') animation = "left" type = "button" id = "${arr[i]}_element" value = "${arr[i]}">
                            <input onclick = newReg('${arr[u]}') animation = "right" type = "button" id = "${arr[u]}_element" value = "${arr[u]}">
                        </div>
                        <br>
                        `
                    
                }

                section.innerHTML += '</section>'

            }else{

                if(arr.length!==1){
                    
                    for(let i = 0 ; i < arr.length/2-1 ; i++){
                        
                        let u = i + 1

                        section.innerHTML += 
                            `<div class = "even">
                                <input onclick = newReg('${arr[i]}') animation = "left" type = "button" id = "${arr[i]}_element" value = "${arr[i]}">
                                <input onclick = newReg('${arr[u]}') animation = "right" type = "button" id = "${arr[u]}_element" value = "${arr[u]}">
                            </div>
                            <br>
                            `
                        
                    }
                }

                section.innerHTML += 
                        `<div class = "odd">
                            <input onclick = newReg('${arr[arr.length-1]}') animation = "top" type = "button" id = "${arr[arr.length-1]}_element" value = "${arr[arr.length-1]}">
                        </div>
                        <br>
                        `

                section.innerHTML += '</section>'
            }

        }

        function newReg(usr){

            if(typeof usr !== 'undefined'){

                $.ajax({
                    url: '../../scripts/php/homeactivities/regnewactivity.php',
                    data: {usr},
                    method: 'POST',
                    dataType: 'json'
                }).done(function(e){
                    console.log(e)
                })

            }
        }

    }
})

