import { Book } from "./book";
import Category from "./category";


export interface AppState {
  bookmarks: Book[];
  categories: Category[];
  books: Book[];
}

export interface AppAction {
  type: string;
  payload: AppState | any;
}