$.ajax({

    url:'../../scripts/php/homeactivities/gethistory.php',
    method:'GET',
    dataType:'json'
    
}).done(function(e){

    console.log(e)
    if(e){

        let root = document.getElementById('root')

        e.forEach(element => {
            root.innerHTML += 
                `
                    <div class = "box">
                        <div class = "idreg">${element.id_reg}</div>
                        <div class = "usrreg">${element.usr_reg}</div>
                        <div class = "datereg">${element.date_reg}</div>
                    </div>
                `
        });
    }
})