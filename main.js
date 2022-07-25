
let x=document.getElementById('userValue');

function showInputInScreen()
{
      
var showData=document.getElementById('showData')
    let x=document.getElementById('userValue');
    var userinputValue=x.value;
    var duration=document.getElementById('duration');
    var userdurationValue=duration.value;
    showData.innerHTML =userinputValue;
    let  successElm= document.getElementById('success');
    let  failureElm= document.getElementById('error');
    let CancelableELm=document.getElementById('Cancelable');
    let radioValue="";

      
       if (userinputValue==="")
       {
         alert('input is blank');
         showData.style.display='none';
         
       }
      else if (CancelableELm.checked)
       {
         radioValue="Cancelable";
         console.log(userinputValue);
         showData.style.display='block';
         successElm.Disabled;
         showData.innerHTML = userinputValue + "X";

       }
      
  else  if(successElm.checked)
   { 
      
      radioValue="sucess";
      showData.style.background='green'
      showData.style.display='block';
      setInterval(function start() {showData.innerHTML="",showData.style.display='none'}, userdurationValue);
   }

 
 else if(failureElm.checked)
 { 
    radioValue="error";
    showData.style.background='red';
    showData.style.display='block';
    setInterval(function start() {showData.innerHTML="",showData.style.display='none'}, userdurationValue);
 }



}

function clearInputScreen()
{ 
    showData.style.display='none';
}




