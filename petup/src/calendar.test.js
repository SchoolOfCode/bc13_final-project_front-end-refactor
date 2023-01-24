import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Calendar from '../component/calendar/calendar'

describe('Calendar component', () => {
  it('renders without crashing', () => {
    render(<Calendar />)
  })

  it('displays the date picker', () => {
    const { container } = render(<Calendar />)
    expect(container.querySelector('input')).toBeInTheDocument()
  })

  it('calls the onChange function when a date is selected', () => {
    const { container } = render(<Calendar />)
    const input = container.querySelector('input')
    fireEvent.click(input)
    fireEvent.click(container.querySelector('.react-datepicker__day--002'))
    expect(setStartDate).toHaveBeenCalled()
  })

})
