 var billAmount=document.querySelector("#bill-amount");

 var cashGiven=document.querySelector("#cash-given");
 
 var chec=document.querySelector("#checker");

 var noteno= document.querySelectorAll(".note-no");
  var message=document.querySelector("#error-message");
 
 const avaliableNotes=[2000,500,100,20,10,5,1];

 chec.addEventListener("click",function checkbillammount()
    { hideMessage()
        if(billAmount.value > 0 )
        {
            if(cashGiven.value >=billAmount.value)
            {
                const amountToGive=cashGiven.value-billAmount.value;
                calculate(amountToGive);
            }
            else
            {
                outputMessage("hey!! can you please wash the plates we have many to wash")
            }
        }
        else{
            outputMessage("inValid bill amount");
        }
    

 }
 
 );


function calculate(amountToGive)
{
      for(let i=0;i<avaliableNotes.length;i++)
      {
          const noOFNotes=Math.trunc(amountToGive/avaliableNotes[i]);
          amountToGive=amountToGive%avaliableNotes[i];
          noteno[i].innerText=noOFNotes

      }
}

function hideMessage(){
    message.style.display="none"; 
}
 
function outputMessage(msg)
{
    message.style.display="block";
    message.innerText=msg   
}
