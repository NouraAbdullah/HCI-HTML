
function Myfun() {
    document.getElementById('dd').setAttribute("class", "myClass");
    
    var R = document.getElementsByClassName('messageCheckbox');
    var txt = "";
    var i;
    for (i = 0; i < R.length; ++i) {
        if (R[i].checked) {
            txt = txt + R[i].value + " & ";
        }
    }
        
var Type;
if (document.getElementById('r1').checked) {
  Type = document.getElementById('r1').value;
}
else if (document.getElementById('r2').checked) {
  Type = document.getElementById('r2').value;
}
  
 document.getElementById("dd").innerHTML=
 "Welcome : "+ document.getElementById("name").value +
 "you have create  " +document.getElementById("Eventname").value +
 "  of type "+ Type +  
 "  at " +document.getElementById("date").value+
 " in " +document.getElementById("ll").value +
 " And you have requested "+ txt + " & "+ document.getElementById("Req").value;

    
    }
 