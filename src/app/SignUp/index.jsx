import React, { useState } from 'react'
import Form from '../../components/Form'
import TitleForm from '../../components/Form/TitleForm'
import BodyForm from '../../components/Form/BodyForm'
import Input from '../../components/Input'
import Button from '../../components/Button'

const SignUp = () => {

    return (
        <div className='w-full h-screen bg-main-green p-10'>
            <h1 className='text-center text-4xl text-third-green font-bold'>Lista de Contatos</h1>
            <Form>

                <TitleForm text={'Crie uma conta'} />

                <BodyForm>
                    <Input
                        type={'text'}
                        placeholder={'Digite seu nome...'}
                    />
                    <Input
                        type={'email'}
                        placeholder={'Digite seu email...'}
                    />
                    <Input
                        type={'password'}
                        placeholder={'Digite sua senha...'}
                    />
                    <Input
                        type={'password'}
                        placeholder={'Confirme sua senha...'}
                    />
                    <Button
                        
                    />
                </BodyForm>

            </Form>
        </div>
    )
}

export default SignUp