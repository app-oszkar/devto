function validate()
{
var inputVal = document.getElementById("subdomain").value;
invalidList=[
"admin",
"administrator",
"root","email",
"webmail",
"cpanel",
"irc",
"chat",
"webchat",
"cname",
"ns",
"xxx",
"xx",
"x",
"api"
];
if(invalidList.indexOf(inputVal) !== -1){
        document.getElementById("submitSubDomain").innerHTML="<p style='color:red'> Invalid SubDomain</p>";
    } else{
        document.getElementById("submitSubDomain").innerHTML=inputVal;
    }
}
function validateSubmit()
{
var inputVal = document.getElementById("subdomain").value;
invalidList=["kiwichat"];
if(invalidList.indexOf(inputVal) !== -1){
        alert("Invalid");
    } else{
        alert("Success");
    }
}
