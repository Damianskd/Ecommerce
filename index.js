/*-------------------------------JS for toggle menu-----------------------------------*/
var MenuItems = document.getElementById("MenuItems");

    MenuItems.style.maxHeight = "0px";

    function menutoggle(){
        if(MenuItems.style.maxHeight == "0px")
        {
         MenuItems.style.maxHeight = "200px";
        }
        else
        {
         MenuItems.style.maxHeight = "0px";
        }
    }
    /*----------------------------Account-page----------JS for toggle form-----------------*/
    var LoginForm = document.getElementById("LoginForm");
    var RegForm = document.getElementById("RegForm");
    var Indicator = document.getElementById("Indicator");

    function regiter(){
        RegForm.style.transform = "translateX(0px)";
        LoginForm.style.transform = "translateX(0px)";
    }
    function login(){
        RegForm.style.transform = "translateX(300px)";
        LoginForm.style.transform = "translateX(300px)";
    }