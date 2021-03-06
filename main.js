      

function main(e) {
  
var temp = document.getElementById("temp").value;
var scale = document.getElementsByName("scale"); 
var cel = 0;  
var fahr = 0;  
var kel = 0; 


  for (var i = 0; i < scale.length; i++) {
    if (scale[i].checked && scale[i].value  === 'celsius') {
        scale = 'celsius';
    }else if (scale[i].checked && scale[i].value === 'fahrenheit') {
        scale = 'fahrenheit';
    }else if (scale[i].checked && scale[i].value === 'kelvin'){
        scale = 'kelvin';
    } 
  }
    
    switch(scale) {  
        case 'celsius':
            cel = temp;
            fahr = temp * 1.8 + 32;
            kel = temp * 1 + 273.15;
            break;
        case 'fahrenheit':
            cel = (temp - 32) / 1.8;
            kel = (temp * 1 + 459.67) * 0.55555556;
            fahr = temp;
            break;
        case 'kelvin':
            fahr = temp / 0.55555556 - 459.67;
            cel = temp - 273.15;
            kel = temp;
            break;
        default:
            document.getElementById("output").innerHTML = "ERROR-No Scale Selected"; 
    }

  document.getElementById("cel").innerHTML = cel +" In Celsius"; 
  document.getElementById("fahr").innerHTML = fahr + " In Fahrenheit "; 
  document.getElementById("kel").innerHTML = kel + " In Kelvin"; 
}


var button = document.getElementById("convert");
button.addEventListener("click", main); 
