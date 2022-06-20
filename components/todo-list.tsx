import React from 'react'
import TodoItem from '../types/todo-item';
import TodoListItem from './todo-list-item';

interface Props {
  items: TodoItem[];
  completed: false|true|"all";
}

export default function TodoList({items, completed}: Props) {
  const todoItems = completed === "all" ? items : items.filter(i => i.completed === completed)
  return (
    <div>
      {todoItems.map(item => <TodoListItem key={item._id} item={item} />)}
    </div>
  )
}
