let menuber=document.getElementById('menuber');
let navlist=document.getElementById('navlist');

// document.getElementById("menuber").addEventListener('click',()=>{
//     document.querySelector("nav_list").classList.toggle("show")
// })


menuber.addEventListener('click',showlist)
function showlist(){
    navlist.classList.toggle('show')
}