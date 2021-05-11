import React from 'react'
import spinner from '../img/spinner.gif'

const Spinner = () => {
  return (
    <img
      src={spinner}
      style={{ width: '200px', margin: 'auto', position: 'relative',left:'550px' }}
      alt='Loading'
    />
  )
}

export default Spinner;