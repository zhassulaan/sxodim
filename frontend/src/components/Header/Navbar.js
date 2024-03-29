import React from 'react';
import styled from 'styled-components';
import search from '../../resources/search.png';
import close from '../../resources/close.png';
import cert from '../../resources/cert.png';
import tickets from '../../resources/tickets_black.png';
import journal from '../../resources/journal.png';
import afisha from '../../resources/afisha_black.png';
import places from '../../resources/places.png';

function Navbar() {
	return (
		<Wrapper>
			<div className='nav-searchbar'>
				<div className='nav-icon searchbar-button'>
					<img src={ search } alt='search button' className='button' />
				</div>
				<input type='search' placeholder='Поиск' data-type='search' id='search-input' data-filter='' />
				{/* <div className='nav-icon searchbar-button'>
					<img src={ close } alt='close button' className='button' />
				</div> */}
			</div>

			<ul className='nav-menu'>
				<li className='nav-menu-item'>
					<div className='nav-menu-icon nav-icon'>
						<img src={ cert } alt='cert icon' className='horizontal_icon' />
					</div>
					<span className='nav-menu-text'>Сертификаты</span>
				</li>
				<li className='nav-menu-item'>
					<div className='nav-menu-icon nav-icon'>
						<img src={ tickets } alt='tickets icon' className='horizontal_icon' />
					</div>
					<span className='nav-menu-text'>Билеты</span>
				</li>
				<li className='nav-menu-item'>
					<div className='nav-menu-icon nav-icon'>
						<img src={ journal } alt='journal icon' className='horizontal_icon' />
					</div>
					<span className='nav-menu-text'>Журнал</span>
				</li>
				<li className='nav-menu-item'>
					<div className='nav-menu-icon nav-icon'>
						<img src={ afisha } alt='afisha icon' className='vertical_icon' />
					</div>
					<span className='nav-menu-text'>Афиша</span>
				</li>
				<li className='nav-menu-item'>
					<div className='nav-menu-icon nav-icon'>
						<img src={ places } alt='places icon' className='vertical_icon' />
					</div>
					<span className='nav-menu-text'>Места</span>
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
	background: var(--clr-grey-1);
	padding: .5em 1em;

	.nav-searchbar {
		height: 2.625em;
		display: flex;
    align-items: center;
    border: 1px solid var(--clr-grey-2);
    border-radius: .25em;
		background: var(--clr-white);
		padding:  0 .75em;
	}

	.nav-icon {
		display: flex;
    align-items: center;
    justify-content: center;
		height: 1.5em;
		width: 1.5em;
	}

	#search-input {
		width: 327px;
		height: 40px;
		border: none;
		margin-left: 7px;
		padding: 12px 0;
	}

	#search-input:focus{
    outline: none;
	}

	.searchbar-button {
		width: 16px;
		height: 16px;
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
    color: var(--clr-orange-1);
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
