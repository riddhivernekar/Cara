var bar=document.getElementById('bar');
var nav=document.getElementById("navbar");
var close=document.getElementById('close');
if (bar)
{
    bar.addEventListener("click",function() {
        nav.classList.add("active");
    })
}
if (close)
{
   close.addEventListener("click",function() {
        nav.classList.remove("active");
    })
}

var shirtImg=document.getElementById("MainImg");
var smallImg=document.getElementsByClassName("small-img");

document.querySelectorAll(".small-img-grp img")[0].addEventListener("click",function()
{
    shirtImg.setAttribute("src","../Images/img/products/f3.jpg");
});
document.querySelectorAll(".small-img-grp img")[1].addEventListener("click",function()
{
    shirtImg.setAttribute("src","../Images/img/products/f2.jpg");
});
document.querySelectorAll(".small-img-grp img")[2].addEventListener("click",function()
{
    shirtImg.setAttribute("src","../Images/img/products/f1.jpg");
});
document.querySelectorAll(".small-img-grp img")[3].addEventListener("click",function()
{
    shirtImg.setAttribute("src","../Images/img/products/f4.jpg");
});
