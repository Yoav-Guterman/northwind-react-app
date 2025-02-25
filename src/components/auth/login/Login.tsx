// src/components/auth/login/Login.tsx
import { useForm } from 'react-hook-form';
import { JSX, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Auth';
import auth from '../../../service/auth';
import './Login.css';
import northwindLogo from '../../../assets/photos/northwindIcon.jpg';

interface LoginModel {
    username: string;
    password: string;
}

export default function Login(): JSX.Element {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { register, handleSubmit, formState: { errors } } = useForm<LoginModel>();
    const navigate = useNavigate();
    const { newLogin } = useContext(AuthContext)!;

    async function submit(login: LoginModel) {
        try {
            setIsLoading(true);
            const jwt = await auth.login(login);
            newLogin(jwt);
            navigate('/products');
        } catch (error) {
            if (error instanceof Error) {
                alert('Login failed: ' + error.message);
            }
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className='Login'>
            <div className='login-content'>
                <div className='login-left'>
                    <div className='welcome-text'>
                        <h1>Welcome to</h1>
                        <div className='logo-container'>
                            <img src={northwindLogo} alt="Northwind" className='logo' />
                        </div>
                        <p>Your Complete Trading Management Solution</p>
                    </div>
                    <div className='features'>
                        <div className='feature-item'>
                            <span className='feature-icon'>📦</span>
                            <p>Manage Products & Inventory</p>
                        </div>
                        <div className='feature-item'>
                            <span className='feature-icon'>📊</span>
                            <p>Track Orders & Sales</p>
                        </div>
                        <div className='feature-item'>
                            <span className='feature-icon'>👥</span>
                            <p>Customer Management</p>
                        </div>
                    </div>
                </div>

                <div className='login-right'>
                    <div className='login-form-container'>
                        <h2>Sign In</h2>
                        <p>Access your dashboard</p>

                        <form onSubmit={handleSubmit(submit)} className='login-form'>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Username"
                                    {...register('username', { required: 'Username is required' })}
                                    className="form-control"
                                />
                                {errors.username &&
                                    <span className="error-message">{errors.username.message}</span>
                                }
                            </div>

                            <div className="form-group">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    {...register('password', {
                                        required: 'Password is required',
                                        minLength: {
                                            value: 6,
                                            message: 'Password must be at least 6 characters'
                                        }
                                    })}
                                    className="form-control"
                                />
                                {errors.password &&
                                    <span className="error-message">{errors.password.message}</span>
                                }
                            </div>

                            <button
                                type="submit"
                                className={`login-button ${isLoading ? 'loading' : ''}`}
                                disabled={isLoading}
                            >
                                {isLoading ? 'Signing In...' : 'Sign In'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}