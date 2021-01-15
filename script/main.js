document.getElementById('RandomBtn').addEventListener('click',function(){
    var RandomNumber = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('RandomInput').value = RandomNumber;
})

function calculateDigitClickHandler(id){
    const digit = id;
   const oldDigit =  document.getElementById('digitInput').value;
   const newDigit = oldDigit + digit;
   document.getElementById('digitInput').value = newDigit;
}
document.getElementById('submitBtn').addEventListener('click',function(){
    const digitValue = document.getElementById('digitInput').value;
    const RandomInput = document.getElementById('RandomInput').value;

    if(RandomInput === digitValue && RandomInput > 0){
     document.getElementById('pin-Match').style.display = "block";
    document.getElementById('pinDont-Match').style.display = "none";

    }if(RandomInput === digitValue == false ){
    document.getElementById('pinDont-Match').style.display = "block";
    document.getElementById('pin-Match').style.display = "none";
    }
})
document.getElementById('deleteDigit').addEventListener('click', ()=>{
    const inputValue = document.getElementById('digitInput').value;
    const newInput = inputValue.slice(0, -1);
    document.getElementById('digitInput').value= newInput;
})
document.getElementById('ClearBtn').addEventListener('click', ()=>{
    const inputValue = document.getElementById('digitInput').value = '';
})