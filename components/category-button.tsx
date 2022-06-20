import React, { ReactNode } from 'react'
import Category from '../types/category';

interface Props {
  data: Category;
}

export default function CategoryButton({data}: Props) {
  const {name, id} = data;
  return (
    <div className={"px-4 py-1 border-2 border-gray-400 rounded-sm mr-2 mb-2 text-sm cursor-pointer "}>{name}</div>
  )
}
