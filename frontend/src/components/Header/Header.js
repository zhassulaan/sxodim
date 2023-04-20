import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { logout } from "../../actions/userActions";
import Login from "../../modals/Login";
import Register from "../../modals/Register";
import logo from "../../resources/logo.png";
import location from "../../resources/location.png";
import arrow from "../../resources/arrow.png";
import user from "../../resources/user.png";

function Header() {
	const [open, setOpen] = useState(false);
	const [type, setType] = useState('login');

	const dispatch = useDispatch();

	const userLogin = useSelector(state => state.userLogin);
	const { userInfo } = userLogin;

	const logoutHandler = () => {
		dispatch(logout());
		setOpen(false);
	}

	return (
		<Wrapper>
			<div className="header-menu">
				<div className="header-menu_left">
					<Link to="/">
						<img src={ logo } alt="Давай Сходим!" className="header-menu-logo button" />
					</Link>
          <ul className="header-menu-list" data-id="select-city">
            <li className="header-menu-item chip selected">
							<div className="header-menu-icon">
								<img src={ location } alt="location icon" />
							</div>
							<Link to="https://sxodim.com/almaty">Алматы</Link>
							<div className="header-menu-arrow">
								<img src={ arrow } alt="open arrow" />
							</div>
						</li>
            {/* <li class="header-menu-item">
							<Link to="https://sxodim.com/astana">Астана</Link>
						</li>
            <li class="header-menu-item">
							<Link to="https://sxodim.com/shymkent">Шымкент</Link>
						</li>
            <li class="header-menu-item">
							<Link to="https://sxodim.com/bishkek">Бишкек</Link>
						</li>
            <li class="header-menu-item">
							<Link to="https://sxodim.com/turkistan">Туркестан</Link>
						</li>
            <li class="header-menu-item">
							<Link to="https://sxodim.com/karaganda">Караганда</Link>
						</li>
            <li class="header-menu-item">
							<Link to="https://sxodim.com/aktobe">Актобе</Link>
						</li> */}
          </ul>
				</div>

				<div className="header-menu_right">
					<img src={ user } alt="user icon" className="header-menu-user button" onClick={ (e) => setOpen(!open) } />
					{	open ?
							userInfo ?
								<ul className="header-menu-user_info">
									<li className="header-menu-user_info-title">{ userInfo.username }</li>
									<li className="header-menu-user_info-item">Профиль</li>
									<li className="header-menu-user_info-item">Редактироавть</li>
									<li className="header-menu-user_info-item"><span onClick={ logoutHandler }>Выйти</span></li>
								</ul>
									:
								<div>
									{ type === 'login' ? <Login event={ setType } /> : null}
									{ type === 'register' ? <Register event={ setType } /> : null}
									<div className="dark" onClick={ (e) => setOpen(false) }></div>
								</div>
								:
							null
					}
				</div>
			</div>
			
		</Wrapper>
	);
}

const Wrapper = styled.header`
	.header-menu {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 4em;
		padding: .75em 1em;
	}

	.header-menu_left,
	.header-menu_right {
		height: 100%;
	}

	.header-menu_left {
		display: flex;
	}

	.header-menu-logo {
		width: 4.570625em;
	}

	.header-menu-item {
		font-size: 14px;
		color: rgba(0, 0, 0, 0.865);
		background: var(--clr-grey1);
		padding: 8px 4px;
	}

	.header-menu-icon,
	.header-menu-arrow {
		display: flex;
    align-items: center;
    justify-content: center;
	}

	.header-menu-icon {
		width: 24px;
		height: 24px;
		margin-right: 4px;
	}

	.header-menu-arrow {
		width: 16px;
		height: 16px;
	}

	.header-menu-user {
		width: 1.25em;
		padding: .625em 0;
	}

	.header-menu-user_info {
		position: absolute;
		right: 1em;
		background: var(--clr-white);
		border: 1px solid var(--clr-grey3);
		border-radius: 8px;
		text-align: center;
		padding: 1em;
		z-index: 3;
	}

	.header-menu-user_info-title {
		font-size: 14px;
		border-bottom: 1px solid var(--clr-black);
		margin-bottom: 1em;
	}
	
	.header-menu-user_info-item {
		font-size: 12px;
		margin-bottom: .5em;
		cursor: pointer;
	}

	.dark {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		z-index: 3;
		cursor: pointer;
	}
`;

export default Header;
