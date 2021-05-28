import cat1 from '../images/cat-100.jpg';
import cat2 from '../images/cat-101.jpg';
import cat3 from '../images/cat-102.jpg';
import cat4 from '../images/cat-103.jpg';
import cat5 from '../images/cat-104.jpg';
import cat6 from '../images/cat-105.jpg';
import cat7 from '../images/cat-106.jpg';
import cat8 from '../images/cat-107.jpg';
import cat9 from '../images/cat-108.jpg';
import cat10 from '../images/cat-109.jpg';
import cat11 from '../images/cat-110.jpg';
import cat12 from '../images/cat-111.jpg';


const cardList = [
  {
    link: cat1,
    title: "Боб",
    id: 1,
    isLiked: true,
    comments: [
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        date: '15/5/2021'
      },
      {
        text: 'Шикарный кот.',
        date: '28/4/2021'
      }
    ]
  },
  {
    link: cat2,
    title: "Мэри",
    id: 2,
    isLiked: true,
    comments: [
      {
        text: 'Отличный снимок!',
        date: '13/4/2021'
      }
    ]
  },
  {
    link: cat3,
    title: "Альфред",
    id: 3,
    isLiked: false,
    comments: []
  },

  {
    link: cat4,
    title: "Глори",
    id: 4,
    isLiked: true,
    comments: [
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        date: '15/5/2021'
      },
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        date: '15/5/2021'
      },
      {
        text: 'Lorem ipsum dolor sit amet.',
        date: '15/5/2021'
      },
    ]
  },
  {
    link: cat5,
    title: "Маша",
    id: 5,
    isLiked: false,
    comments: []
  },
  {
    link: cat6,
    title: "Марк",
    id: 6,
    isLiked: false,
    comments: []
  },
  {
    link: cat7,
    title: "Алекс",
    id: 7,
    isLiked: true,
    comments: []
  },
  {
    link: cat8,
    title: "Элис",
    id: 8,
    isLiked: false,
    comments: []
  },
  {
    link: cat9,
    title: "Джо",
    id: 9,
    isLiked: true,
    comments: []
  },
  {
    link: cat10,
    title: "Мила",
    id: 10,
    isLiked: true,
    comments: []
  },
  {
    link: cat11,
    title: "Джон",
    id: 11,
    isLiked: false,
    comments: []
  },
  {
    link: cat12,
    title: "Кыся",
    id: 12,
    isLiked: true,
    comments: [
      {
      text: 'Замечательная работа! Хочу такого же кота!',
      date: '24/5/2021'
    }
  ]
  }
]

export {cardList}
