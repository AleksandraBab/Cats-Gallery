import './index.css';
import Popup from './scripts/Popup.js'
import Item from './scripts/Item.js'
import {cardList} from './scripts/constants.js'

const container = document.querySelector('.gallery__list');
const popup = new Popup();
popup.setEventListeners()

cardList.forEach( (item) => {
  const card = new Item({
    cardSelector: '#item',
    config: item,
    handleOpenPopup: () => {
      popup.setPopup(item);
    }
  });
  const newCard = card.generateCard();

  container.append(newCard)
})


