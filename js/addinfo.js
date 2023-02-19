let submitbutton =  document.getElementById("secondstep");
var objectName = document.getElementById('oname');
var objectid = document.getElementById("id");
var objectType = document.getElementById("object");
var moreinfo = document.getElementsByClassName('moreinfo')[0];
var count =0;
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

        // if table is selected 

        if(objectType.value == "table")
        {
            tableInfo(objectid,objectName);

        }else
        {
            alert("Sorry Except Table We are not Providing Service");
        }

    }

}



// function for the table 

function tableInfo(id,name)
{


    //first we will ask for the field name

     moreinfo.innerHTML ='';
    addMoreFields(count);
    moreinfo.innerHTML += `  <div class="container mt-3">
    <input type="button" id="addmore" value="Add Filed" class="btn btn-warning mt-2 mx-2">
    <input type="button" value="Next Step" class="btn btn-info mt-2 mx-2">
</div>`;

//for add more field
try {
    
    document.getElementById('addmore').addEventListener('click',(e)=>{

        count =  count+1;
        addMoreFields(count);


    })

} catch (error) {
    
}



}


function addMoreFields(id)
{
    id +=1;

    moreinfo.innerHTML += `
    <div class="container"> 
    
    
    <div class="row">

    <div class="col-sm-3">
        <label for="">Field No. <span class="text-danger">*</span></label>
        <input type="number" name="" id="no${id}" class="form-control">
    </div>
    <div class="col-sm-3">
        <label for="">Field Name <span class="text-danger">*</span></label>
        <input type="text" name="" id="name${id}" class="form-control">
    </div>

    <div class="col-sm-3">
        <label for="">Data Type <span class="text-danger">*</span></label>
        <input type="number" name="" id="type${id}" class="form-control">
    </div>

    <div class="col-sm-3">
        <label for="">Data Length <span class="text-danger">*</span></label>
        <input type="number" name="" id="length${id}" class="form-control">
    </div>
   
   </div>
    
    
    </div>

     
    
`
}