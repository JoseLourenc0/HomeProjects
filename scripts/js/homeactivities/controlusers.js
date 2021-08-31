let root = document.getElementById('root')

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
            
            <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
            
            <div class="col-sm-10">
            
                <input type="password" class="form-control" id="password" placeholder="Password" required>
            
            </div>

        </div>
        <input type="submit" class="btn btn-primary col-md-6" onclick="createNewUser()" value="CREATE NEW USER">
    </form>

</div>`

function createNewUser(){
	
	let user_name = document.getElementById('name').value
	let user_username = document.getElementById('username').value
	let user_password = document.getElementById('password').value

	if(user_name != false && user_name != '' && user_name != undefined && user_name != null)
		if(user_username != false && user_username != '' && user_username != undefined && user_username != null)
			if(user_password != false && user_password != '' && user_password != undefined && user_password != null){
				$.ajax({
					url:'../../scripts/php/homeactivities/regnewuser.php',
					data:{user_name,user_username,user_password},
					method:'POST',
					dataType:'json'
				}).done(e=>{
					if(e===1){
						document.getElementById('name').value = ''
						document.getElementById('username').value = ''
						document.getElementById('password').value = ''
					}
				}
				)
			}
}