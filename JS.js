var edit=false;
var ma;
function them() {
    var diadiem=document.getElementById("diadiem").value;
    var gia=document.getElementById("gia").value;
    var date=document.getElementById("thoigian").value;
    var hinhthuc=document.getElementById("hinhthuc").value;
    var dulieu={
        diadiem:diadiem,
        gia:gia,
        date:date,
        hinhthuc:hinhthuc
    }

    if(xuatra=localStorage.getItem("databe"))
    {
        xuatra=JSON.parse(localStorage.getItem("databe"))
    }
    else
    {
        xuatra=[];
    }
    var table_content=`
            <tr class="data">
                <td>Điểm Đến</td>
                <td>Số Ngày</td>
                <td>Giá Tour</td>
                <td>Hình Thức</td>
                <td>Tác Vụ</td>
            </tr>
    `;
    if(diadiem && gia && date && hinhthuc)
    {
        if(edit===true)
        {
            xuatra.splice(ma,1,dulieu)
            resetinput();
            edit=false;
        }
        else
        {
            xuatra.push(dulieu);
        }
        localStorage.setItem("databe",JSON.stringify(xuatra));
        xuatra.forEach((value,key) => {
            table_content+=`
                <tr class="yep">
                <td>${value.diadiem}</td>
                <td>${value.date}</td>
                <td>${value.gia}</td>
                <td>${value.hinhthuc}</td>
                <td class="center">
                    <img onclick="sua(${key})" src="IMG/Edit-icon.png" alt="">
                    <img onclick="xoa(${key})" src="IMG/Delete-icon.png" alt="">
                </td>
            </tr>
            `
        });
        document.getElementById("none").innerHTML=table_content;
    }
}
function F5() {
    var table_content=`
                <tr class="data">
                    <td>Điểm Đến</td>
                    <td>Số Ngày</td>
                    <td>Giá Tour</td>
                    <td>Hình Thức</td>
                    <td>Tác Vụ</td>
                </tr>
        `;
var xuatra=localStorage.getItem("databe");
if(xuatra)
{
    xuatra=JSON.parse(localStorage.getItem("databe"))
}
else
{
    xuatra=[];
}
        xuatra.forEach((value,key) => {
            table_content+=`
            <tr class="yep">
                <td>${value.diadiem}</td>
                <td>${value.date}</td>
                <td>${value.gia}</td>
                <td>${value.hinhthuc}</td>
                <td class="center">
                    <img  onclick="sua(${key})"src="IMG/Edit-icon.png" alt="">
                    <img onclick="xoa(${key})"src="IMG/Delete-icon.png" alt="">
                    </td>
                    </tr>`
                });
    document.getElementById("none").innerHTML=table_content;
    let ngaythang = new Date();
    let day = ngaythang.getDate();
    let month = ngaythang.getMonth() + 1;
    let year = ngaythang.getFullYear();
    let d = ngaythang.getDay();
    let minute = ngaythang.getMinutes();
    let hour = ngaythang.getHours();
    let second = ngaythang.getSeconds ();
    let dayofWeed = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
    document.getElementById('marquee').innerHTML =`<span>Hôm nay là ngày<span style="color:aqua"> ${day} </span> tháng <span style="color:aqua"> ${month} </span>năm<span style="color:aqua"> ${year}
        </span><br>${hour} giờ ${minute} phút ${second} giây</span>`
}
function xoa(id) {
    if(xuatra=localStorage.getItem("databe"))
    {
        xuatra=JSON.parse(localStorage.getItem("databe"));
    }
    else
    {
        xuatra=[];
    }
    if(confirm("Bạn có chắc chắn muốn xóa?"))
    {
        xuatra.splice(id,1)
        localStorage.setItem("databe",JSON.stringify(xuatra));
    }
    F5();
}
function sua(id) {
    edit =true;
    ma=id;
    if(xuatra=localStorage.getItem("databe"))
    {
        xuatra=JSON.parse(localStorage.getItem("databe"));
    }
    else
    {
        xuatra=[];
    }
    let diadiem=document.getElementById("diadiem").value=xuatra[id].diadiem;
    let gia=document.getElementById("gia").value=xuatra[id].gia;
    let date=document.getElementById("thoigian").value=xuatra[id].date;
    let hinhthuc=document.getElementById("hinhthuc").value=xuatra[id].hinhthuc;
    document.getElementById("add").style.display="none"
    document.getElementById("sua").style.display="block"
    document.getElementById("boqua").style.display="block"
    var dulieu={
        diadiem:diadiem,
        gia:gia,
        date:date,
        hinhthuc:hinhthuc
    }
    xuatra.splice(id , 1 ,dulieu)
    localStorage.setItem("databe",JSON.stringify(xuatra));
    F5();
}
function resetinput() {
    diadiem=document.getElementById("diadiem").value=""
    gia=document.getElementById("gia").value=""
    date=document.getElementById("thoigian").value=""
    hinhthuc=document.getElementById("hi").value;
    document.getElementById("add").style.display="block"
    document.getElementById("sua").style.display="none"
    document.getElementById("boqua").style.display="none"
}
 function boqua() {
    resetinput();
 }