let bg_color = "#01000c";
let color = "#fff";
let button_text = "Light Mode"
let light_theme = true;
let old_bg, old_color, old_btext;

let toggle = document.getElementById("light-toggle");
let iconMap = document.body.querySelectorAll("span.hamburger-icon");
let nav = document.body.querySelector("nav");
let head_flex = document.body.querySelector(".header-flex")
let nav_menu = document.body.querySelector("ul.nav-menu");
let theme = document.body.style;

old_bg = theme.backgroundColor;
old_color = theme.color;
old_btext = toggle.textContent;

toggle.onclick = function(){
	if (light_theme){
		toggle.textContent = button_text;
		toggle.style.color = bg_color;
		toggle.style.backgroundColor = color;
		theme.backgroundColor = bg_color;
		theme.color = color;
		nav.style.borderColor = color;
		head_flex.style.borderColor = color;
		nav_menu.style.borderColor = color;
    	iconMap.forEach((_, i, arr) => arr[i].style.backgroundColor = color);
    	light_theme = false;
	}
	else 
	{
		toggle.textContent = old_btext;
		toggle.style.color = color;
		toggle.style.backgroundColor = bg_color;
		theme.backgroundColor = old_color;
		theme.color = old_color;
		nav.style.borderColor = old_color;
		head_flex.style.borderColor = old_color;
		nav_menu.style.borderColor = old_color;
		iconMap.forEach((_, i, arr) => arr[i].style.backgroundColor = old_color);
		light_theme = true;
	}
}