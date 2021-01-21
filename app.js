var btn = document.getElementById("off-bulb");
var count = 0;  
btn.onclick = function(){
    if(count>=5) 
    {
        alert("Khel nhi chal rha hai bhai"); 
    }
    if(count%2==0) 
    {
        btn.src = "on bulb.png";  
        var q1 = document.getElementById("contacts"); 
        var q2 = document.getElementById("achievements");
        var q3 = document.getElementById("skills");  
        q1.style.backgroundColor="#efefae"; 
        q2.style.backgroundColor="#bbbb90";
        q3.style.backgroundColor="#9a9a7f";
    }
    else {
        btn.src = "off bulb.png";
        var q1 = document.getElementById("contacts"); 
        var q2 = document.getElementById("achievements");
        var q3 = document.getElementById("skills");  
        q1.style.backgroundColor="black"; 
        q2.style.backgroundColor="black";
        q3.style.backgroundColor="black";
    }  
    count++;
}