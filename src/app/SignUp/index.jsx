import Form from '../../components/Form';
import TitleForm from '../../components/Form/TitleForm';
import BodyForm from '../../components/Form/BodyForm';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { User, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import api from '../../api/api';
import imgContactList from '../../assets/svg/img-contact-list.svg';;
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSchema } from '../../validators/signUp/index.js';
import { showError, showSuccess } from '../../lib/toast/index.js';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import Cookies from 'js-cookie';

const SignUp = () => {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(signUpSchema)
    })

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            const signUpResponse = await api.post('/users', {
                name: data.name,
                email: data.email,
                password: data.password
            });

            const signInResponse = await api.post('/auth/signin', {
                email: data.email,
                password: data.password
            });

            Cookies.set('token', signInResponse.data.access_token, {
                secure: true
            });

            showSuccess('Conta criada com sucesso!');
            navigate('/auth/signin');

        } catch (error) {
            setLoading(false)
            if (error.response) {
                showError(error.response.data.message);
                return;
            }

            showError('Houve um erro interno, tente novamente.');
        } finally {
            setLoading(false);
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
                            disabled={loading}
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

                        <Input
                            type={'email'}
                            placeholder={'Digite seu email...'}
                            iconLeft={<Mail className='w-5 h-5 text-main-green' />}
                            {...register('email')}
                            disabled={loading}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

                        <Input
                            type={showPassword ? 'text' : 'password'}
                            placeholder={'Digite sua senha...'}
                            iconLeft={<Lock className='w-5 h-5 text-main-green' />}
                            iconRight={
                                showPassword ?
                                    <EyeOff className='w-5 h-5 text-main-green' /> :
                                    <Eye className='w-5 h-5 text-main-green' />
                            }
                            {...register('password')}
                            onClick={() => setShowPassword(!showPassword)}
                            disabled={loading}
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

                        <Input
                            type={showConfirmPassword ? 'text' : 'password'}
                            placeholder={'Confirme sua senha...'}
                            iconLeft={<Lock className='w-5 h-5 text-main-green' />}
                            iconRight={
                                showConfirmPassword ?
                                    <EyeOff className='w-5 h-5 text-main-green' /> :
                                    <Eye className='w-5 h-5 text-main-green' />
                            }
                            {...register('confirmPassword')}
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            disabled={loading}
                        />
                        {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}


                        <Button
                            disabled={loading}
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