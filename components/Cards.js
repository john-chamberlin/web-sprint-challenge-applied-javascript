// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
// axios.get('https://lambda-times-api.herokuapp.com/articles')
//     .then((res) => {
//         console.log(res.data.articles.javascript)
//         const dataArr = res.data.articles.javascript;
//         dataArr.forEach(item => {
            
//         });

        
//     })
//     .catch((err) =>{
//         console.log('no data! sucks!')
//     })

const cardContainer = document.querySelector('.cards-container');

function makeCard(obj) {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const by = document.createElement('span');

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    author.appendChild(by);

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    headline.textContent = obj.headline;
    img.src = obj.authorPhoto;
    by.textContent = obj.authorName; 

    card.addEventListener('click', () => {
        console.log(obj.headline)
    })

return card;

}


axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then((res) => {
        console.log(res.data.articles)
        const jsObj = res.data.articles.javascript;
        const bootstrapObj = res.data.articles.bootstrap;
        const techObj = res.data.articles.technology;
        const jQueryObj = res.data.articles.jquery;
        const nodeObj = res.data.articles.node;

        jsObj.forEach(element => {
            cardContainer.appendChild(makeCard(element))
        });

        bootstrapObj.forEach(element => {
            cardContainer.appendChild(makeCard(element))
        })

        techObj.forEach(element => {
            cardContainer.appendChild(makeCard(element))
        })

        jQueryObj.forEach(element => {
            cardContainer.appendChild(makeCard(element))
        })

        nodeObj.forEach(element => {
            cardContainer.appendChild(makeCard(element))
        })
        
    
        
        

        
    })
    .catch(() =>{
        console.log('no data! sucks!')
    })