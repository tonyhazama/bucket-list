import { BookSection } from "./book-section";

export interface Book {
  id: number;
  title: string;
  category_id: number;
  authors: string[];
  cover_url: string;
  description: string;
  sections: BookSection[];
  audio_length: number;
  category?: string;
  visible: boolean;
}