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

function findAnsofSq()
{
    var divdend = document.getElementById("divdend").value;
    if (divdend && (divdend > 0)) 
    {
        var value = divdend;
        document.getElementById("opTxt").innerHTML = "The Square Root of " + divdend + " is " + Math.sqrt(divdend);
        document.getElementById("opTxt").style.color = "black";
    }
    else if(divdend < 0)
    {
        var absVal = Math.abs(divdend);
        var theAns = Math.sqrt(absVal);
        document.getElementById("opTxt").innerHTML = "The Sqaure Root of " + theAns + "i (i = √-1)";
        document.getElementById("opTxt").style.color = "black";
    }
    else {
        document.getElementById("opTxt").innerHTML = "Please Enter All Fields";
        document.getElementById("opTxt").style.color = "red";
    }
}