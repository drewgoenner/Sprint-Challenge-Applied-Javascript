// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

const headerContainer = document.querySelector('.header-container')

headerContainer.appendChild(Header());

function Header() {
//create elements
    const header1 = document.createElement('div');
    const date1 = document.createElement('span');
    const title1 = document.createElement('h1');
    const temp1 = document.createElement('span');
    

//append elements
    header1.appendChild(date1);
    header1.appendChild(title1);
    header1.appendChild(temp1);
    


//create classes
    header1.classList.add("header");
    date1.classList.add("date");
    temp1.classList.add("temp");
    

//add content
    date1.textContent = "SMARCH 28, 2019";
    title1.textContent = "Lambda Times";
    temp1.textContent = "98°";

    return header1
}
