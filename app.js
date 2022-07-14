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

    // Now the Active Class is going to be added in the sections!
    // Sections Active Class
    allSections.addEventListener('click', (e) =>{ // e as in event
        // console.log(e.target) // When you click on a section it is going to create a log
        const id = e.target.dataset.id; // data ID is the Dataset
        if(id){
            // Remove selected from the other buttons
            sectBtns.forEach((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            // Hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active');
            })

            const element = document.getElementById(id) // Whatever id is coming from the dataset is going to be inside the element
            element.classList.add('active');
        }
    })
}

PageTransitions();

// Let's change something as a test for commit.