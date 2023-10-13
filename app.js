const url='https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
let count=0;

let deck;
let cards;


getDeck();

function getDeck(){
   ///gets the new deck
    res = axios.get(url)
    .then(res =>{
        //assigns the returned object to deck.  we need the deck_id to get the cars
        deck=res
        getCards()
        return res
    })
    .catch(() => console.log("Error"))}

    function getCards(){
        
         axios.get(`https://deckofcardsapi.com/api/deck/${deck.data.deck_id}/draw/?count=52`)
        .then(res=>{
            //assignes the deck of cards to cards.  we can from here get any infromation we need using
            //cards[x].data.values, cards[x].data.card_id, cards[x].data.image etc
            cards=res;
            console.log(cards)
           
        })
        .catch(() => console.log("Error"))
    }
    //reloads page after 52 cards have been drawn
    function endGame(){
        if(!alert('All Cards have been drawn')){window.location.reload();}
    }

    //when the button is clicked a random number is crated to turn the card to rotate
    //a div is created with the class of 'contaner' and an image element is created and style set to 
    //rotate for the random number.  the source is added to the image element, and the image element is added to the 
    //container div.
    //the card counter is increased by one and the container div is added to the .card class div in the DOM
    clicker = document.querySelector('button')
clicker.addEventListener('click', function(){
    if (count == 52){
        endGame()
    }
    rotate = Math.floor(Math.random() * 90);
    console.log(rotate)
    let cont=document.createElement('div')
    cont.classList.add("container")
    imgSrc= document.createElement('img')
    imgSrc.style.transform = `rotate(${rotate}deg)`
    imgSrc.src=cards.data.cards[count].image
    cont.append(imgSrc)
    count++;
    divs = document.querySelector('.card')
    divs.append(cont)
   
})
