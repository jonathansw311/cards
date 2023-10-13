const url='https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';



const deck = getDeck();




function getDeck(){
   
    res = axios.get(url)
    .then(res =>{
        console.log(res)
        console.log(res.data)
        return axios.get(`https://deckofcardsapi.com/api/deck/${res.data.deck_id}/draw/?count=1`)
     
    })
   
    .catch(() => console.log("Error"))}

   
    
    // function displayCard(deck){
    //     card=deck.data.cards[0].image;
        
    //     console.log(card)
    //     imgSrc= document.createElement('img')
    //     imgSrc.src=card
    //     console.log(imgSrc)
    //     insert = document.querySelector('.card')
    //     insert.append(imgSrc);
    // }
    