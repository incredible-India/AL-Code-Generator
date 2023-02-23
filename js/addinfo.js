let submitbutton =  document.getElementById("secondstep");
var objectName = document.getElementById('oname');
var objectid = document.getElementById("id");
var objectType = document.getElementById("object");
var moreinfo = document.getElementsByClassName('moreinfo')[0];
var addbtninfo = document.getElementsByClassName('addbtninfo')[0];
var count =0;
var keyinfobox = document.getElementsByClassName('keyinfo')[0];

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

    var addbtn= document.createElement('div');

    addbtn.setAttribute('class',`container mt-3`)

    addbtn.innerHTML =`<div class="container mt-3">
    <input type="button" id="addmore" value="Add Field" class="btn btn-warning mt-2">
    <input type="button" value="Next Step" class="btn btn-info mt-2 mx-2 nextstep">
    <input type="button" value="Generate Code" class="btn btn-success mt-2 mx-2 cg">
</div>`


    moreinfo.innerHTML ='';
  
    addMoreFields(count);
    addbtninfo.append(addbtn);


    


    //first we will ask for the field name

    
  

    moreinfo.style.display = "block";

//for add more field

 

document.getElementById('addmore').onclick=(e)=>{

    count =  count+1;
    addMoreFields(count);


}


  
//for the next stpe where we need to ask the key information
document.getElementsByClassName('nextstep')[0].addEventListener('click',()=>{

    keyinfobox.style.display = 'block';//for the key div
    document.getElementsByClassName('finalkeys')[0].style.display  = 'block';//THIS THE KEY for the adding new keys fileds and the generate
   //we need two add two buttong i.e code gegenration and nextstep for the fileds 
   document.getElementsByClassName('nextstep')[0].style.display = 'none';
   document.getElementsByClassName('cg')[0].style.display ='none'; 
    count = 0;
})

//for the key buttons add new key fields

document.getElementById('addmoreKEYS').addEventListener('click',()=>{


    let keyElement = document.createElement('div');

    keyElement.setAttribute('class',"container mt-3");

    keyElement.innerHTML += `
    
    <label for="key${count}">Key</label>
    <input type="text" name="" id="key${count}" class="form-control">
    <label for="fieldname${count}">Filed Name</label>
    <input type="text" name="" id="fieldname${count}" class="form-control">
    `;

    keyinfobox.appendChild(keyElement);
})


}


function addMoreFields(id)
{

    let doc = document.createElement('div');

    doc.setAttribute('class',`continer ${id}`)
    id +=1;

   doc.innerHTML += `
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
        <label for="type${id}">Data Type <span class="text-danger">*</span></label>
       <select id="type${id}" class="form-control"> 
        <option value = "Integer">Integer</option>
        <option value="Decimal"> Decimal </option>
        <option value="Decimal"> Decimal </option>
        <option value="Text"> Text </option>
        <option value="Code"> Code </option>
        <option value="Record"> Record </option>
        <option value="Option"> Option </option>
        <option value="BLOB"> BLOB </option>
       </select>
    </div>

    <div class="col-sm-3">
        <label for="">Data Length <span class="text-danger">*</span></label>
        <input type="number" name="" id="length${id}" class="form-control">
    </div>
   
   </div>
    
    
    </div>
<hr>
     
    
`
// addbtn.parentNode.insertBefore(doc,addbtn);
moreinfo.appendChild(doc);
}




 