export const initialState = {
    error: '',
    isFetching: true,
    apiData: {},
    activeMenu: false,
  }
  
  export const actions = {
    CLOSE_MENU: 'CLOSE_MENU',
    FETCH_DATA: 'FETCH_DATA',
    SET_ERROR: 'SET_ERROR',
  }
  
  export const apiDataReducer = (state, action) => {
    switch (action.type) {
      case actions.CLOSE_MENU:
        return {
          ...state,
          ...action.payload,
          activeMenu: true,
        }
      case actions.FETCH_DATA:
        return {
          ...state,
          ...action.payload,
          isFetching: false,
          error: ''
        }
      case actions.SET_ERROR:
        return {
          ...state,
          error: action.payload.error,
          isFetching: false,
        }
      default:
        return state
    }
  }
  