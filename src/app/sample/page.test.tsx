import { expect, test } from 'vitest'
import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import SamplePage from '@/app/sample/page'

test('Page', () => {
  render(<SamplePage />)
  expect(screen.getByRole('heading', { level: 1, name: 'Home' })).toBeDefined()
})
