import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { login } from '../actions/userActions';
import Input from '../components/Input';
import Button from '../components/Button';
import Message from '../components/Message';
import userList from '../userList';

function Login({ action }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();
	const location = useLocation();
	const history = createBrowserHistory();

	const redirect = location.search ? location.search.split('=')[1] : '/';

	const userLogin = useSelector(state => state.userLogin);
	const { error, userInfo } = userLogin;

	useEffect(() => {
		if (userInfo) {
			history.push(redirect);
		}
	}, [history, userInfo, redirect]);

	const loginHandler = () => {
		dispatch(login(email, password));
		localStorage.setItem('user_list', JSON.stringify(userList));
	}

	return (
		<Wrapper>
			<div className='form-container'>
				<div className='form-header'>
					<h2 className='form-title'>ВХОД</h2>

					<span className='form-paragraph' onClick={ () => action('register') }>
						<p>Регистрация</p>
					</span>
				</div>

				{ error && <Message variant='danger'>{ error }</Message> }

				<div>
					<div className='form-group'>
						<label htmlFor='email' className='form-group-label'>Email</label>
						<Input
							type={ 'text' }
							name={ 'email' }
							placeholder={ 'Эл. почта' }
							value={ email }
							classname={ 'form-group-input' }
							action={ (e) => setEmail(e.target.value) }
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='password' className='form-group-label'>Пароль</label>
						<Input
							type={ 'password' }
							name={ 'password' }
							placeholder={ 'Пароль' }
							value={ password }
							classname={ 'form-group-input' }
							action={ (e) => setPassword(e.target.value) }
						/>
					</div>
					<Button text={ 'Войти' } event={ loginHandler } />
					<p className='form-reset'>Забыли пароль?</p>
				</div>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	position: absolute;
	left: 30%;
	width: 40%;
	z-index: 4;

	.form-container {
    position: relative;
    background: var(--clr-white);
    margin: auto;
    padding: 3.75rem 5rem 4.375rem;
  }

	.form-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.875rem;
  }
	
  .form-title {
    line-height: 2.5rem;
    font-size: 30px;
    font-weight: 500;
  }
	
  .form-paragraph {
    line-height: 1.25rem;
    font-size: 16px;
    font-weight: 400;
    margin-top: 1.25rem;
    cursor: pointer;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    margin-top: 1.25rem;
  }

  .form-group-label {
    line-height: 1.25rem;
		font-size: 16px;
    font-weight: 400;
    margin-bottom: 0.625rem;
  }
  
	.form-group-input {
		height: 2.5rem;
    font-size: 14px;
    font-weight: 400;
    padding-left: 1.25rem;
		border: 1px solid var(--clr-grey-3);
  }
	
	#button {
		margin-top: 2.5rem;
	}
	
  .form-reset {
		width: 100%;
    line-height: 1.25rem;
		font-size: 14px;
    font-weight: 400;
    text-decoration: underline;
    text-align: center;
    margin-top: 0.625rem;
  }
`;

export default Login;
