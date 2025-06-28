import React from 'react'

const Form = ({ children, onSubmit }) => {

    return (
        <form
            className='bg-white max-w-96 shadow-2xl rounded-2xl p-6 mt-4 flex flex-col gap-5'
            onSubmit={onSubmit}
        >
            {children}
        </form>
    )
}

export default Form