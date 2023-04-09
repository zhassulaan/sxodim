import React from "react";
import styled from 'styled-components';
import search from "../../resources/search.png";
import close from "../../resources/close.png";
import certificates from "../../resources/certificates.png";
import tickets from "../../resources/tickets.png";
import magazine from "../../resources/magazine.png";
import poster from "../../resources/poster.png";
import places from "../../resources/places.png";

function Navbar() {
	return (
		<Wrapper>
			<div className="nav-searchbar">
				<div className="nav-searchbar-icon">
					<img src={ search } alt="search button" className="button" />
				</div>
				<input type="text" className="nav-searchbar-textbox" />
				<div className="nav-searchbar-button">
					<img src={ close } alt="close button" className="button" />
				</div>
			</div>

			<ul className="nav-menu">
				<li className="nav-menu-item">
					<div className="nav-menu-icon">
						<img src={ certificates } alt="search button" className="horizontal_icon" />
					</div>
					<span className="nav-menu-text">Сертификаты</span>
				</li>
				<li className="nav-menu-item">
					<div className="nav-menu-icon">
						<img src={ tickets } alt="search button" className="horizontal_icon" />
					</div>
					<span className="nav-menu-text">Билеты</span>
				</li>
				<li className="nav-menu-item">
					<div className="nav-menu-icon">
						<img src={ magazine } alt="search button" className="horizontal_icon" />
					</div>
					<span className="nav-menu-text">Журнал</span>
				</li>
				<li className="nav-menu-item">
					<div className="nav-menu-icon">
						<img src={ poster } alt="search button" className="vertical_icon" />
					</div>
					<span className="nav-menu-text">Афиша</span>
				</li>
				<li className="nav-menu-item">
					<div className="nav-menu-icon">
						<img src={ places } alt="search button" className="vertical_icon" />
					</div>
					<span className="nav-menu-text">Места</span>
				</li>
			</ul>
		</Wrapper>
	);
}

const Wrapper = styled.nav`
	display: flex;
	align-items: center;
	width: 100%;
	height: 3.75em;
	background: var(--clr-grey1);
	padding: .5em 1em;

	.nav-searchbar {
		height: 2.625em;
		display: flex;
    align-items: center;
    border: 1px solid var(--clr-grey2);
    border-radius: .25em;
		background: var(--clr-white);
		padding:  0 .75em;
	}

	.nav-searchbar-icon,
	.nav-menu-icon {
		display: flex;
    align-items: center;
    justify-content: center;
		height: 1.5em;
		width: 1.5em;
	}
	
	.nav-searchbar-icon img {
		height: 17.49px;
		width: 17.49px;
	}

	.nav-searchbar-textbox {
		width: 311px;
		height: 40px;
		border: none;
		margin-left: 7px;
		padding: 12px 0;
	}

	.nav-searchbar-textbox:focus{
    outline: none;
	}

	.nav-searchbar-button {
		width: 16px;
		height: 16px;
	}
	
	.nav-searchbar-button img {
		height: 100%;
	}
	
	.nav-menu {
		display: flex;
		justify-content: space-between;
		width: 100%;
		margin: 0 2.5em 0 1em;
		overflow: scroll;
	}

	.nav-menu::-webkit-scrollbar {
    width: 0;
    height: 0;
    background: transparent;
}
	
	.nav-menu-item {
		display: flex;
		align-items: center;
		margin-right: .5em;
		padding: .625em .5em;
		cursor: pointer;
	}

	.nav-menu-text {
    line-height: 20px;
		font-size: 14px;
		transition: var(--transition);
	}
	
	.nav-menu-item:hover .nav-menu-text {
    color: var(--clr-orange);
	}
	
	.nav-menu-icon {
		margin: 0 .375em 0 .125em;
	}

	.nav-menu-icon .horizontal_icon {
		width: 1.25em;
	}
	
	.nav-menu-icon .vertical_icon {
		height: 1.25em;
	}
`;

export default Navbar;