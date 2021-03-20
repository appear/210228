import React from 'react'
import { useContext, createContext, useReducer } from 'react'

const Context = createContext()

const SET_USER = 'SET_USER'
const SET_RECENTLY_VIEWS = 'SET_RECENTLY_VIEWS'

function reducer(state, action) {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        user: action.payload,
      }
    }
    case SET_RECENTLY_VIEWS: {
      return {
        ...state,
        recentlyViewes: action.payload,
      }
    }
    default: {
      return state
    }
  }
}

const INITIAL_STATE = {
  user: {
    name: '올라프',
  },
  recentlyViewes: [],
}

export function UserContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  const action = {
    setUser: (user) => {
      dispatch({ type: SET_USER, payload: user })
    },
    setRecentlyViewes: (recentlyViewes) => {
      dispatch({ type: SET_RECENTLY_VIEWS, payload: recentlyViewes })
    },
  }

  return <Context value={{ state, action }}>{children}</Context>
}

export function useUserContext() {
  return useContext(Context)
}
