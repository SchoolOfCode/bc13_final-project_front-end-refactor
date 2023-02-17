import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button from '../component/button/Button'

describe('Button component', () => {
  it('renders without crashing', () => {
    render(<Button text="Click me" />)
  })

  it('calls the onClick function when clicked', () => {
    const onClick = jest.fn()
    const { getByText } = render(<Button text="Click me" onClick={onClick} />)
    fireEvent.click(getByText('Click me'))
    expect(onClick).toHaveBeenCalled()
  })
})
