import React from "react";
import styled from "styled-components";
import logo from "../../resources/logo.png";
import location from "../../resources/location.png";
import arrow from "../../resources/arrow.png";
import user from "../../resources/user.png";

function Header() {
	return (
		<Wrapper>
			<div className="header-menu">
				<div className="header-menu_left">
					<img src={ logo } alt="Давай Сходим!" className="header-menu-logo button" />
          <ul class="header-menu-list" data-id="select-city">
            <li class="header-menu-item selected">
							<div className="header-menu-icon">
								<img src={ location } alt="location icon" />
							</div>
							<a href="https://sxodim.com/almaty">Алматы</a>
							<div className="header-menu-arrow">
								<img src={ arrow } alt="open arrow" />
							</div>
						</li>
            {/* <li class="header-menu-item">
							<a href="https://sxodim.com/astana">Астана</a>
						</li>
            <li class="header-menu-item">
							<a href="https://sxodim.com/shymkent">Шымкент</a>
						</li>
            <li class="header-menu-item">
							<a href="https://sxodim.com/bishkek">Бишкек</a>
						</li>
            <li class="header-menu-item">
							<a href="https://sxodim.com/turkistan">Туркестан</a>
						</li>
            <li class="header-menu-item">
							<a href="https://sxodim.com/karaganda">Караганда</a>
						</li>
            <li class="header-menu-item">
							<a href="https://sxodim.com/aktobe">Актобе</a>
						</li> */}
          </ul>
				</div>

				<div className="header-menu_right">
					<img src={ user } alt="user icon" className="header-menu-user button" />
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

	.header-menu-list {
		display: flex;
    align-items: center;
		border-radius: .25em;
    color: rgba(0, 0, 0, 0.865);
		background: var(--clr-grey1);
		margin-left: 1em;
		padding: .5em .25em;
    cursor: pointer;
	}

	.header-menu-item {
		display: flex;
		align-items: center;
		font-size: 14px;
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
`;

export default Header;
