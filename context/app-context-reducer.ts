import { AppAction, AppState } from "../types/app-state";
import { Book } from "../types/book";
import Category from "../types/category";

const SET_CATEGORY = "SET_CATEGORY";
const SET_BOOKMARKS = "SET_BOOKMARKS";
const ADD_BOOKMARK = "ADD_BOOKMARK";
const REMOVE_BOOKMARK = "REMOVE_BOOKMARK";


export const setCategories = (categories: Category[]) => ({
  type: SET_CATEGORY,
  payload: {categories},
});

export const setBookmarks = (bookmarks: Book[]) => ({
  type: SET_BOOKMARKS,
  payload: {bookmarks},
});

export const addBookmark = (bookmark: Book) => ({
  type: ADD_BOOKMARK,
  payload: {bookmark},
});

export const removeBookmark = (bookId: number) => ({
  type: REMOVE_BOOKMARK,
  payload: {bookId},
});


export const initialAppState = {
  bookmarks: [],
  categories: [],
  books: []
};

export const appReducer = (state: AppState, action: AppAction) => {
  const {type, payload} = action;
  console.log(action)
  if (type === SET_CATEGORY) {
    return {
      ...state,
      categories: payload.categories,
    };
  } else if (type === SET_BOOKMARKS) {
    return {
      ...state,
      bookmarks: payload.bookmarks,
    };
  } else if (type === ADD_BOOKMARK) {
    return {
      ...state,
      bookmarks: state.bookmarks.concat(payload.bookmark),
    };
  } else if (type === REMOVE_BOOKMARK) {
    return {
      ...state,
      bookmarks: state.bookmarks.filter(bookmark => bookmark.id !== payload.bookId),
    };
  } else {
    return state;
  }
};