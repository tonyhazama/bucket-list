/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import debounce from 'lodash.debounce';

interface Props {
  onSearch: (keyword: string) => void;
}



export default function SearchBox({onSearch}: Props) {

  const handler = useCallback(debounce(onSearch, 500), []);
  const handleKeyup = (e: any) => {
    handler((e.target.value).toLowerCase());
  }

  return (
    <div className="flex border-thin border-gray-300 rounded-sm px-3 py-1  items-center">
      <FaSearch className="mr-3 text-gray-400" />
      <input className="outline-none w-full"  autoComplete="off" placeholder="Search here" onKeyUp={handleKeyup}  />
    </div>
  )
}
