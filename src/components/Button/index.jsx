import React from 'react'

const Button = ({ text }) => {
    return (
        <button className='bg-main-green text-third-green' >
            {text}
        </button>
    )
}

export default Button