
document.addEventListener('DOMContentLoaded', () => {
  
  const cardArray = [
    {
      name: '1',
      img: 'images/wash.png'
    },
    {
      name: '2',
      img: 'images/touch.png'
    },
    {
      name: '3',
      img: 'images/ramen.png'
    },
    {
      name: '4',
      img: 'images/pizza.png'
    },
    {
      name: '5',
      img: 'images/mask.png'
    },
    {
      name: '6',
      img: 'images/kfc.png'
    },
    {
      name: '7',
      img: 'images/hand.png'
    },
    {
      name: '8',
      img: 'images/food.png'
    },
    {
      name: '9',
      img: 'images/fat.png'
    },
    {
      name: '10',
      img: 'images/fam.png'
    },
    {
      name: '11',
      img: 'images/cough.png'
    },
    {
      name: '12',
      img: 'images/contact.png'
    },
   
    {
      name: '13',
      img: 'images/coke.png'
    },
    {
      name: '14',
      img: 'images/burger.png'
    },
    {
      name: '1',
      img: 'images/wash.png'
    },
    {
      name: '2',
      img: 'images/touch.png'
    },
    {
      name: '3',
      img: 'images/ramen.png'
    },
    {
      name: '4',
      img: 'images/pizza.png'
    },
    {
      name: '5',
      img: 'images/mask.png'
    },
    {
      name: '6',
      img: 'images/kfc.png'
    },
    {
      name: '7',
      img: 'images/hand.png'
    },
    {
      name: '8',
      img: 'images/food.png'
    },
    {
      name: '9',
      img: 'images/fat.png'
    },
    {
      name: '10',
      img: 'images/fam.png'
    },
    {
      name: '11',
      img: 'images/cough.png'
    },
    {
      name: '12',
      img: 'images/contact.png'
    },
   
    {
      name: '13',
      img: 'images/coke.png'
    },
    {
      name: '14',
      img: 'images/burger.png'
    }
     
   
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  var cardsChosen = []
  var cardsChosenId = []
  const cardsWon = []

  
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'images/corona.jpg')
      card.style.cssText="border: 2px solid #941e3f;"
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  
  function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/corona.jpg')
      cards[optionTwoId].setAttribute('src', 'images/corona.jpg')
      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white1.jpg')
      cards[optionTwoId].setAttribute('src', 'images/white1.jpg')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/corona.jpg')
      cards[optionTwoId].setAttribute('src', 'images/corona.jpg')
      alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

  function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})
