import React from 'react'

const Input = ({ type, placeholder }) => {
    return (
        <input
            className='border-2 border-main-green rounded-md p-1 '
            type={type} placeholder={placeholder}
        />
    )
}

export default Input