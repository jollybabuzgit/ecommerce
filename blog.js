/*var rate=36570;
 var c=Number(prompt('pliz select 1 to convert usd to ugx and 2 for ugx to usd'));
 if(c==1){
     var amount=prompt('enter amount in ugx to be converted to usd');
     var newamount= amount*rate;
     alert('the new amount is '+newamount);
 }
 else if(c==2){
    var ugxc=prompt('enter amount in usd to be converted to ugx');
    var newusd= amount/rate;
    alert('the new amount is '+newusd);

 }
 else{
     console.log('invalid selection');
 }*/
 alert('welcome to DFCU ATM MACHINE');
 var pin=Number(prompt('pliz enter your pin'));
 if(pin===2000){
    var cashathand=Number(prompt('pliz enter yr balance on yr a/c'));
    var cashneeded=Number(prompt('enter amount u need'));
    var remains=cashathand-cashneeded;
        if(cashathand>cashneeded){
            withdraw();
        alert('you have withdrawn' +cashneeded);
        deposit();
        }
        else if(cashathand<cashneeded)
        {
            alert('you haveinsuficient balance!')
        }
        
 }
 else{
     alert('invalid pin');
 }

 function deposit()
 {
     var num1=Number(prompt('input amount to deposit'));
     var currecntacc=num1+remains;
     alert('this yr current ac bal '+currecntacc);
     
 }
 function withdraw(){
     var need=cashathand-cashneeded;
     alert('this is your current account bal' +need);
 }
