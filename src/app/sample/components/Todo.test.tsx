import { render, fireEvent } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import TodoApp from '@/app/sample/components/Todo'
import { describe, expect } from 'vitest'

describe('allows users to add and remove todos', () => {
  render(<TodoApp />)

  // Add a new todo
  fireEvent.change(screen.getByPlaceholderText('Add a new todo'), {
    target: { value: 'Learn React Testing' },
  })
  fireEvent.click(screen.getByText('Add'))
  // Verify the new todo is in the list
  expect(screen.getByText('Learn React Testing')).toBeInTheDocument()
  // Remove the todo
  fireEvent.click(screen.getByText('Remove'))
  // Verify the todo is removed from the list
  expect(screen.queryByText('Learn React Testing')).not.toBeInTheDocument()
})
