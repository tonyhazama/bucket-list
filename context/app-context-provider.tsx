import React, { Context, ContextType, createContext, useContext, useEffect, useReducer } from "react";
import { appReducer, initialAppState, setBookmarks, setCategories } from "./app-context-reducer";
import { getCategories } from "../services/books-service";
import { AppAction, AppState } from "../types/app-state";

export const AppContext: Context<any> = createContext([]);
export const useAppContext = () => useContext<[AppState, (object: AppAction) => void]>(AppContext);

interface Props {
  children: React.ReactNode;
}

export const AppContextProvider = ({children}: Props) => {
  const [appState, dispatch] = useReducer(appReducer, initialAppState);

  useEffect(() => {
    loadLocalBookmark();
    getCategoriesData();
    console.log('init context')
  }, []);

  useEffect(() => {
    // console.log("bookmark updated");
    localStorage.setItem('bookmarks', JSON.stringify(appState.bookmarks));
  }, [appState.bookmarks])

  const loadLocalBookmark = () => {
    const localBookmarks = localStorage.getItem("bookmarks");
    if(localBookmarks && JSON.parse(localBookmarks)) {
      dispatch(setBookmarks(JSON.parse(localBookmarks)));
    }
  }
  
  const getCategoriesData = async () => {
    try {
      const [categories] = await getCategories();
      dispatch(setCategories(categories));
    } catch (e) {
      console.error(e);
    }
  };

  
  const contextValue = React.useMemo(() => ([appState, dispatch]), [appState]);

  return (
    <AppContext.Provider value={contextValue}>
    {children}
    </AppContext.Provider>
  )
};