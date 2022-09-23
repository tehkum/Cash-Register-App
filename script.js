var billAmount = document.querySelector("#bill-amt");
var cashAmount = document.querySelector("#cash-amt");
var checkButton = document.querySelector("#click-bill");
var message = document.querySelector("#error-mess");
var noteNumber = document.querySelectorAll(".no-of-change");
var numMoney= [2000,500,200,100,50,20,10,5,2,1];
checkButton.addEventListener("click",function operationsCheck()
{
    message.style.display = "none";
   
    if(billAmount.value > 0)
    {
        if(Number(billAmount.value) >= Number(cashAmount.value)){
            errorOperation("cash amount should be more");
        }else{
            var returnAmount = Number(cashAmount.value) - Number(billAmount.value);
            totalAmountOfChange(returnAmount);
            // console.log(returnAmount);
        }
    } else{
        errorOperation("bill amount should be more than zero");
    }

});
function errorOperation(msg){
    message.style.display = "block";
    message.innerText = msg;
}
function totalAmountOfChange(returnAmount){
    for(let i = 0; i < numMoney.length; i++){
        var distributionAmount = Math.trunc(Number(returnAmount) / numMoney[i]);
        returnAmount = returnAmount%numMoney[i];
        noteNumber[i].innerText=  distributionAmount; 
        console.log(distributionAmount);
    }
    
}