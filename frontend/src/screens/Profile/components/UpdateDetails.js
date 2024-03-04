import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { USER_UPDATE_PROFILE_RESET } from '../../../constants/userConstants';
import { updateUserProfile, getUserDetails } from '../../../actions/userActions';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Message from '../../../components/Message';

function UpdateDetails({userList, user}) {
	const [name, setName] = useState('');
	const [surename, setSurename] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [message, setMessage] = useState('');

	const dispatch = useDispatch();

	// const userDetails = useSelector(state => state.userDetails);
	// const { user } = userDetails;

	const userUpdateProfile = useSelector(state => state.userUpdateProfile);
	const { success } = userUpdateProfile;
	const [succes, setSucces] = useState(success);

	useEffect(() => {
		if (!user || !user.name || success) {
			dispatch({ type: USER_UPDATE_PROFILE_RESET });
			dispatch(getUserDetails('profile'));
		} 
	}, [dispatch, user, success]);

	let newData = {};

	const submitHandler = (e) => {
		e.preventDefault();
		if (name === '' && surename === '' && username === '' && email === '' && phone === '') {
			setSucces(false);
			setMessage('Заполните хотя бы одно поле.');
		} else if (email !== '' && !email.includes('@')) {
			setSucces(false);
			setMessage('Укажите правильный электронный адрес.');
		} else {
			setSucces(true);
			setMessage('Вашы данные успешно изменены.');
			newData = 	{
				'refresh': user.refresh,
				'access': user.access,
				'id': user.id,
				'username': (username !== '') ? username : user.username,
				'email': (email !== '') ? email : user.email,
				'name': (name !== '') ? name : user.name,
				'surename': (surename !== '') ? surename : user.surename,
				'phone': (phone !== '') ? phone : user.phone,
				'avatar': user.avatar,
				'isAdmin': user.isAdmin,
				'password': user.password,
				'token': user.token,
				'last_viwed': user.last_viwed,
			}
			userList[user.id - 1] = Object.assign({}, userList[user.id - 1], newData);
			localStorage.setItem('user_list', JSON.stringify(userList));
			dispatch(updateUserProfile({
				'id': user._id,
				'name': (name !== '') ? name : user.name,
				'surename': (surename !== '') ? surename : user.surename,
				'username': (username !== '') ? username : user.username,
				'email': (email !== '') ? email : user.email,
				'phone': (phone !== '') ? phone : user.phone,
				'password': user.password,
			}));
		}
	}

	return (
		<div>
			<h3 className='profile-form-title'>Редактировать данные</h3>
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
			<Button text={ 'Сохранить' } event={ submitHandler } />
			{ message && <Message variant={ succes ? 'success' : 'danger' }>{ message }</Message> }
		</div>
	);
}

export default UpdateDetails;
