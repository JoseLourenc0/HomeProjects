let root = document.getElementById('root')

function buildSkeleton(){
	root.innerHTML=
	`<div class="text-light" align="center">
	    
	    <form onsubmit="return false">

	        <div class="form-group row col-md-6">
	            
	            <label for="staticEmail" class="col-sm-2 col-form-label">Name</label>
	            
	            <div class="col-sm-10">
	            
	                <input type="text" class="form-control" id="name" placeholder="Name" required>
	            
	            </div>

	        </div>

	        <div class="form-group row col-md-6">
	            
	            <label for="staticEmail" class="col-sm-2 col-form-label">Username</label>
	            
	            <div class="col-sm-10">
	            
	                <input type="text" class="form-control" id="username" placeholder="Username (used to access the system)" required>
	            
	            </div>

	        </div>

	        <div class="form-group row col-md-6">
	            
	            <label for="staticEmail" class="col-sm-2 col-form-label">E-mail</label>
	            
	            <div class="col-sm-10">
	            
	                <input type="email" class="form-control" id="email" placeholder="E-mail" required>
	            
	            </div>

	        </div>

	        <div class="form-group row col-md-6">
	            
	            <label class="col-sm-2 col-form-label">Phone</label>
	            
	            <div class="col-sm-10">
	            
	                <input type="tel" class="form-control" id="phonenumber" placeholder="Phone Number" required>
	            
	            </div>

	        </div>

	        <div class="form-group row col-md-6">
	            
	            <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
	            
	            <div class="col-sm-10">
	            
	                <input type="password" class="form-control" id="password" placeholder="Password" required>
	            
	            </div>

	        </div>
	        <input type="submit" class="btn btn-primary col-md-6" onclick="createNewUser()" value="CREATE NEW USER">
	    </form>

	</div>

	<div class="container">
      <div class="row">
        <div class="col">
          <table class="table" >
            <thead>
              <tr>
                <th>ID</th>
                <th>User</th>
                <th>Details</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody id="listUsers">

            </tbody>
            
          </table>
        </div>
      </div>
    </div>

	`

}

function createNewUser(){
	
	let user_name = document.getElementById('name').value
	let user_username = document.getElementById('username').value
	let user_email = document.getElementById('email').value
	let user_phonenumber = document.getElementById('phonenumber').value
	let user_password = document.getElementById('password').value

	if(user_name != false && user_name != '' && user_name != undefined && user_name != null)
		if(user_username != false && user_username != '' && user_username != undefined && user_username != null)
			if(user_email != false && user_email != '' && user_email != undefined && user_email != null)
				if(user_phonenumber != false && user_phonenumber != '' && user_phonenumber != undefined && user_phonenumber != null)
					if(user_password != false && user_password != '' && user_password != undefined && user_password != null){
						$.ajax({
							url:'../../scripts/php/homeactivities/regnewuser.php',
							data:{user_name,user_username,user_email,user_phonenumber,user_password},
							method:'POST',
							dataType:'json'
						}).done(e=>{
							if(e===1){
								document.getElementById('name').value = ''
								document.getElementById('username').value = ''
								document.getElementById('email').value = ''
								document.getElementById('phonenumber').value = ''
								document.getElementById('password').value = ''
								getUsers()
							}
						}
						)
					}
}

function getUsers(){
	$.ajax({

	    url:'../../scripts/php/homeactivities/getusers.php',
	    method:'GET',
	    dataType:'json'
	    
	}).done(function(e){

	    if(e){

	        let listh = document.getElementById('listUsers')
	        listh.innerHTML = ''

	        e.forEach(element => {
	            let row = listh.insertRow()

	            row.insertCell(0).innerHTML = element.id
	            row.insertCell(1).innerHTML = element.name

	            let btn = document.createElement('button')
	            btn.className = 'btn btn-primary'
	            btn.innerHTML = '<i class="fa fa-search"></i>'
	            btn.id = `id_button_info_${element.id}`
	            btn.onclick = e=>{
	                e.preventDefault()
	                buildModal({
	                	title:'Details',
	                	modal_content:`
	                	<h3>Details</h3>
	                	<br>
	                	<p><b>Name:</b> ${element.name} </p>
	                	<p><b>E-mail:</b> ${element.email} </p>
	                	<p><b>Number:</b> ${element.phonenumber} </p>
	                	<p><b>Registered at:</b> ${element.date_creation} </p>
	                	`,
	                	btn_text:'Close',
	                	btn_class:'secondary'
	                })
	            }
	            row.insertCell(2).append(btn)

	            let btn2 = document.createElement('button')
	            btn2.className = 'btn btn-danger'
	            btn2.innerHTML = '<i class="fa fa-times"></i>'
	            btn2.id = `id_button_delete_${element.id}`
	            btn2.onclick = e=>{
	                e.preventDefault()
	                $.ajax({
	                	url:'../../scripts/php/homeactivities/deleteuser.php',
	                	method:'POST',
	                	data:{id:element.id},
	                	dataType:'json'
	                }).done(e=>
	                	{
	                		e===1?getUsers():''
	                	}
	                )
	            }
	            row.insertCell(3).append(btn2)

	        })
	    }else{
	        root.innerHTML += '<div class = "text-light" align = "center">NO USERS YET</div>'
	    }
	})
}

buildSkeleton()
getUsers()