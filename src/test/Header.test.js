import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '../Header'

describe('Header Render Test', () => {
  let headerComp
  beforeEach(() => {
    render(<Header />)
    //Header emoji search mi ona baktık.
    headerComp = screen.getByText('Emoji Search')
  })
  test('should be have emoji search in header', () => {
    expect(headerComp).toBeInTheDocument()
  })
})
