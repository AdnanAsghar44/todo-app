import React, { useEffect, useState } from 'react'
import "./App.css"
import TodoInput from './components/TodoInput'
import Todolist from './components/Todolist';


//To Get that From LocalStorage

const getLocalItems = () => {
  let list = localStorage.getItem('lists');
  console.log(list);


  if (list) {
    return JSON.parse(localStorage.getItem('lists'));
  } else {
    return [];
  }

}


const App = () => {
  const [listTodo, setListTodo] = useState(getLocalItems());


  let addList = (inputText) => {
    if (inputText !== '')
      setListTodo([...listTodo, inputText]);
  }
  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1)
    setListTodo([...newListTodo])
  }

  //add data to localStorage
  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(listTodo))
  }, [listTodo]);


  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList} />
        <h1 className="app-heading">Todo</h1>

        {listTodo.map((listItem, i) => {
          return (
            <Todolist key={i} index={i} item={listItem} deleteItem={deleteListItem} />
          )
        })}
      </div>
    </div>
  )
}

export default App
