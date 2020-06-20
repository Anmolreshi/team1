
document.addEventListener('DOMContentLoaded', () => {
  
  const cardArray = [
    {
      name: '',
      img: '.png'
    },
    {
      name: '',
      img: '.png'
    },
    {
      name: '',
      img: '.png'
    },
    {
      name: '',
      img: '.png'
    },
    {
      name: '',
      img: '.png'
    },
    {
      name: '',
      img: '.png'
    },
    {
      name: '',
      img: '.png'
    },
    {
      name: '',
      img: '.png'
    },
    {
      name: '',
      img: '.png'
    },
    {
      name: '',
      img: '.png'
    },
    {
      name: '',
      img: '.png'
    },
    {
      name: '',
      img: '.png'
    },
   
    {
      name: '',
      img: '.png'
    },
    {
      name: '',
      img: '.png'
    },
     {
      name: '',
      img: '.png'
    },
    {
      name: '',
      img: '.png'
    },
    {
      name: '',
      img: '.png'
    },
    {
      name: '',
      img: '.png'
    },
    {
      name: '',
      img: '.png'
    },
    {
      name: '',
      img: '.png'
    },
    {
      name: '',
      img: '.png'
    },
    {
      name: '',
      img: '.png'
    },
    {
      name: '',
      img: '.png'
    },
    {
      name: '',
      img: '.png'
    },
    {
      name: '',
      img: '.png'
    },
    {
      name: '',
      img: '.png'
    },
   
    {
      name: '',
      img: '.png'
    },
    {
      name: '',
      img: '.png'
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
