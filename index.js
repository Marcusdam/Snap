
/*----------------Dropdown Menu--------------------*/
// const dropdownMenu = document.getElementById('arrow')

const dropdown = document.getElementById("drop-menu");
const dropdown2 = document.getElementById("company-menu");

function toggleMenu() {
    dropdown.classList.toggle("open-dropdown");
    console.log("clicked")
};

function toggleBtn() {
    dropdown2.classList.toggle("open-company");
    console.log("clicked")
};
/*--------------Hamburger Menu-------------*/
const menu = document.getElementById("menu");
const menuIcon = document.getElementById("menu-icon");
function menuToggle() {

    menu.classList.toggle("open-menu");

    if( menu.classList.contains("open-menu")){
        menuIcon.src="images/pngwing.com.png"
    }

    else{
        menuIcon.src="images/pngwing.com (1).png"
    }
}





