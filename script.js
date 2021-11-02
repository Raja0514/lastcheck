



async  function onClick(){

    await fetch("http://www.boredapi.com/api/activity")

    .then(response=>{

        return response.json();
        })
        
        .then(data=>{

            console.log(data);
        
            document.querySelector('.paragraph').textContent=data.activity;
        
        })

        .catch(error=>{
            console.log('error');
            console.error(error);

            document.write(error);
        })
        
        
    

    // let data= await response.json();

    

    // para.textContent=data.activity;
}
    
