
const barIcon = document.getElementById('bar-icon');
const closeSideBar = document.getElementById('close-sidebar');
const sidebar = document.getElementById('sidebar');


barIcon.addEventListener('click', ()=>{
    sidebar.style.left = '0px'
    barIcon.style.opacity = '0'
})

closeSideBar.addEventListener('click', () =>{
    sidebar.style.left = '-1000px'
    barIcon.style.opacity = '1'
})