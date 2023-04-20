import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { createBrowserHistory } from 'history';
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { register } from "../actions/userActions";
import Button from "../components/Button";
import Message from "../components/Message";

function Register({ event }) {
	const [name, setName] = useState('');
	const [surename, setSurename] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [message, setMessage] = useState('');

	const dispatch = useDispatch();
	const location = useLocation();
	const history = createBrowserHistory();

	const redirect = location.search ? location.search.split('=')[1] : '/';

	const userRegister = useSelector(state => state.userRegister);
	const { error, userInfo } = userRegister;

	useEffect(() => {
		if (userInfo) {
			history.push(redirect);
		}
	}, [history, userInfo, redirect]);

	function checkUppercase(str) {
    for (var i = 0; i < str.length; i++) {
      if (
        str.charAt(i) === str.charAt(i).toUpperCase() &&
        str.charAt(i).match(/[a-z]/i)
      ) {
        return true;
      }
    }
    return false;
  }

  function checkLowercase(str) {
    for (var i = 0; i < str.length; i++) {
      if (
        str.charAt(i) === str.charAt(i).toLowerCase() &&
        str.charAt(i).match(/[a-z]/i)
      ) {
        return true;
      }
    }
    return false;
  }

  function checkNumber(str) {
    return /[0-9]/.test(str);
  }

	const submitHandler = () => {
		console.log(name);
		console.log(surename);
		console.log(email);
		console.log(password);
		console.log(confirmPassword);
		if (name === '' || surename === '' || email === '' || password === '' || confirmPassword === '') {
			setMessage("Заполните каждое поле доконца.");
		} else if (!email.includes('@')) {
			setMessage("Укажите правильный электронный адрес.");
		} else if (password.length < 8) {
			setMessage("Пароль должен иметь не менее 8 символов.");
		} else if (!checkUppercase(password)) {
			setMessage("Пароль должен содержать хотя бы одну прописную букву.");
		} else if (!checkLowercase(password)) {
			setMessage("Пароль должен содержать хотя бы одну строчную букву.");
		} else if (!checkNumber(password)) {
			setMessage("Пароль должен содержать хотя бы одну цифру.");
		} else if (password !== confirmPassword) {
			setMessage("Пароли не совпадают.");
		} else if (error) {
			setMessage("Пользователь с таким адресом электронной почты уже существует.");
		} else {
			dispatch(register(name, surename, email, password));
		}
	}

	return (
		<Wrapper>
			<div className="form-container">
				<div className="form-header">
					<h2 className="form-title">РЕГЕСТРАЦИЯ</h2>

					<span className="form-paragraph" onClick={ () => event('login') }>
						<p>Вход</p>
					</span>
				</div>

				{ error && <Message variant="danger">{ message }</Message> }

				<div>
					<div className="form-group">
						<label htmlFor="name" className="form-group-label">Имя</label>
						<input
							required
							type="text"
							name="name"
							placeholder="Ваше име"
							value={ name }
							className="form-group-input"
							id="name"
							onChange={ (e) => setName(e.target.value) }
						/>
					</div>
					<div className="form-group">
						<label htmlFor="surename" className="form-group-label">Фамилия</label>
						<input
							required
							type="text"
							name="surename"
							placeholder="Ваше фамилие"
							value={ surename }
							className="form-group-input"
							id="surename"
							onChange={ (e) => setSurename(e.target.value) }
						/>
					</div>
					<div className="form-group">
						<label htmlFor="name" className="form-group-label">Email</label>
						<input
							required
							type="text"
							name="email"
							placeholder="Эл. почта"
							value={ email }
							className="form-group-input"
							id="email"
							onChange={ (e) => setEmail(e.target.value) }
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password" className="form-group-label">Пароль</label>
						<input
							required
							type="text"
							name="password"
							placeholder="Пароль"
							value={ password }
							className="form-group-input"
							id="password"
							onChange={ (e) => setPassword(e.target.value) }
						/>
					</div>
					<div className="form-group">
						<label htmlFor="confirm_password" className="form-group-label">Подтвердите пароль</label>
						<input
							required
							type="text"
							name="confirm_password"
							placeholder="Пароль"
							value={ confirmPassword }
							className="form-group-input"
							id="confirm_password"
							onChange={ (e) => setConfirmPassword(e.target.value) }
						/>
					</div>
					<Button text={ "Зарегестрироваться" } event={ submitHandler } />
				</div>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	position: fixed;
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
		border: 1px solid var(--clr-grey3);
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

export default Register;
