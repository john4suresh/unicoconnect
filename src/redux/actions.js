const actions = {
  ADD_CARD: 'ADD_CARD',
  ADD_BOARD: 'ADD_BOARD',
  MOVECARD_SAMELIST: 'MOVECARD_SAMELIST',
  MOVECARD_DIFFERENTLIST: 'MOVECARD_DIFFERENTLIST',
  MOVEBOARD: 'MOVEBOARD',
  SEARCH_DATA: 'SEARCH_DATA',
  addCard: (payload, id, callback) => ({
    type: actions.ADD_CARD,
    payload,
    id,
    callback
  }),
  addBoard: (title, id, callback) => ({
    type: actions.ADD_BOARD,
    title,
    id,
    callback
  }),
  moveCardSameList: (id, newCards) => ({
    type: actions.MOVECARD_SAMELIST,
    id,
    newCards,
  }),
  moveCardDifferentList: (id1, id2, newCards1, newCards2) => ({
    type: actions.MOVECARD_DIFFERENTLIST,
    id1,
    id2,
    newCards1,
    newCards2,
  }),
  searchData: (payload) => ({
    type: actions.SEARCH_DATA,
    payload,
  }),
  moveBoard: (payload) => ({
    type: actions.MOVEBOARD,
    payload,
  })
}

export default actions;