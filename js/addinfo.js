let submitbutton =  document.getElementById("secondstep");
var objectName = document.getElementById('oname');
var objectid = document.getElementById("id");

//when user will click for the next step
submitbutton.onclick = (e)=>{

    //check the required box 
    
    if(objectName.value.length <= 2)
    {
        alert("Please Enter The Valid object Name ");
       
        return ;

    }else if(objectid.value == "")
    {
        alert("Please Enter the valid Object Id");

    }else

    {

        //if everything is correct then ask for the further properties...

        

    }

}