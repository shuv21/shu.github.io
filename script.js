// Scroll Animation

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach((el)=>{

el.classList.add("hidden");

observer.observe(el);

});

// Back To Top

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.documentElement.scrollTop>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

}

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

// Active Navbar

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

if(scrollY>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});// Loader

window.addEventListener("load",()=>{

document.getElementById("loader").style.display="none";

});

// Dark Mode

const darkBtn=document.getElementById("darkMode");

darkBtn.onclick=()=>{

document.body.classList.toggle("dark");

};

// Mobile Menu

const menu=document.querySelector(".menu-btn");

const nav=document.querySelector(".nav-links");

menu.onclick=()=>{

nav.classList.toggle("show");

};

// Contact Form

const form=document.querySelector("form");

form.addEventListener("submit",(e)=>{

e.preventDefault();

const name=form.querySelector("input[type='text']").value.trim();

const email=form.querySelector("input[type='email']").value.trim();

const message=form.querySelector("textarea").value.trim();

if(name==""||email==""||message==""){

alert("Please fill all fields.");

return;

}

alert("Message Sent Successfully!");

form.reset();

});
