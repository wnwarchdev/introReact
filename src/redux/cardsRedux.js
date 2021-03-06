import shortid from 'shortid';

// selectors

//export const getCardsForColumns = ({cards, searchString}, columnId) => cards.filter(card => card.columnId == columnId && new RegExp(searchString, 'i').test(card.title));
export const getCardsForColumns = ({cards}, columnId) => cards.filter(card => card.columnId == columnId); //poprzedni commit, bez tego nie działa 
export const getResultsForColumns = ({cards}, searchString) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)); //dawny getCardsForColumns

// action name creator
const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_CARD = createActionName('ADD_CARD');

// action creators
export const createActionAddCards = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_CARD });

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_CARD:
      return [...state, action.payload];
    default:
      return state;
  }
}
