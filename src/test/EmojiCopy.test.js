import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'

describe('emoji clicked copy', () => {
  let listElement
  beforeEach(() => {
    render(<App />)
    listElement = screen.getByText('Smile')
  })
  test('emoji clicked copy', () => {
    fireEvent.click(listElement)
    expect(
      listElement.parentElement.getAttribute('data-clipboard-text')
    ).toMatch('😄')
  })
})
