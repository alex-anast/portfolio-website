// This is how you import all from section class to Jacascript:
const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls'); // This is how I select the parent
const sectBtn = document.querySelectorAll('.control'); // And this selects every single child
const allSections = document.querySelector('.main-content'); // The body is selected, which is a class of main-content

function PageTransitions(){
    // Button click active class
    // ... This replaces the active-btn with non-active
    // ... but still doesn't activate the new one clicked.
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click',function(){  // I don't know the syntax..
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += 'active-btn' // "this" refers to the function itself
        })
    }
}

PageTransitions();