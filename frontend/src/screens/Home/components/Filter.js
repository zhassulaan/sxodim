import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import useDebounce from '../../../useDebounce';
import location from "../../../resources/location.png";
import arrow from "../../../resources/arrow.png";
import search from "../../../resources/search.png";
import close from "../../../resources/close.png";

// const url = 'http://127.0.0.1:8000/api/'

function Filter() {
	// const [data, setData] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');

	// const debounce = useDebounce(searchQuery, 500);

	// useEffect(() => {
	// 	fetchData();
	// }, [debounce]);

	// const fetchData = async() => {
	// 	const endpoint = `${url}/post/?title=${ searchQuery }`
		
	// 	try {
	// 		const response = await fetch(endpoint, {
	// 			method: 'GET',
	// 	});
	// 		const data = await response.json();
	// 		console.log(data);
	// 		setData(data);
	// 	} catch (e) {
	// 		console.log(e);
	// 	}
	// }
			
	return (
		<Wrapper>
			<div className="impression-header">
				<h1 className="impression-title">Давай Сходим
					<ul className="impression-city-list select-city" data-id="select-city">
						<li className="impression-city chip selected">
							<div className="impression-icon">
								<img src={ location } alt="location icon" />
							</div>
							<span>Алматы</span>
							<div className="impression-arrow">
								<img src={ arrow } alt="open arrow" />
							</div>
						</li>
					</ul>
				</h1>

				<div className="impression-searchbar">
					<div className="impression-icon searchbar-icon">
						<img src={ search } alt="search button" className="button" />
					</div>
					<input type="text" name="search" placeholder="Поиск впечатлений" value={ searchQuery } id="search-impression-input" onChange={ (e) => setSearchQuery(e.target.value) } />
					{/* <div className="impression-icon searchbar-button">
						<img src={ close } alt="close button" className="button" />
					</div> */}
				</div>
			</div>

			<div className="impression-calendar swiper-container">
				<div className="swiper-slide">
					<div className="calendar">
						<div className="calendar-month">
							<div className="calendar-month-title">Апрель</div>
							<div className="calendar-days">
								<div className="calendar-day" data-value="2023-04-11">
									<div className="calendar-day-title">Вт</div>
									<div className="calendar-day-value">11</div>
								</div>
								<div className="calendar-day" data-value="2023-04-12">
									<div className="calendar-day-title">Ср</div>
									<div className="calendar-day-value">12</div>
								</div>
								<div className="calendar-day" data-value="2023-04-13">
									<div className="calendar-day-title">Чт</div>
									<div className="calendar-day-value">13</div>
								</div>
								<div className="calendar-day" data-value="2023-04-14">
									<div className="calendar-day-title">Пт</div>
									<div className="calendar-day-value">14</div>
								</div>
								<div className="calendar-day calendar-day-weekend" data-value="2023-04-15">
									<div className="calendar-day-title">Сб</div>
									<div className="calendar-day-value">15</div>
								</div>
								<div className="calendar-day calendar-day-weekend" data-value="2023-04-16">
									<div className="calendar-day-title">Вс</div>
									<div className="calendar-day-value">16</div>
								</div>
								<div className="calendar-day" data-value="2023-04-17">
									<div className="calendar-day-title">Пн</div>
									<div className="calendar-day-value">17</div>
								</div>
								<div className="calendar-day" data-value="2023-04-18">
									<div className="calendar-day-title">Вт</div>
									<div className="calendar-day-value">18</div>
								</div>
								<div className="calendar-day" data-value="2023-04-19">
									<div className="calendar-day-title">Ср</div>
									<div className="calendar-day-value">19</div>
								</div>
								<div className="calendar-day" data-value="2023-04-20">
									<div className="calendar-day-title">Чт</div>
									<div className="calendar-day-value">20</div>
								</div>
								<div className="calendar-day" data-value="2023-04-21">
									<div className="calendar-day-title">Пт</div>
									<div className="calendar-day-value">21</div>
								</div>
								<div className="calendar-day calendar-day-weekend" data-value="2023-04-22">
									<div className="calendar-day-title">Сб</div>
									<div className="calendar-day-value">22</div>
								</div>
								<div className="calendar-day calendar-day-weekend" data-value="2023-04-23">
									<div className="calendar-day-title">Вс</div>
									<div className="calendar-day-value">23</div>
								</div>
								<div className="calendar-day" data-value="2023-04-24">
									<div className="calendar-day-title">Пн</div>
									<div className="calendar-day-value">24</div>
								</div>
								<div className="calendar-day" data-value="2023-04-25">
									<div className="calendar-day-title">Вт</div>
									<div className="calendar-day-value">25</div>
								</div>
								<div className="calendar-day" data-value="2023-04-26">
									<div className="calendar-day-title">Ср</div>
									<div className="calendar-day-value">26</div>
								</div>
								<div className="calendar-day" data-value="2023-04-27">
									<div className="calendar-day-title">Чт</div>
									<div className="calendar-day-value">27</div>
								</div>
								<div className="calendar-day" data-value="2023-04-28">
									<div className="calendar-day-title">Пт</div>
									<div className="calendar-day-value">28</div>
								</div>
								<div className="calendar-day calendar-day-weekend" data-value="2023-04-29">
									<div className="calendar-day-title">Сб</div>
									<div className="calendar-day-value">29</div>
								</div>
								<div className="calendar-day calendar-day-weekend" data-value="2023-04-30">
									<div className="calendar-day-title">Вс</div>
									<div className="calendar-day-value">30</div>
								</div>
							</div>
						</div>
						<div className="calendar-month">
							<div className="calendar-month-title">Май</div>
							<div className="calendar-days">
								<div className="calendar-day" data-value="2023-05-01">
									<div className="calendar-day-title">Пн</div>
									<div className="calendar-day-value">1</div>
								</div>
								<div className="calendar-day" data-value="2023-05-02">
									<div className="calendar-day-title">Вт</div>
									<div className="calendar-day-value">2</div>
								</div>
								<div className="calendar-day" data-value="2023-05-03">
									<div className="calendar-day-title">Ср</div>
									<div className="calendar-day-value">3</div>
								</div>
								<div className="calendar-day" data-value="2023-05-04">
									<div className="calendar-day-title">Чт</div>
									<div className="calendar-day-value">4</div>
								</div>
								<div className="calendar-day" data-value="2023-05-05">
									<div className="calendar-day-title">Пт</div>
									<div className="calendar-day-value">5</div>
								</div>
								<div className="calendar-day calendar-day-weekend" data-value="2023-05-06">
									<div className="calendar-day-title">Сб</div>
									<div className="calendar-day-value">6</div>
								</div>
								<div className="calendar-day calendar-day-weekend" data-value="2023-05-07">
									<div className="calendar-day-title">Вс</div>
									<div className="calendar-day-value">7</div>
								</div>
								<div className="calendar-day" data-value="2023-05-08">
									<div className="calendar-day-title">Пн</div>
									<div className="calendar-day-value">8</div>
								</div>
								<div className="calendar-day" data-value="2023-05-09">
									<div className="calendar-day-title">Вт</div>
									<div className="calendar-day-value">9</div>
								</div>
								<div className="calendar-day" data-value="2023-05-10">
									<div className="calendar-day-title">Ср</div>
									<div className="calendar-day-value">10</div>
								</div>
								<div className="calendar-day" data-value="2023-05-11">
									<div className="calendar-day-title">Чт</div>
									<div className="calendar-day-value">11</div>
								</div>
								<div className="calendar-day" data-value="2023-05-12">
									<div className="calendar-day-title">Пт</div>
									<div className="calendar-day-value">12</div>
								</div>
								<div className="calendar-day calendar-day-weekend" data-value="2023-05-13">
									<div className="calendar-day-title">Сб</div>
									<div className="calendar-day-value">13</div>
								</div>
								<div className="calendar-day calendar-day-weekend" data-value="2023-05-14">
									<div className="calendar-day-title">Вс</div>
									<div className="calendar-day-value">14</div>
								</div>
								<div className="calendar-day" data-value="2023-05-15">
									<div className="calendar-day-title">Пн</div>
									<div className="calendar-day-value">15</div>
								</div>
								<div className="calendar-day" data-value="2023-05-16">
									<div className="calendar-day-title">Вт</div>
									<div className="calendar-day-value">16</div>
								</div>
								<div className="calendar-day" data-value="2023-05-17">
									<div className="calendar-day-title">Ср</div>
									<div className="calendar-day-value">17</div>
								</div>
								<div className="calendar-day" data-value="2023-05-18">
									<div className="calendar-day-title">Чт</div>
									<div className="calendar-day-value">18</div>
								</div>
								<div className="calendar-day" data-value="2023-05-19">
									<div className="calendar-day-title">Пт</div>
									<div className="calendar-day-value">19</div>
								</div>
								<div className="calendar-day calendar-day-weekend" data-value="2023-05-20">
									<div className="calendar-day-title">Сб</div>
									<div className="calendar-day-value">20</div>
								</div>
								<div className="calendar-day calendar-day-weekend" data-value="2023-05-21">
									<div className="calendar-day-title">Вс</div>
									<div className="calendar-day-value">21</div>
								</div>
								<div className="calendar-day" data-value="2023-05-22">
									<div className="calendar-day-title">Пн</div>
									<div className="calendar-day-value">22</div>
								</div>
								<div className="calendar-day" data-value="2023-05-23">
									<div className="calendar-day-title">Вт</div>
									<div className="calendar-day-value">23</div>
								</div>
								<div className="calendar-day" data-value="2023-05-24">
									<div className="calendar-day-title">Ср</div>
									<div className="calendar-day-value">24</div>
								</div>
								<div className="calendar-day" data-value="2023-05-25">
									<div className="calendar-day-title">Чт</div>
									<div className="calendar-day-value">25</div>
								</div>
								<div className="calendar-day" data-value="2023-05-26">
									<div className="calendar-day-title">Пт</div>
									<div className="calendar-day-value">26</div>
								</div>
								<div className="calendar-day calendar-day-weekend" data-value="2023-05-27">
									<div className="calendar-day-title">Сб</div>
									<div className="calendar-day-value">27</div>
								</div>
								<div className="calendar-day calendar-day-weekend" data-value="2023-05-28">
									<div className="calendar-day-title">Вс</div>
									<div className="calendar-day-value">28</div>
								</div>
								<div className="calendar-day" data-value="2023-05-29">
									<div className="calendar-day-title">Пн</div>
									<div className="calendar-day-value">29</div>
								</div>
								<div className="calendar-day" data-value="2023-05-30">
									<div className="calendar-day-title">Вт</div>
									<div className="calendar-day-value">30</div>
								</div>
								<div className="calendar-day" data-value="2023-05-31">
									<div className="calendar-day-title">Ср</div>
									<div className="calendar-day-value">31</div>
								</div>
							</div>
						</div>
						<div className="calendar-month">
							<div className="calendar-month-title">Июнь</div>
							<div className="calendar-days">
								<div className="calendar-day" data-value="2023-06-01">
									<div className="calendar-day-title">Чт</div>
									<div className="calendar-day-value">1</div>
								</div>
								<div className="calendar-day" data-value="2023-06-02">
									<div className="calendar-day-title">Пт</div>
									<div className="calendar-day-value">2</div>
								</div>
								<div className="calendar-day calendar-day-weekend" data-value="2023-06-03">
									<div className="calendar-day-title">Сб</div>
									<div className="calendar-day-value">3</div>
								</div>
								<div className="calendar-day calendar-day-weekend" data-value="2023-06-04">
									<div className="calendar-day-title">Вс</div>
									<div className="calendar-day-value">4</div>
								</div>
								<div className="calendar-day" data-value="2023-06-05">
									<div className="calendar-day-title">Пн</div>
									<div className="calendar-day-value">5</div>
								</div>
								<div className="calendar-day" data-value="2023-06-06">
									<div className="calendar-day-title">Вт</div>
									<div className="calendar-day-value">6</div>
								</div>
								<div className="calendar-day" data-value="2023-06-07">
									<div className="calendar-day-title">Ср</div>
									<div className="calendar-day-value">7</div>
								</div>
								<div className="calendar-day" data-value="2023-06-08">
									<div className="calendar-day-title">Чт</div>
									<div className="calendar-day-value">8</div>
								</div>
								<div className="calendar-day" data-value="2023-06-09">
									<div className="calendar-day-title">Пт</div>
									<div className="calendar-day-value">9</div>
								</div>
								<div className="calendar-day calendar-day-weekend" data-value="2023-06-10">
									<div className="calendar-day-title">Сб</div>
									<div className="calendar-day-value">10</div>
								</div>
								<div className="calendar-day calendar-day-weekend" data-value="2023-06-11">
									<div className="calendar-day-title">Вс</div>
									<div className="calendar-day-value">11</div>
								</div>
								<div className="calendar-day" data-value="2023-06-12">
									<div className="calendar-day-title">Пн</div>
									<div className="calendar-day-value">12</div>
								</div>
								<div className="calendar-day" data-value="2023-06-13">
									<div className="calendar-day-title">Вт</div>
									<div className="calendar-day-value">13</div>
								</div>
								<div className="calendar-day" data-value="2023-06-14">
									<div className="calendar-day-title">Ср</div>
									<div className="calendar-day-value">14</div>
								</div>
								<div className="calendar-day" data-value="2023-06-15">
									<div className="calendar-day-title">Чт</div>
									<div className="calendar-day-value">15</div>
								</div>
								<div className="calendar-day" data-value="2023-06-16">
									<div className="calendar-day-title">Пт</div>
									<div className="calendar-day-value">16</div>
								</div>
								<div className="calendar-day calendar-day-weekend" data-value="2023-06-17">
									<div className="calendar-day-title">Сб</div>
									<div className="calendar-day-value">17</div>
								</div>
								<div className="calendar-day calendar-day-weekend" data-value="2023-06-18">
									<div className="calendar-day-title">Вс</div>
									<div className="calendar-day-value">18</div>
								</div>
								<div className="calendar-day" data-value="2023-06-19">
									<div className="calendar-day-title">Пн</div>
									<div className="calendar-day-value">19</div>
								</div>
								<div className="calendar-day" data-value="2023-06-20">
									<div className="calendar-day-title">Вт</div>
									<div className="calendar-day-value">20</div>
								</div>
								<div className="calendar-day" data-value="2023-06-21">
									<div className="calendar-day-title">Ср</div>
									<div className="calendar-day-value">21</div>
								</div>
								<div className="calendar-day" data-value="2023-06-22">
									<div className="calendar-day-title">Чт</div>
									<div className="calendar-day-value">22</div>
								</div>
								<div className="calendar-day" data-value="2023-06-23">
									<div className="calendar-day-title">Пт</div>
									<div className="calendar-day-value">23</div>
								</div>
								<div className="calendar-day calendar-day-weekend" data-value="2023-06-24">
									<div className="calendar-day-title">Сб</div>
									<div className="calendar-day-value">24</div>
								</div>
								<div className="calendar-day calendar-day-weekend" data-value="2023-06-25">
									<div className="calendar-day-title">Вс</div>
									<div className="calendar-day-value">25</div>
								</div>
								<div className="calendar-day" data-value="2023-06-26">
									<div className="calendar-day-title">Пн</div>
									<div className="calendar-day-value">26</div>
								</div>
								<div className="calendar-day" data-value="2023-06-27">
									<div className="calendar-day-title">Вт</div>
									<div className="calendar-day-value">27</div>
								</div>
								<div className="calendar-day" data-value="2023-06-28">
									<div className="calendar-day-title">Ср</div>
									<div className="calendar-day-value">28</div>
								</div>
								<div className="calendar-day" data-value="2023-06-29">
									<div className="calendar-day-title">Чт</div>
									<div className="calendar-day-value">29</div>
								</div>
								<div className="calendar-day" data-value="2023-06-30">
									<div className="calendar-day-title">Пт</div>
									<div className="calendar-day-value">30</div>
								</div>
							</div>
						</div>
						<div className="calendar-month">
							<div className="calendar-month-title">Июль</div>
							<div className="calendar-days">
								<div className="calendar-day calendar-day-weekend" data-value="2023-07-01">
									<div className="calendar-day-title">Сб</div>
									<div className="calendar-day-value">1</div>
								</div>
								<div className="calendar-day calendar-day-weekend" data-value="2023-07-02">
									<div className="calendar-day-title">Вс</div>
									<div className="calendar-day-value">2</div>
								</div>
								<div className="calendar-day" data-value="2023-07-03">
									<div className="calendar-day-title">Пн</div>
									<div className="calendar-day-value">3</div>
								</div>
								<div className="calendar-day" data-value="2023-07-04">
									<div className="calendar-day-title">Вт</div>
									<div className="calendar-day-value">4</div>
								</div>
								<div className="calendar-day" data-value="2023-07-05">
									<div className="calendar-day-title">Ср</div>
									<div className="calendar-day-value">5</div>
								</div>
								<div className="calendar-day" data-value="2023-07-06">
									<div className="calendar-day-title">Чт</div>
									<div className="calendar-day-value">6</div>
								</div>
								<div className="calendar-day" data-value="2023-07-07">
									<div className="calendar-day-title">Пт</div>
									<div className="calendar-day-value">7</div>
								</div>
								<div className="calendar-day calendar-day-weekend" data-value="2023-07-08">
									<div className="calendar-day-title">Сб</div>
									<div className="calendar-day-value">8</div>
								</div>
								<div className="calendar-day calendar-day-weekend" data-value="2023-07-09">
									<div className="calendar-day-title">Вс</div>
									<div className="calendar-day-value">9</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		
			<div className="impression-filters">
				<div className="impression-filter chip active">Все</div>
				<div className="impression-filter chip">
					<span>Тип</span>
					<div className="impression-arrow">
						<img src={ arrow } alt="open arrow" />
					</div>
				</div>
				<div className="impression-filter chip">
					<span>Категории</span>
					<div className="impression-arrow">
						<img src={ arrow } alt="open arrow" />
					</div>
				</div>
				<div className="impression-filter chip">Только билеты</div>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	position: relative;
	max-width: 100%;
  margin-top: 8px;
  padding: 0 16px;

	.impression-header {
		display: flex;
	}

	.impression-title {
    display: flex;
    align-items: center;
		width: 100%;
		height: 40px;
    font-size: 32px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.865);
	}

	.impression-city-list {
		margin-left: 16px;
	}
	
	.impression-city {
		font-size: 14px;
		padding: 8px 4px;
	}

	.impression-icon,
	.impression-arrow {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.impression-icon {
		width: 24px;
		height: 24px;
		margin-right: 4px;
	}
	
	.impression-arrow {
		width: 16px;
		height: 16px;
	}
	
	.impression-searchbar {
		display: flex;
    align-items: center;
		height: 100%;
    border: 1px solid var(--clr-grey-2);
    border-radius: 4px;
		background: var(--clr-white);
		padding: 0 12px;
	}
	
	.searchbar-icon {
		margin-right: 0;
	}

	#search-impression-input {
		width: 391px;
		height: 40px;
		border: none;
		margin-left: 7px;
		padding: 12px 0;
	}

	#search-impression-input:focus{
    outline: none;
	}

	.swiper-container {
		overflow: hidden;
    z-index: 1;
	}

	.impression-calendar {
		display: flex;
    align-items: center;
		margin-top: 24px;
	}
	
	.calendar,
	.calendar-days {
		display: flex;
	}
	
	.calendar-month-title {
		line-height: 16px;
		font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.2px;
    color: rgba(0, 0, 0, 0.865);
    margin-bottom: 4px;
	}

	.calendar-day {
		position: relative;
		display: flex;
		flex-wrap: wrap;
		width: 40px;
		height: 50px;
		justify-content: center;
		padding: 4px 0;
		cursor: pointer;
	}

	.calendar-day-weekend .calendar-day-value {
    color: var(--clr-orange-2);
	}

	.calendar-day-title {
    width: 100%;
    text-align: center;
    line-height: 18px;
		font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    color: var(--clr-grey-3);
    margin-bottom: 2px;
	}

	.calendar-day-value {
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 24px;
		font-size: 16px;
    font-weight: 500;
    border-radius: 50%;
	}
	
	.impression-filters {
    display: flex;
    flex-wrap: wrap;
		margin-top: 16px;
	}
	
	.impression-filter {
    width: auto;
    margin: 0 4px 4px 0;
		padding: 9px 8px;
	}

	.impression-filter.active {
    color: var(--clr-white);
    background: var(--clr-orange-3);
	}
`;

export default Filter;
