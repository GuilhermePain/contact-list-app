import React from 'react'

const Form = ({ children, onSubmit }) => {

    return (
        <form
            className='w-full max-w-sm md:w-96 bg-white shadow-2xl rounded-2xl p-6 mt-6 flex flex-col gap-5'
            onSubmit={onSubmit}
        >
            {children}
        </form>
    )
}

export default Form