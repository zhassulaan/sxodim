import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPencilAlt, faKey, faEye, faChessKing } from '@fortawesome/fontawesome-free-solid'
import UpdateDetails from './components/UpdateDetails';
import ResetPassword from './components/ResetPassword';
import LastViewed from './components/LastViewed';
import AdminPanel from './components/AdminPanel';
import useDebounce from '../../useDebounce';

function Profile({ post }) {
	const [option, setOption] = useState(1);
	
	const userLogin = useSelector(state => state.userLogin);
	const { userInfo } = userLogin;
	
	const userList = JSON.parse(localStorage.getItem('user_list'));
	let user = {};
	useDebounce(
		userInfo ? 
			user = userList.find(item => item.email === userInfo.email)
				:
			user = userList[0]
	, 500) 
	return (
		<Wrapper className='container'>
			<div className='profile-left_block'>
				<h1 className='profile-title'>Личный кабинет</h1>
				<div className='profile-user'>
					<div className='profile-user-avatar'>
						{ user.avatar ?
							<img alt='user-avatar ' src={ user.avatar }/>
								:
							<FontAwesomeIcon icon={ faUser } />
						}
					</div>
					
					<div className='profile-user-details'>
						<span className='profile-user-details-name'>{ user.username || (user.surename && user.name) }</span>
						<span className='profile-user-details-phone'>{ user.phone }</span>
					</div>
				</div>
				
				<div className={ (option === 1) ? 'profile-edit active' : 'profile-edit' } onClick={ (e) => setOption(1) }>
					<FontAwesomeIcon icon={ faPencilAlt } className='profile-edit-icon' />
					<span className='profile-edit-paragraph'>Редактировать данные</span>
				</div>
				
				<div className={ (option === 2) ? 'profile-edit active' : 'profile-edit' } onClick={ (e) => setOption(2) }>
					<FontAwesomeIcon icon={ faKey } className='profile-edit-icon' />
					<span className='profile-edit-paragraph'>Сменить пароль</span>
				</div>
				
				<div className={ (option === 3) ? 'profile-edit active' : 'profile-edit' } onClick={ (e) => setOption(3) }>
					<FontAwesomeIcon icon={ faEye } className='profile-edit-icon' />
					<span className='profile-edit-paragraph'>Вы недавно смотрели</span>
				</div>
				
				{ user.isAdmin ?
					<div className={ (option === 4) ? 'profile-edit active' : 'profile-edit' } onClick={ (e) => setOption(4) }>
						<FontAwesomeIcon icon={ faChessKing } className='profile-edit-icon' />
						<span className='profile-edit-paragraph'>Редактировать</span>
					</div>
						:
					null
				}
			</div>
			<div className='profile-right_block'>
				<h4 className='profile-welcome'>Добро пожаловать { user.name } { user.surename }</h4>
				{ option === 1 ?
					<UpdateDetails userList={ userList } user={ (userList.find(item => item.id === user.id)) } />
						:
					option === 2 ?
						<ResetPassword userList={ userList } user={ (userList.find(item => item.id === user.id)) } />
							:
						option === 3 ?
							<LastViewed />
								:
							<AdminPanel userList={ userList } user={ (userList.find(item => item.id === user.id)) } />
				}
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	margin: 64px auto;

	.profile-left_block {
		width: 25%;
		border-right: 1px solid rgba(0, 0, 0, .08);
	}

	.profile-title {
		line-height: 20px;
    font-size: 24px;
		font-weight: 500;
		margin-bottom: 50px;
	}

	.profile-user,
	.profile-user-detail {
		display: flex;
    flex-direction: column;
    align-items: center;
	}
	
	.profile-user {
    margin-bottom: 36px;
	}

	.profile-user-avatar {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 120px;
    height: 120px;
		flex-shrink: 0;
		background: var(--clr-grey-2);
		border-radius: 50%;
		overflow: hidden;
		margin-bottom: 16px;
	}

	.profile-user-avatar img,
	.profile-user-avatar svg {
		width: 50%;
		height: 50%;
	}
	
	.profile-user-details {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	.profile-user-details-name {
		line-height: 26px;
    font-size: 18px;
		font-weight: 500;
    color: var(--clr-black);
    overflow: hidden;
		margin-bottom: 4px;
	}
	
	.profile-user-details-phone {
    line-height: 20px;
    font-size: 16px;
		font-weight: 500;
    color: var(--clr-gray4);
    margin-bottom: 12px;
	}

	.profile-edit {
		display: flex;
		margin-bottom: 7px;
	}
	
	.profile-edit-icon {
		cursor: pointer;
	}
	
	.profile-edit.active path {
		fill: var(--clr-orange-1);
	}
	
	.profile-edit-paragraph {
		line-height: 14px;
		font-size: 18px;
    margin-bottom: 16px;
    padding: 5px 0 5px 16px;
    cursor: pointer;
	}
	
	.profile-edit.active .profile-edit-paragraph {
		color: var(--clr-orange-1);
	}

	.profile-right_block {
		width: 640px;
		margin: auto;
		padding: 3.75rem 5rem 4.375rem;
	}

	.profile-welcome {
		text-align: center;
		margin-bottom: 20px;
	}
	
	.profile-form-title {
		line-height: 14px;
    font-size: 20px;
		font-weight: 500;
    margin-bottom: 36px;
  }
  
	.profile-form-input,
	.profile-form-select {
		width: 100%;
		height: 3em;
		border-width: 0;
		border-radius: 8px;
		box-shadow: 0 2px 8px hsla(0, 0%, 65.1%, .25);
    font-size: 16px;
    font-weight: 400;
		margin-bottom: 24px;
		padding: 24px;
  }
  
	.profile-form-select {
		padding: 8px 24px;
	}
	
	#button {
		margin-top: 2.5rem;
	}
`;

export default Profile;
