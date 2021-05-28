export default class Popup {

  constructor() {
    this._popup = document.querySelector('.popup');
    this._form = this._popup.querySelector('.popup__form');
    this._image = this._popup.querySelector('.popup__img');
    this._title = this._popup.querySelector('.popup__title');
    this._likeCounter = this._popup.querySelector('.popup__count');
    this._likeButton = this._popup.querySelector('.popup__like-btn');
    this._commentContainer = this._popup.querySelector('.popup__comments');
    this._input = this._form.querySelector('.popup__input');

  }

  setPopup (config) {
    this._name = config.title;
    this._link = config.link;
    this._isLiked = config.isLiked;
    this._comments = config.comments;
    this._image.src = this._link;
    this._image.alt = this._name;
    this._title.textContent = this._name;

    this._renderComments(this._comments)
    this._renderRate()
    this._openPopup();
  }

  _renderRate = () => {
    if (!this._isLiked) {
      this._likeCounter.textContent = '0';
      this._likeButton.classList.remove('popup__like-btn_liked')
    } else {
      this._likeButton.classList.add('popup__like-btn_liked')
      this._likeCounter.textContent = '1';
    }
  }

  _renderComments = (arr) => {
    arr.map((item) => {
      const newComment = this._getComment(item)
      this._getCommentsLayout(newComment)
    })
  }

  _deleteComments = () => {
    const newArr = this._popup.querySelectorAll('.popup__comment')
    newArr.forEach((item) => {
      item.remove()
    })
  }

  _getCommentsLayout = (newComment) => {
    this._comment = this._popup.querySelector('#comment').content.cloneNode(true);
    this._text = this._comment.querySelector('.popup__text');
    this._postDate = this._comment.querySelector('.popup__date');

    this._text.textContent = newComment.text;
    this._postDate.textContent = newComment.date;

    this._commentContainer.append(this._comment)
  }

  _getComment = (newComment) => {
    const comment = {text: newComment.text, date: newComment.date}
    return comment
  }

  _countLike () {
    if (this._likeCounter.textContent === '0') {
      this._likeCounter.textContent = '1';
    } else {
      this._likeCounter.textContent = '0';
    }
  }

  _likeCard() {
    this._likeButton.classList.toggle('popup__like-btn_liked');
  }

  _openPopup = () => {
    this._popup.classList.add('popup_opened')
  }

  _closePopup = () => {
    this._popup.classList.remove('popup_opened')
    this._deleteComments()
  }

  _addComment = () => {
    const comment = {text: '', date: ''}
    const date = new Date()

    comment.text = this._input.value;
    comment.date = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`

    this._getCommentsLayout(comment)
  }

  setEventListeners = () => {
    this._likeButton.addEventListener('click', () => {
      this._likeCard()
      this._countLike()
    });

    const closeButton = this._popup.querySelector('.popup__close-btn');
    closeButton.addEventListener('click', () => {
      this._closePopup()
    });

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault()
      if (this._input.value != '') {
        this._addComment()
        this._input.value = ''
      }
    });
  }
}

