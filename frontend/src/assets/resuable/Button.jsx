import React from 'react'

const Button = ({text,classample}) => {
  return (
    <div>
        <button type="button" class={classample}>{text}</button>
    </div>
  )
}

export default Button