import { useState, type FC } from 'react'

const TodoApp: FC = () => {
  const [todos, setTodos] = useState<string[]>([])
  const [newTodo, setNewTodo] = useState<string>('')

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo])
      setNewTodo('')
    }
  }

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index))
  }

  return (
    <div>
      <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="Add a new todo" />
      <button type="button" onClick={addTodo}>
        Add
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo}>
            {todo}{' '}
            <button type="button" onClick={() => removeTodo(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoApp
