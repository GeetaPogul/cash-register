const  billAmount = document.querySelector("#bill-amount");
const cashGiven= document.querySelector("#cash-given");
const  btnCheck = document.querySelector("#check-buttton");
const message = document.querySelector("#error-message");

const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes =[ 2000 , 500, 100, 20, 10, 5, 1];


btnCheck.addEventListener("click", function validateBillAndCashAmount(){
hideMessage()
if(billAmount.value>0){

      if(cashGiven.value >= billAmount.value){
           const amountToBeReturned = cashGiven.value - billAmount.value;
           calculateChange(amountToBeReturned);
      } 
      else{
            showMessage("Do you wanna wash Plates");
         }
       } 
    else{
        showMessage("Invalid Bill Amount");
    }

});

function calculateChange(amountToBeReturned) {
     for(let i = 0; i < availableNotes.length; i++){

     const numberOfNotes = Math.trunc(
        amountToBeReturned / availableNotes[i]
        );

        amountToBeReturned %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes ;
    }
 }


function hideMessage(){
    message.style.display='none';
    message.style.color='white';
    message.style.textAlign='center';
    message.style.fontSize = 'larger';
}

function showMessage(msg){
    message.style.display='block';
    message.innerText= msg;
    message.style.color='white';
    message.style.textAlign='center';
    message.style.fontSize = 'larger';
}

