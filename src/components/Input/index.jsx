import React from 'react'

const Input = ({ type, placeholder, iconLeft, iconRight, onClick, disabled, ...rest }) => {
    return (
        <div className='w-full flex items-center border-2 border-main-green rounded-md'>
            {
                iconLeft && (
                    <span className='flex items-center justify-center pl-2'>
                        {iconLeft}
                    </span>
                )
            }
            <input
                className='w-full p-2 outline-none'
                type={type}
                placeholder={placeholder}
                {...rest}
                disabled={disabled}
            />
            {
                iconRight && (
                    <span
                        onClick={onClick}
                        className='flex items-center justify-center pr-2'
                    >
                        {iconRight}
                    </span>
                )
            }
        </div>
    )
}

export default Input
