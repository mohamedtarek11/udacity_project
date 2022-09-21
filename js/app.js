/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/
let ulelem=document.getElementById("navbar__list");
let sec=document.querySelectorAll("section");
sec.forEach(function(elem,ind){
let li_element=document.createElement("li");
let a_element=document.createElement("a");
a_element.classList.add("menu__link");
a_element.href="#"+elem.id;
ind+=1;
a_element.textContent="section"+ind;
li_element.appendChild(a_element);
ulelem.appendChild(li_element);
a_element.addEventListener("click",function(e){
   e.preventDefault(); 
   elem.scrollIntoView({
    behavior:"smooth"
   })
})
})
// /////////////////////////////////////////////////////////
window.addEventListener("scroll",function(){
    sec.forEach((elem)=>{
        let activeclass=document.querySelector(`a[href="#${elem.id}"]`);
            const elemtop=elem.getBoundingClientRect().top
        if(elemtop> 0 && elemtop<200){
            elem.classList.add("your-active-class")
            activeclass.classList.add("active")
        }
        else{
            elem.classList.remove("your-active-class")
            activeclass.classList.remove("active")


        }
    })
})
/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


