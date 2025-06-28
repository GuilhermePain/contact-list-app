import React from 'react'

const Input = ({ type, placeholder, iconLeft, iconRight, onChange, value, ...rest }) => {
    return (
        <div className='flex items-center border-2 border-main-green rounded-md'>
            {
                iconLeft && (
                    <span className='flex items-center justify-center pl-2'>
                        {iconLeft}
                    </span>
                )
            }
            <input
                onChange={onChange}
                value={value}
                className='p-2 flex-1 outline-none'
                type={type}
                placeholder={placeholder}
                {...rest}
            />
            {
                iconRight && (
                    <span className='flex items-center justify-center pr-2'>
                        {iconRight}
                    </span>
                )
            }
        </div>
    )
}

export default Input
