import React, { useState } from "react"
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from '@chakra-ui/react'



export default function Example() {
    const format = (val) => `£` + val
    const parse = (val) => val.replace(/^\$/, '')
  
    const [value, setValue] = React.useState('5.00')
  
    return (
      <NumberInput
        onChange={(valueString) => setValue(parse(valueString))}
        value={format(value)}
        max={100}
        step={5}
        size='lg'
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    )
  }