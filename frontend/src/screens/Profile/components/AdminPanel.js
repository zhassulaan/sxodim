import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { listUsers } from '../../../actions/userActions';
import styled from 'styled-components';
import Modify from './Modify';
import Button from '../../../components/Button';

function AdminPanel({ userList }) {
	const dispatch = useDispatch();
	const [option, setOption] = useState({});
	// const userList = useSelector(state => state.userList);
	// const { user } = userList;

	useEffect(() => {
		dispatch(listUsers());
  }, [dispatch]);

	let newData = {};

	const addHandler = (e) => {
		e.preventDefault();
		newData = {
			'refresh': userList[0].refresh,
			'access': userList[0].access,
			'id': userList.length + 1,
			'username': '',
			'email': '',
			'name': '',
			'surename': '',
			'phone': '',
			'avatar': null,
			'isAdmin': false,
			'password': '',
			'token': userList[0].token,
			'last_viwed': [],
		}
		setOption(newData);
	}
	console.log(option, userList.length)

	return (
		<div>
			<h3 className='profile-form-title'>Редактировать</h3>
			{ 
				!option.id ?
					<select 
						name="user_list"
						id="user_list"
						className='profile-form-select'
						value={ option.id }
						onChange={e => setOption( userList[e.target.value - 1] )}
					>
						<option value="" disabled selected>Выберите пользователя</option>
						{
							userList.map(item =>
								<option key={ item.id } value={ item.id }>{ item.name }</option>
							)
						}
					</select>
						:
					null
			}

			{ 
				option.id ?
					<Modify user={ option.id ? option : null } userList={ userList } action={ setOption }/>
						:
					<Button text={ 'Добавить пользвователя' } event={ addHandler } />
			}

		</div>
	);
}

export default AdminPanel;
