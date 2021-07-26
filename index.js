function findAns() {
    var divisor = document.getElementById("divisor").value;
    var divdend = document.getElementById("divdend").value;
    if (divisor || divdend) 
    {
        var sum = 0;
        var value = divisor;
        while (value) {
            sum += value % 10;
            value = Math.floor(value / 10);
        }
        if(sum == 0)
        {
            document.getElementById("opTxt").innerHTML = "Cannot Divide By Zero";
            document.getElementById("opTxt").style.color = "red";
        }
        else
        {
        document.getElementById("opTxt").innerHTML = "The Remainder of " + divdend + " and " + divisor + " is " + divdend % divisor;
        document.getElementById("opTxt1").innerHTML = "The Quotient of " + divdend + " and " + divisor + " is " + divdend / divisor;
        document.getElementById("opTxt").style.color = "black";
        }
    }
    else {
        document.getElementById("opTxt").innerHTML = "Please Enter All Fields";
        document.getElementById("opTxt").style.color = "red";
    }
}

function copyAns()
{
    var r = document.createRange();
r.selectNode(document.getElementById("opTxt"));
window.getSelection().removeAllRanges();
window.getSelection().addRange(r);
document.execCommand('copy');
window.getSelection().removeAllRanges();
document.getElementById("snackbar").innerHTML = "Remainder Copied To Clipboard";
var x = document.getElementById("snackbar");

  
  x.className = "show";

  
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function copyQua()
{
    
    var r = document.createRange();
    r.selectNode(document.getElementById("opTxt1"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    document.getElementById("snackbar").innerHTML = "Quotient Copied To Clipboard";
    var x = document.getElementById("snackbar");
    
      
      x.className = "show";
    
      
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
