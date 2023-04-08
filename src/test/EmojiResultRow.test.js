import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'

describe('emoji list rendering', () => {
  let values, lastVal
  beforeEach(() => {
    render(<App />)
    //Click to copy emoji içieren tüm elemanları aldık
    values = screen.getAllByText(/Click to copy emoji/i)

    //Kontrol etmek için listenin son elemanını aldık
    lastVal = screen.getByText('Kissing Heart')
  })
  test('emoji list rendering test', () => {
    //Listenin uzunluğu olması gereken gibi 20 mi ona baktık ve dizinin son elemanı doğrumu onu karşılaştırdık.
    expect(lastVal).toBeInTheDocument()
    expect(values.length).toEqual(20)
  })
})
