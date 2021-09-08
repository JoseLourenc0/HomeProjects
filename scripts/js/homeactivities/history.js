function buildSkeleton(){
    let rooot = document.getElementById('root')

    root.innerHTML+=
    `
    <div class="container">
      <div class="row">
        <div class="col">
          <table class="table" >
            <thead>
              <tr>
                <th>ID</th>
                <th>User</th>
                <th>Date</th>
                <th>Details</th>
              </tr>
            </thead>

            <tbody id="listActivities">

            </tbody>
            
          </table>
        </div>
      </div>
    </div>
    `
}

function getHistory(){
$.ajax({

    url:'../../scripts/php/homeactivities/gethistory.php',
    method:'GET',
    dataType:'json'
    
}).done(function(e){

    if(e){

        let listh = document.getElementById('listActivities')
        listh.innerHTML = ''

        e.forEach(element => {
            let info = new Object
            arr.forEach((element2,index)=>{
                if(arr[index][0] == element.username){
                    info.email = arr[index][1]
                    info.phonenumber = arr[index][2]
                }
            })

            let row = listh.insertRow()

            row.insertCell(0).innerHTML = element.id_reg
            row.insertCell(1).innerHTML = element.usr_reg
            row.insertCell(2).innerHTML = element.date_reg

            let btn = document.createElement('button')
            btn.className = 'btn btn-primary'
            btn.innerHTML = '<i class="fa fa-search"></i>'
            btn.id = `id_cidade_${element.id_reg}`
            btn.onclick = e=>{
                e.preventDefault()
                buildModal({
                    title:'Details',
                    modal_content:`
                    <h3>Details</h3>
                    <br>
                    <p><b>Name:</b> ${element.usr_reg} </p>
                    <p><b>E-mail:</b> ${info.email} </p>
                    <p><b>Number:</b> ${info.phonenumber} </p>
                    <p><b>Activity registered at:</b> ${element.date_reg} </p>
                    `,
                    btn_text:'Close',
                    btn_class:'secondary'
                })
            }

            row.insertCell(3).append(btn)
                // `
                //     <div class = "box">
                //         <div class = "idreg">${element.id_reg}</div>
                //         <div class = "usrreg">${element.usr_reg}</div>
                //         <div class = "datereg">${element.date_reg}</div>
                //     </div>
                // `
        })
    }else{
        root.innerHTML += '<div class = "text-light" align = "center">NO ACTIVITES YET</div>'
    }
})
}

let arr = new Array()

function getUsers(){
    $.ajax({

        url:'../../scripts/php/homeactivities/getusers.php',
        method:'GET',
        dataType:'json'
        
    }).done(e=>{
        e.forEach((element,i)=>{
            arr[i] = new Array()
            arr[i][0] = element.user_name
            arr[i][1] = element.email
            arr[i][2] = element.phonenumber
        })
    })
}

getUsers()
buildSkeleton()
getHistory()