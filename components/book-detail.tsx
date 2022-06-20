/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Book } from '../types/book';
import Modal from 'react-modal';
import {RiBookmarkFill, RiBookmarkLine, RiArrowLeftSLine} from "react-icons/ri";
import BookImage from './book-image';
import { useAppContext } from '../context/app-context-provider';
import { addBookmark, removeBookmark } from '../context/app-context-reducer';

interface Props {
  book: Book;
  onClose?: () => void;
};

Modal.setAppElement('#main');

export default function BookDetail({book, onClose}: Props) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [store, dispatch] = useAppContext();
  const isOpen = !!book;
  const BookmarkIcon = isBookmarked ? RiBookmarkFill : RiBookmarkLine;

  useEffect(() => {
    if (book && store.bookmarks.length > 0) {
      console.log(store.bookmarks);
      setIsBookmarked(!!store.bookmarks.find(e => e.id === book.id));
    }
  }, []);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    dispatch(!isBookmarked ? addBookmark(book) : removeBookmark(book.id) )
    alert(isBookmarked ? 'Removed from Bookmark' : 'Added to Bookmark')
  }

  return isOpen ? (
    <Modal 
      isOpen={isOpen}
      onRequestClose={onClose}
      className="AppModal max-w-4xl h-full md:h-book-detail md:py-8"
      overlayClassName="AppModal-Overlay z-50"
    >
      <div className="p-8 bg-white h-full overflow-y-auto">
        <div className="flex justify-between text-2xl mb-4">
          <RiArrowLeftSLine className="cursor-pointer" onClick={onClose} />
          <BookmarkIcon className="cursor-pointer" onClick={toggleBookmark} />
        </div>
        <div className="max-w-sm px-16 m-auto mb-4">
          <BookImage src={book.cover_url} alt={book.title} />
        </div>

        {/* Title */}
        <div className="text-lg font-bold">{book.title}</div>
        <div className="text-base font-semibold">{book.authors[0]}</div>
        
        {/* Info */}
        <div className="flex py-2 my-4 border-t-thin border-b-thin font-semibold text-sm">
          <div className="mr-4">
            {`${book.sections?.length || 0} Chapters`}
          </div>
          <div className="mr-4">
            {`${Math.ceil(book.audio_length / 60)} Min`}
          </div>
        </div>

        {/* About */}
        <div className="text-lg font-semibold mb-1">What&apos;s is it about?</div>
        <div className="mb-4">
          {book.description}
        </div>

        {/* Sections */}
        <div className="text-lg font-semibold mb-1">What&apos;s inside?</div>
        <div>
          {book.sections.map((section, i) => (
            <div key={section.title} className="font-semibold text-blue-900">
              {i+1}. {section.title}
            </div>
          ))}
        </div>
      </div>
      
    </Modal>
  ) : (<></>);
}
