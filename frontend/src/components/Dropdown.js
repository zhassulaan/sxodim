import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBrowserHistory } from 'history';
import styled from 'styled-components';
import { logout } from '../actions/userActions';

function Dropdown({ action }) {
	const dispatch = useDispatch();
	const history = createBrowserHistory();

	const userLogin = useSelector(state => state.userLogin);
	const { userInfo } = userLogin;

	const logoutHandler = () => {
		dispatch(logout());
		history.push('/');
	}

	return (
		<Wrapper className='profile_menu' onMouseEnter={ () => action(true) } onMouseLeave={ () => action(false)}>
			<li className='profile_menu-user'>
				<a href='/profile' className='profile_menu-user-avatar'>
					<img width='64' height='64' alt='user-avatar' src={ userInfo.image }/>
				</a>
				<a href='/profile' className='profile_menu-user-details'>
					<p className='profile_menu-user-details-name'>
						{ userInfo.name }
					</p>
					<p className='profile_menu-user-details-phone'>
						{ userInfo.phone }
					</p>
					<p className='profile_menu-user-details-profile_link'>
						Личные данные
					</p>
				</a>
			</li>
			<li className='profile_menu-items'>
				<a className='profile_menu-item' href='/profile#mycards'>
					<span className='profile_menu-icon'></span>
					<span className='profile_menu-title'>Способы оплаты</span>
				</a>
				<a className='profile_menu-item' href='/favorites'>
					<span className='profile_menu-icon'></span>
					<span className='profile_menu-title'>Избранное</span>
				</a>
				<a className='profile_menu-item' href='/profile#discount'>
					<span className='profile_menu-icon'></span>
					<span className='profile_menu-title'>Скидка покупателя</span>
					<b className='profile-menu__sale'>{ userInfo.discount }</b>
				</a>
				<a className='profile_menu-item' href='/myorders'>
					<span className='profile_menu-icon'></span>
					<span className='profile_menu-title'>Покупки</span>
				</a>
			</li>
			<li className='profile_menu-links'>
				<a className='profile_menu-link' href='/term-of-use'>Ползовательское соглашение</a>
				<a className='profile_menu-link' href='/return-conditions'>Условия возврата</a>
				<a className='profile_menu-link' href='/my-refunds'>Возвраты</a>
				<a className='profile_menu-link' href='/communications'>Отзывы и вопросы</a>
			</li>
			<li className='profile_menu-footer'>
				<p className='profile_menu-link' id='logout' onClick={ logoutHandler }>Выйти</p>
			</li>
		</Wrapper>
	);
}

const Wrapper = styled.ul`
	position: absolute;
	right: 1em;
	background: var(--clr-white);
	border-radius: 8px;
	box-shadow: 0 0 20px rgba(0,0,0,.1);
	padding: 20px 24px 24px;
	z-index: 3;

	.profile_menu-user {
		display: flex;
	}
	
	.profile_menu-user-avatar {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 64px;
		height: 64px;
		flex-shrink: 0;
		border-radius: 50%;
		overflow: hidden;
		margin-right: 16px;
	}

	.profile_menu-user-details {
		width: calc(100% - 80px);
	}

	.profile_menu-user-details-name {
		font-size: 16px;
		line-height: 22px;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		transition: color .3s ease 0s;
		color: #242424;
		font-weight: 700;
		max-width: calc(100% - 36px);
		margin: 0 0 2px;
	}
	
	.profile_menu-user-details-phone {
		font-size: 14px;
    line-height: 20px;
    color: #868695;
    margin: 0 0 2px;
	}

	.profile_menu-user-details-profile_link {
		font-size: 14px;
    line-height: 20px;
    color: var(--clr-orange-1);
    font-weight: 600;
	}

	.profile_menu-items,
	.profile_menu-links {
		display: flex;
		flex-direction: column;
		padding: 24px 0;
	}

	.profile_menu-links	{
		border-top: 1px solid #e8e8f0;
	}

	.profile_menu-item,
	.profile_menu-link {
		background-color: transparent;
    cursor: pointer;
    color: #242424;
    border-color: transparent;
    font-size: 16px;
    line-height: 22px;
    display: flex;
    align-items: center;
		margin-top: 16px;
	}

	.profile_menu-link {
		margin-top: 12px;
	}
	
	.profile_menu-item:first-child,
	.profile_menu-link:first-child {
		margin-top: 0;
	}
	
	.profile_menu-icon {
		display: inline-block;
		vertical-align: middle;
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
		width: 24px;
		height: 24px;
		flex-shrink: 0;
		margin: 0 16px 0 0;
	}

	#logout {
		color: var(--clr-grey4);    
	}
`;

export default Dropdown;
