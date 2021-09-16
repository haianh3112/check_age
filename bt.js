
function check(){
    let age=Number(document.getElementById("age").value);
    let name=document.getElementById("name").value;
    if(age=="" || name=="")
    { alert("Bạn chưa điền thông tin")}
    else
    {
    age>50 ? alert("Bạn là trung liên"):
    (age<=20)? alert("Bạn khá trẻ"):
    alert("Bạn là thanh liên");
    }
}
function show() {
    let age=Number(document.getElementById("age").value);
    let name=document.getElementById("name").value;
    alert("Họ tên: "+name +'\nTuổi: '+ age);
}