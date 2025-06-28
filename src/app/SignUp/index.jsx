import Form from '../../components/Form'
import TitleForm from '../../components/Form/TitleForm'
import BodyForm from '../../components/Form/BodyForm'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { User } from 'lucide-react'
import { Mail } from 'lucide-react';
import { Lock } from 'lucide-react';
import { Eye } from 'lucide-react';
import api from '../../api/api'
import imgContactList from '../../assets/svg/img-contact-list.svg';
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
useForm;
import { signUpSchema } from '../../validators/signUp/index.js'

const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(signUpSchema)
    })

    const onSubmit = async (data) => {

        try {
            const response = await api.post('/users', {
                name: data.name,
                email: data.email,
                password: data.password
            });

            alert('Cadastro realizado com sucesso!');
        } catch (error) {
            if (error.response) {
                alert(`Erro: ${error.response.data.message}`);
                return;
            }
            
            alert('Erro ao conectar com o servidor.');
        }
    }

    return (
        <div className='flex w-full min-h-screen'>
            <aside className='hidden md:w-2/4 md:flex justify-center items-center px-20'>
                <img
                    src={imgContactList}
                    className='min-w-80 '
                />
            </aside>

            <aside className='w-full md:w-2/4 min-h-full bg-main-green p-10 flex flex-col justify-center items-center'>
                <h1 className='text-center text-4xl text-third-green font-bold'>Lista de Contatos</h1>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <TitleForm text={'Crie uma conta'} />
                    <BodyForm>
                        <Input
                            type={'text'}
                            placeholder={'Digite seu nome...'}
                            iconLeft={<User className='w-5 h-5 text-main-green' />}
                            {...register('name')}
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

                        <Input
                            type={'email'}
                            placeholder={'Digite seu email...'}
                            iconLeft={<Mail className='w-5 h-5 text-main-green' />}
                            {...register('email')}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

                        <Input
                            type={'password'}
                            placeholder={'Digite sua senha...'}
                            iconLeft={<Lock className='w-5 h-5 text-main-green' />}
                            iconRight={<Eye className='w-5 h-5 text-main-green' />}
                            {...register('password')}
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

                        <Input
                            type={'password'}
                            placeholder={'Confirme sua senha...'}
                            iconLeft={<Lock className='w-5 h-5 text-main-green' />}
                            iconRight={<Eye className='w-5 h-5 text-main-green' />}
                            {...register('confirmPassword')}
                        />
                        {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}


                        <Button
                            text={'Criar'}
                        />

                        <p className='text-center'>
                            Já possui conta? <a className='underline' href="/auth/signin">Entrar</a>
                        </p>
                    </BodyForm>
                </Form>
            </aside>
        </div>
    )
}

export default SignUp