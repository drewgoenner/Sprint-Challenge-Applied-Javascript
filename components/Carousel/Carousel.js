/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const caroCont = document.querySelector(".carousel-container");
  caroCont.appendChild(carousel1);


function createCar(info) {
  //create elements
  const carousel1 = document.createElement('div');
  const leftButton1 = document.createElement('div');
  const img1 = document.createElement('img');
  const img2 = document.createElement('img');
  const img3 = document.createElement('img');
  const img4 = document.createElement('img');
  const rightButton1 = document.createElement('div');

  

  //append elements
  carousel1.appendChild(leftButton1);
  carousel1.appendChild(img1);
  carousel1.appendChild(img2);
  carousel1.appendChild(img3);
  carousel1.appendChild(img4);
  carousel1.appendChild(rightButton1);

  //add classes
  carousel1.classList.add("carousel");
  leftButton1.classList.add("left-button");
  rightButton1.classList.add("right-button");

  //add content
  // carousel1.textContent = "Hi there";
  leftButton1.textContent = "Left";
  rightButton1.textContent = "Right";
  img1.src = "./assets/carousel/computer.mountains.jpeg";
  img2.src = "./assets/carousel/computer.jpeg";
  img3.src = "./assets/carousel/trees.jpeg";
  img4.src = "./assets/carousel/turntable.jpeg"

  //add listener
  leftButton1.addEventListener('click', (e) => {

  })
  const caroCont = document.querySelector(".carousel-container");
  caroCont.appendChild(carousel1);
  
  return carousel1;


}