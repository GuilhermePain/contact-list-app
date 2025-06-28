import React from 'react'

const Button = ({ text, onClick }) => {
    return (
        <button
            className='bg-main-green text-third-green font-bold rounded-md p-1 cursor-pointer'
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button