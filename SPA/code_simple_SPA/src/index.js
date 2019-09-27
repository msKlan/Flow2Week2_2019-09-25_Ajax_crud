import 'bootstrap/dist/css/bootstrap.css'

function GetUsers(){
 //   alert("1");
    fetch('http://localhost:3333/api/users')
    .then
    ((Response) =>   { return Response.json()})
    .then
        ((data)    =>  {
            console.log(data);
            document.getElementById("users").innerHTML=data.map(r => "<tr>\r\n" + Object.values(r).map(c => "<td>"+c+"</td>").join(" ") + "\r\n</tr>").join("\r\n")
        });

}
 

function GetUsersById(){
    let id=document.getElementById("userid").value;
    console.log(id);
    fetch('http://localhost:3333/api/users/'+id)
    .then
    ((Response) =>   { return Response.json()})
    .then
        ((data)    =>  {
            console.log(data);
            document.getElementById("user").innerHTML=data.name
        });

}

document.getElementById("qwerty").addEventListener("click", GetUsers);
document.getElementById("getuserid").addEventListener("click", GetUsersById);


//console.log( "<table>\r\n" + names.map(r => "<tr>\r\n" + Object.values(r).map(c => "<td>"+c+"</td>").join(" ") + "\r\n</tr>").join("\r\n") + "\r\n</table>");


