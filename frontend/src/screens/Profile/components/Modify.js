import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { USER_UPDATE_PROFILE_RESET } from '../../../constants/userConstants';
import { updateUserProfile, getUserDetails } from '../../../actions/userActions';
import styled from 'styled-components';
import { register } from '../../../actions/userActions';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Message from '../../../components/Message';

function Modify({ user, userList, action }) {
	const [name, setName] = useState(user.name);
	const [surename, setSurename] = useState(user.surename);
	const [username, setUsername] = useState(user.username);
	const [email, setEmail] = useState(user.email);
	const [phone, setPhone] = useState(user.phone);
	const [password, setPassword] = useState(user.password);
	const [isAdmin, setIsAdmin] = useState(user.isAdmin);
	const [message, setMessage] = useState('');

	const dispatch = useDispatch();

	// const userDetails = useSelector(state => state.userDetails);
	// const { user } = userDetails;

	const userUpdateProfile = useSelector(state => state.userUpdateProfile);
	const { success } = userUpdateProfile;
	const [succes, setSucces] = useState(success);

	const userRegister = useSelector(state => state.userRegister);
	const { error, userInfo } = userRegister;

	useEffect(() => {
		if (!user || !user.name || success) {
			dispatch({ type: USER_UPDATE_PROFILE_RESET });
			dispatch(getUserDetails('profile'));
		} 
	}, [dispatch, user, success]);

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

	let newData = {};

	const submitHandler = (e) => {
		e.preventDefault();
		if (name === user.name && surename === user.surename && username === user.username && email === user.email && phone === user.phone && password === user.password && isAdmin === user.isAdmin) {
			setSucces(false);
			setMessage('Заполните хотя бы одно поле.');
		} else if (email !== user.email && !email.includes('@')) {
			setSucces(false);
			setMessage('Укажите правильный электронный адрес.');
		} else if (password.length < 8) {
			setSucces(false);
			setMessage('Пароль должен иметь не менее 8 символов.');
		} else if (!checkUppercase(password)) {
			setSucces(false);
			setMessage('Пароль должен содержать хотя бы одну прописную букву.');
		} else if (!checkLowercase(password)) {
			setSucces(false);
			setMessage('Пароль должен содержать хотя бы одну строчную букву.');
		} else if (!checkNumber(password)) {
			setSucces(false);
			setMessage('Пароль должен содержать хотя бы одну цифру.');
		} else {
			setSucces(true);
			setMessage('Данные пользвователя успешно изменены.' );
			newData = 	{
				'refresh': user.refresh,
				'access': user.access,
				'id': user.id,
				'username': (username !== user.username) ? username : user.username,
				'email': (email !== user.email) ? email : user.email,
				'name': (name !== user.name) ? name : user.name,
				'surename': (surename !== user.surename) ? surename : user.surename,
				'phone': (phone !== user.phone) ? phone : user.phone,
				'avatar': user.avatar,
				'isAdmin': (isAdmin !== user.isAdmin) ? isAdmin : user.isAdmin,
				'password': (password !== user.password) ? password : user.password,
				'token': user.token,
				'last_viwed': user.last_viwed,
			}
			userList[user.id - 1] = Object.assign({}, userList[user.id - 1], newData);
			localStorage.setItem('user_list', JSON.stringify(userList));
			dispatch(updateUserProfile({
				'id': user.id,
				'name': (name !== '') ? name : user.name,
				'surename': (surename !== '') ? surename : user.surename,
				'username': (username !== '') ? username : user.username,
				'email': (email !== '') ? email : user.email,
				'phone': (phone !== '') ? phone : user.phone,
				'password': user.password,
			}));
			action({});
		}
	}

	const addHandler = (e) => {
		e.preventDefault();
		e.preventDefault();
		if (name === '' || email === '' || password === '') {
			setSucces(false);
			setMessage('Заполните обязательные поля: имя, e-mail, пароль.');
		} else if (email !== '' && !email.includes('@')) {
			setSucces(false);
			setMessage('Укажите правильный электронный адрес.');
		} else if (email !== '' && userList.find(item => item.email === email)) {
			setSucces(false);
			setMessage('Ползователь с данным электронным адресом уже зарегестрирован.');
		} else if (password.length < 8) {
			setSucces(false);
			setMessage('Пароль должен иметь не менее 8 символов.');
		} else if (!checkUppercase(password)) {
			setSucces(false);
			setMessage('Пароль должен содержать хотя бы одну прописную букву.');
		} else if (!checkLowercase(password)) {
			setSucces(false);
			setMessage('Пароль должен содержать хотя бы одну строчную букву.');
		} else if (!checkNumber(password)) {
			setSucces(false);
			setMessage('Пароль должен содержать хотя бы одну цифру.');
		} else {
			setSucces(true);
			setMessage('Пользвователь был добавлен.' );
			newData = 	{
				'refresh': user.refresh,
				'access': user.access,
				'id': user.id,
				'username': username,
				'email': email,
				'name': name,
				'surename': surename,
				'phone': phone,
				'avatar': user.avatar,
				'isAdmin': isAdmin,
				'password': password,
				'token': user.token,
				'last_viwed': user.last_viwed,
			}
			userList[user.id - 1] = Object.assign({}, userList[user.id], newData);
			localStorage.setItem('user_list', JSON.stringify(userList));
			dispatch(register(name, surename, username, email, phone, password));
			action({});
		}
	}

	const deleteHandler = (e) => {
		e.preventDefault();
		if (user.id !== 1) {
			setSucces(true);
			setMessage('Данный пользвователь был удален.');
			userList = Object.assign(userList.filter(item => item.id !== user.id));
			localStorage.setItem('user_list', JSON.stringify(userList));
		}
		action({});
	}

	return (
		<div>
			<Input 
				type={ 'text' }
				name={ 'name' }
				classname={ 'profile-form-input' }
				value={ name }
				placeholder={'Имя'}
				action={ (e) => setName(e.target.value) }
			/>
			<Input 
				type={ 'text' }
				name={ 'surename' }
				classname={ 'profile-form-input' }
				value={ surename }
				placeholder={ 'Фамилие' }
				action={ (e) => setSurename(e.target.value) }
			/>
			<Input 
				type={ 'text' }
				name={ 'username' }
				classname={ 'profile-form-input' }
				value={ username }
				placeholder='Имя пользователя'
				onChange={ (e) => setUsername(e.target.value) }
			/>
			<Input 
				type={ 'text' }
				name={ 'email' }
				classname={ 'profile-form-input' }
				value={ email }
				placeholder={ 'e-mail' }
				action={ (e) => setEmail(e.target.value) }
			/>
			<Input
				type={ 'text' }
				name={ 'phone' }
				classname={ 'profile-form-input' }
				value={ phone }
				placeholder={ '+7 (___) ___-__-__' }
				// mask={[
				// 	'+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/,
				// ]}
				action={ (e) => setPhone(e.target.value
					// .replace(/[ ()-]/g, '')
				) }
			/>
			<Input
				type={ 'text' }
				name={ 'password' }
				classname={ 'profile-form-input' }
				value={ password }
				placeholder={ 'Новый пароль' }
				action={ (e) => setPassword(e.target.value) }
			/>
			<p>isAdmin</p>
			<select
				name="user_isAdmin"
				id="user_isAdmin"
				className='profile-form-select'
				value={ isAdmin }
				onChange={e => setIsAdmin( e.target.value )}
			>
					<option value={ true }>Да</option>
					<option value={ false }>Нет</option>
				</select>
			
			{ 
				(user.id <= userList.length) ?
					<Wrapper>
						<Button text={ 'Обновить данные' } event={ submitHandler } />
						<Button text={ 'Удалить пользвователя' } event={ deleteHandler } />
					</Wrapper>
							:
					<Button text={ 'Добавить пользвователя' } event={ addHandler } />
			}
			{ message && <Message variant={ succes ? 'success' : 'danger' }>{ message }</Message> }
		</div>
	);
}

const Wrapper = styled.div`
	display: flex;
`;

export default Modify;
