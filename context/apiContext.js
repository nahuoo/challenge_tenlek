import React, { createContext, useReducer, useEffect } from 'react'
import { apiDataReducer, initialState, actions } from './reducer'

export const apiContext = createContext()

export const ApiDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(apiDataReducer, initialState)

  useEffect(() => {
    const interval = setInterval(() => {
      fetch('http://api.tenlek.com/a70da940ce76c1217f03376a3ac725fc/t')
        .then((res) => res.json())
        .then((data) => {
          if (!data.error) {
            dispatch({ type: actions.FETCH_DATA, payload: { apiData: 'data' } })
          } else {
            dispatch({ type: actions.SET_ERROR, payload: { error: data.body } })
          }
          dispatch({ type: actions.FETCH_DATA, payload: { apiData: data } })
        })
        .catch((e) => {
          dispatch({
            
          })
        })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const value = {
    ...state,
  }

  return <apiContext.Provider value={value}>{children}</apiContext.Provider>
}
