import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'

describe('emoji list rendering', () => {
  let values, lastVal
  beforeEach(() => {
    render(<App />)
    values = screen.getAllByText(/Click to copy emoji/i)
    lastVal = screen.getByText('Kissing Heart')
  })
  test('emoji list rendering test', () => {
    expect(lastVal).toBeInTheDocument()
    expect(values.length).toEqual(20)
  })
})
