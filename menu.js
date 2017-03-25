<!-- MENU SHOW/HIDE -->
    
function menuShow() {
    
    document.getElementById("wrapper_hide").id = "wrapper_show";
    
    document.getElementById("container_dim").style.opacity = 0.8;
    
    document.getElementById("menu_tab_in").style.display = 'none';
    
    document.getElementById("menu_tab_out").style.display = 'block';

}
    
function menuHide() {
    
    document.getElementById("wrapper_show").id = "wrapper_hide";
    
    document.getElementById("container_dim").style.opacity = 0;
    
    document.getElementById("menu_tab_out").style.display = 'none';
    
    document.getElementById("menu_tab_in").style.display = 'block';

}