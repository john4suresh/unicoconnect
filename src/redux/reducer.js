import actions from "./actions";
import trelloData from "../assets/data";

const initialState = {
  trelloData: trelloData,
  searchDataValue: '',
  filterData: [],
}
export default function (state = initialState, action) {
  switch (action.type) {

    case actions.ADD_CARD: {
      const list = state.trelloData.lists[action.id];
      list.cards = [...list.cards, action.payload];
      const newTrellodata = {
        ...state.trelloData,
        lists: {
          ...state.trelloData.lists,
          [action.id]: list,
        },
      };
      if (action.callback) {
        action.callback();
      }
      return {
        ...state,
        trelloData: newTrellodata
      }
    }

    case actions.ADD_BOARD: {
      const newListIds = [...state.trelloData.listIds, action.id];
      const newTrellodata = {
        ...state.trelloData,
        lists: {
          ...state.trelloData.lists,
          [action.id]: {
            id: action.id,
            title: action.title,
            cards: [],
          },
        },
        listIds: newListIds,
      };
      if (action.callback) {
        action.callback();
      }
      return {
        ...state,
        trelloData: newTrellodata
      }
    }

    case actions.MOVECARD_SAMELIST: {

      return {
        ...state,
        trelloData: {
          ...state.trelloData,
          lists: {
            ...state.trelloData.lists,
            [action.id]: action.newCards,
          }
        }
      }
    }

    case actions.MOVECARD_DIFFERENTLIST: {
      return {
        ...state,
        trelloData: {
          ...state.trelloData,
          lists: {
            ...state.trelloData.lists,
            [action.id1]: action.newCards1,
            [action.id2]: action.newCards2,
          }
        }
      }
    }

    case actions.SEARCH_DATA: {
      return {
        ...state,
        searchDataValue: action.payload,
      }
    }

    case actions.MOVEBOARD: {
      return {
        ...state,
        trelloData: {
          ...state.trelloData,
          listIds: action.payload,
        }
      }
    }

    default:
      return {
        ...state
      }
  }
}