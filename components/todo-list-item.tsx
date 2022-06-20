import React from 'react';
import TodoItem from '../types/todo-item';
import {GoCheck, GoEye} from 'react-icons/go';

interface Props {
  item: TodoItem;
}

export default function TodoListItem({item}: Props) {
  return (
    <div className="group cursor-default border-b-thin flex justify-between items-center hover:bg-gray-100" title="Click to complete task">
      <div className={"py-3 px-6 font-bold " + (item.completed ? "line-through" : "")}>{item.description}</div>
      <div className="flex pr-4">
        <div className="py-3 px-3 cursor-pointer" title="View Detail">
          <GoEye className=" opacity-50 group-hover:opacity-100" />
        </div>
        <div className="py-3 px-3 cursor-pointer" title="Complete">
          <GoCheck className=" opacity-50 group-hover:opacity-100" />
        </div>
      </div>
    </div>
  )
}
