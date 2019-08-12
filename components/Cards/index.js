// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then ((articles) => {
        const articleArray = articles.data.articles;
        console.log(articleArray)
        articleArray.bootstrap.forEach(article => {
            const newCard = createCard(article);
            const cardCont = document.querySelector('.cards-container');
            cardCont.appendChild(newCard);
        });

        articleArray.javascript.forEach(article => {
            const newCard = createCard(article);
            const cardCont = document.querySelector('.cards-container');
            cardCont.appendChild(newCard);     
        });

        articleArray.jquery.forEach(article => {     
            const newCard = createCard(article);
            const cardCont = document.querySelector('.cards-container');
            cardCont.appendChild(newCard);    
        });

        articleArray.node.forEach(article => {     
            const newCard = createCard(article);
            const cardCont = document.querySelector('.cards-container');
            cardCont.appendChild(newCard);   
        });

        articleArray.technology.forEach(article => {
            
            const newCard = createCard(article);
            const cardCont = document.querySelector('.cards-container');
            cardCont.appendChild(newCard);
           
        });    
    })
    
function createCard(info) {
    //create elements
    const card1 = document.createElement('div');
    const headline1 = document.createElement('div');
    const author1 = document.createElement('div');
    const imgCont1 = document.createElement('div');
    const img1 = document.createElement('img');
    const name1 = document.createElement('span');

    //append elements
    card1.appendChild(headline1);
    card1.appendChild(author1);
    author1.appendChild(imgCont1);
    author1.appendChild(name1);
    imgCont1.appendChild(img1);

    //add classes
    card1.classList.add("card");
    headline1.classList.add("headline");
    author1.classList.add("author")
    imgCont1.classList.add("img-container");

    //add content
    headline1.textContent = info.headline;
    img1.src = info.authorPhoto;
    name1.textContent = info.authorName

    return card1

}
