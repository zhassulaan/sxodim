import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { USER_UPDATE_PROFILE_RESET } from '../../../constants/userConstants';
import { updateUserProfile, getUserDetails } from '../../../actions/userActions';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Message from '../../../components/Message';

function ResetPassword({ userList, user }) {
	const [oldPassword, setOldPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [message, setMessage] = useState('');

	const dispatch = useDispatch();

	// const userDetails = useSelector(state => state.userDetails);
	// const { user } = userDetails;

	const userUpdateProfile = useSelector(state => state.userUpdateProfile);
	let { success } = userUpdateProfile;
	const [succes, setSucces] = useState(success);

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
		if (oldPassword === '' || newPassword === '' || confirmPassword === '') {
			setSucces(false);
			setMessage('Заполните все поля.');
		} else if (newPassword.length < 8) {
			setSucces(false);
			setMessage('Пароль должен иметь не менее 8 символов.');
		} else if (!checkUppercase(newPassword)) {
			setSucces(false);
			setMessage('Пароль должен содержать хотя бы одну прописную букву.');
		} else if (!checkLowercase(newPassword)) {
			setSucces(false);
			setMessage('Пароль должен содержать хотя бы одну строчную букву.');
		} else if (!checkNumber(newPassword)) {
			setSucces(false);
			setMessage('Пароль должен содержать хотя бы одну цифру.');
		} else if (newPassword !== confirmPassword) {
			setSucces(false);
			setMessage('Пароли не совпадают.');
		} else if (oldPassword !== user.password) {
			setSucces(false);
			setMessage('Вы неправильно ввели старый пароль.');
		} else {
			setSucces(true);
			setMessage('Ваш пароль успешно изменен.');
			newData = 	{
				'refresh': user.refresh,
				'access': user.access,
				'id': user.id,
				'username': user.username,
				'email': user.email,
				'name': user.name,
				'surename': user.surename,
				'phone': user.phone,
				'avatar': user.avatar,
				'isAdmin': user.isAdmin,
				'password': newPassword,
				'token': user.token,
				'last_viwed': user.last_viwed,
			}
			userList[user.id - 1] = Object.assign({}, userList[user.id - 1], newData);
			localStorage.setItem('user_list', JSON.stringify(userList));
			dispatch(updateUserProfile({
				'id': user._id,
				'name': user.name,
				'surename': user.surename,
				'username': user.username,
				'email': user.email,
				'phone': user.phone,
				'password': newPassword,
			}));
		}
	}

	return (
		<div>
			<h3 className='profile-form-title'>Сменить пароль</h3>
			<Input 
				type={ 'password' }
				name={ 'old_password' }
				classname={ 'profile-form-input' }
				value={ oldPassword }
				placeholder={'Старый пароль'}
				action={ (e) => setOldPassword(e.target.value) }
			/>
			<Input 
				type={ 'password' }
				name={ 'new_password' }
				classname={ 'profile-form-input' }
				value={ newPassword }
				placeholder={'Новый пароль'}
				action={ (e) => setNewPassword(e.target.value) }
			/>
			<Input 
				type={ 'password' }
				name={ 'confirm_password' }
				classname={ 'profile-form-input' }
				value={ confirmPassword }
				placeholder={ 'Повторите пароль' }
				action={ (e) => setConfirmPassword(e.target.value) }
			/>
			
			<Button text={ 'Сменить пароль' } event={ submitHandler } />
			{ message && <Message variant={ succes ? 'success' : 'danger' }>{ message }</Message> }
		</div>
	);
}

export default ResetPassword;
