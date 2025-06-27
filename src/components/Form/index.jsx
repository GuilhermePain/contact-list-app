import React from 'react'

const Form = ({ children }) => {
    return (
        <form className='bg-third-green shadow-2xl rounded-2xl p-6 m-5 flex flex-col gap-5'>
            {children}
        </form>
    )
}

export default Form