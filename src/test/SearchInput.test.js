import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'

describe('search input', () => {
  let searchInput
  beforeEach(() => {
    render(<App />)
    searchInput = screen.getByLabelText('test')
  })
  test('serch input set value filter list', () => {
    const value = 'Wink'
    fireEvent.change(searchInput, value)
    expect(screen.getByText(value)).toBeInTheDocument()
  })
})
