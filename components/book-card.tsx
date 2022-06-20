import React from 'react';
import { Book } from '../types/book';
import BookImage from './book-image';

interface Props {
  data: Book;
  onClickBook?: (book: Book) => void
}

export default function BookCard({data, onClickBook = () => {}}:Props) {
  return (
    <div className={!!onClickBook ? "cursor-pointer" : ""} onClick={() => onClickBook(data)}>
      <div className="mb-2">
        <BookImage src={data.cover_url} alt={data.title} />
      </div>
      <div className="text-sm font-semibold">{data.title}</div>
      <div className="text-xs">{data.authors[0]}</div>
    </div>
  )
}
