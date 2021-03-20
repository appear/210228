import React, { useEffect } from 'react'
import { useContext, createContext, useReducer } from 'react'

const Context = createContext()

const SET_USER = 'SET_USER'
const SET_RECENTLY_VIEWS = 'SET_RECENTLY_VIEWS'
const RECENTLY_VIEWS = 'RECENTLY_VIEWS'

function reducer(state, action) {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        user: action.payload,
      }
    }
    case SET_RECENTLY_VIEWS: {
      if (state.recentlyViewes.find(({ id }) => id === action.payload.id)) {
        return { ...state }
      }

      return {
        ...state,
        recentlyViewes: [...state.recentlyViewes, action.payload],
      }
    }
    default: {
      return state
    }
  }
}

export function UserContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    user: {
      name: '올라프',
    },
    recentlyViewes: JSON.parse(localStorage.getItem(RECENTLY_VIEWS) || '[]'),
  })

  const action = {
    setUser: (user) => {
      dispatch({ type: SET_USER, payload: user })
    },
    setRecentlyViewes: (webtoon) => {
      dispatch({ type: SET_RECENTLY_VIEWS, payload: webtoon })
    },
  }

  useEffect(() => {
    localStorage.setItem(RECENTLY_VIEWS, JSON.stringify(state.recentlyViewes))
  }, [state.recentlyViewes])

  return (
    <Context.Provider value={{ state, action }}>{children}</Context.Provider>
  )
}

export function useUserContext() {
  return useContext(Context)
}
