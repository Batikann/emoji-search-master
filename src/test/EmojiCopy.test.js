import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'

describe('emoji clicked copy', () => {
  //Smile değerini içeren liste elemanını yakaladık.
  let listElement
  beforeEach(() => {
    render(<App />)
    listElement = screen.getByText('Smile')
  })
  test('emoji clicked copy', () => {
    //Yakaladığımız elemana click eventini uygulayup eşleşip eşleşmediğine baktık.
    fireEvent.click(listElement)
    expect(
      listElement.parentElement.getAttribute('data-clipboard-text')
    ).toMatch('😄')
  })
})
