import React from "react";
import styled from 'styled-components';
import location from "../../resources/location.png";
import arrow from "../../resources/arrow.png";
import search from "../../resources/search.png";
import close from "../../resources/close.png";

function Impresions() {
	return (
		<Wrapper>
			<div className="impression-filters">
				<div class="impression-filters-top">
					<h1 class="page-title">Давай Сходим
						<ul class="impression-city-list select-city" data-id="select-city">
							<li class="impression-city selected">
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
						<input type="search" placeholder="Поиск впечатлений" data-type="search" id="search-impression-input" data-filter="" />
						{/* <div className="impression-icon searchbar-button">
							<img src={ close } alt="close button" className="button" />
						</div> */}
					</div>
				</div>
				<div className="impression-calendar swiper-container">
					<div class="swiper-slide">
						<div class="calendar">
							<div class="calendar-month">
								<div class="calendar-month-title">Апрель</div>
								<div class="calendar-days">
                  <div class="calendar-day" data-value="2023-04-11">
                    <div class="calendar-day-title">Вт</div>
                    <div class="calendar-day-value">11</div>
                  </div>
                  <div class="calendar-day" data-value="2023-04-12">
                    <div class="calendar-day-title">Ср</div>
                    <div class="calendar-day-value">12</div>
                  </div>
                  <div class="calendar-day" data-value="2023-04-13">
                    <div class="calendar-day-title">Чт</div>
                    <div class="calendar-day-value">13</div>
                  </div>
                  <div class="calendar-day" data-value="2023-04-14">
                    <div class="calendar-day-title">Пт</div>
                    <div class="calendar-day-value">14</div>
                  </div>
                  <div class="calendar-day calendar-day-weekend" data-value="2023-04-15">
                    <div class="calendar-day-title">Сб</div>
                    <div class="calendar-day-value">15</div>
                  </div>
                  <div class="calendar-day calendar-day-weekend" data-value="2023-04-16">
                    <div class="calendar-day-title">Вс</div>
                    <div class="calendar-day-value">16</div>
                  </div>
                  <div class="calendar-day" data-value="2023-04-17">
                    <div class="calendar-day-title">Пн</div>
                    <div class="calendar-day-value">17</div>
                  </div>
                  <div class="calendar-day" data-value="2023-04-18">
                    <div class="calendar-day-title">Вт</div>
                    <div class="calendar-day-value">18</div>
                  </div>
                  <div class="calendar-day" data-value="2023-04-19">
                    <div class="calendar-day-title">Ср</div>
                    <div class="calendar-day-value">19</div>
                  </div>
                  <div class="calendar-day" data-value="2023-04-20">
                    <div class="calendar-day-title">Чт</div>
                    <div class="calendar-day-value">20</div>
                  </div>
                  <div class="calendar-day" data-value="2023-04-21">
                    <div class="calendar-day-title">Пт</div>
                    <div class="calendar-day-value">21</div>
                  </div>
                  <div class="calendar-day calendar-day-weekend" data-value="2023-04-22">
                    <div class="calendar-day-title">Сб</div>
                    <div class="calendar-day-value">22</div>
                  </div>
                  <div class="calendar-day calendar-day-weekend" data-value="2023-04-23">
                    <div class="calendar-day-title">Вс</div>
                    <div class="calendar-day-value">23</div>
                  </div>
                  <div class="calendar-day" data-value="2023-04-24">
                    <div class="calendar-day-title">Пн</div>
                    <div class="calendar-day-value">24</div>
                  </div>
                  <div class="calendar-day" data-value="2023-04-25">
                    <div class="calendar-day-title">Вт</div>
                    <div class="calendar-day-value">25</div>
                  </div>
                  <div class="calendar-day" data-value="2023-04-26">
                    <div class="calendar-day-title">Ср</div>
                    <div class="calendar-day-value">26</div>
                  </div>
                  <div class="calendar-day" data-value="2023-04-27">
                    <div class="calendar-day-title">Чт</div>
                    <div class="calendar-day-value">27</div>
                  </div>
                  <div class="calendar-day" data-value="2023-04-28">
                    <div class="calendar-day-title">Пт</div>
                    <div class="calendar-day-value">28</div>
                  </div>
                  <div class="calendar-day calendar-day-weekend" data-value="2023-04-29">
                    <div class="calendar-day-title">Сб</div>
                    <div class="calendar-day-value">29</div>
                  </div>
                  <div class="calendar-day calendar-day-weekend" data-value="2023-04-30">
                    <div class="calendar-day-title">Вс</div>
                    <div class="calendar-day-value">30</div>
                  </div>
                </div>
							</div>
							<div class="calendar-month">
            		<div class="calendar-month-title">Май</div>
								<div class="calendar-days">
									<div class="calendar-day" data-value="2023-05-01">
										<div class="calendar-day-title">Пн</div>
										<div class="calendar-day-value">1</div>
									</div>
									<div class="calendar-day" data-value="2023-05-02">
										<div class="calendar-day-title">Вт</div>
										<div class="calendar-day-value">2</div>
									</div>
									<div class="calendar-day" data-value="2023-05-03">
										<div class="calendar-day-title">Ср</div>
										<div class="calendar-day-value">3</div>
									</div>
									<div class="calendar-day" data-value="2023-05-04">
										<div class="calendar-day-title">Чт</div>
										<div class="calendar-day-value">4</div>
									</div>
									<div class="calendar-day" data-value="2023-05-05">
										<div class="calendar-day-title">Пт</div>
										<div class="calendar-day-value">5</div>
									</div>
									<div class="calendar-day calendar-day-weekend" data-value="2023-05-06">
										<div class="calendar-day-title">Сб</div>
										<div class="calendar-day-value">6</div>
									</div>
									<div class="calendar-day calendar-day-weekend" data-value="2023-05-07">
										<div class="calendar-day-title">Вс</div>
										<div class="calendar-day-value">7</div>
									</div>
									<div class="calendar-day" data-value="2023-05-08">
										<div class="calendar-day-title">Пн</div>
										<div class="calendar-day-value">8</div>
									</div>
									<div class="calendar-day" data-value="2023-05-09">
										<div class="calendar-day-title">Вт</div>
										<div class="calendar-day-value">9</div>
									</div>
									<div class="calendar-day" data-value="2023-05-10">
										<div class="calendar-day-title">Ср</div>
										<div class="calendar-day-value">10</div>
									</div>
									<div class="calendar-day" data-value="2023-05-11">
										<div class="calendar-day-title">Чт</div>
										<div class="calendar-day-value">11</div>
									</div>
									<div class="calendar-day" data-value="2023-05-12">
										<div class="calendar-day-title">Пт</div>
										<div class="calendar-day-value">12</div>
									</div>
									<div class="calendar-day calendar-day-weekend" data-value="2023-05-13">
										<div class="calendar-day-title">Сб</div>
										<div class="calendar-day-value">13</div>
									</div>
									<div class="calendar-day calendar-day-weekend" data-value="2023-05-14">
										<div class="calendar-day-title">Вс</div>
										<div class="calendar-day-value">14</div>
									</div>
									<div class="calendar-day" data-value="2023-05-15">
										<div class="calendar-day-title">Пн</div>
										<div class="calendar-day-value">15</div>
									</div>
									<div class="calendar-day" data-value="2023-05-16">
										<div class="calendar-day-title">Вт</div>
										<div class="calendar-day-value">16</div>
									</div>
									<div class="calendar-day" data-value="2023-05-17">
										<div class="calendar-day-title">Ср</div>
										<div class="calendar-day-value">17</div>
									</div>
									<div class="calendar-day" data-value="2023-05-18">
										<div class="calendar-day-title">Чт</div>
										<div class="calendar-day-value">18</div>
									</div>
									<div class="calendar-day" data-value="2023-05-19">
										<div class="calendar-day-title">Пт</div>
										<div class="calendar-day-value">19</div>
									</div>
									<div class="calendar-day calendar-day-weekend" data-value="2023-05-20">
										<div class="calendar-day-title">Сб</div>
										<div class="calendar-day-value">20</div>
									</div>
									<div class="calendar-day calendar-day-weekend" data-value="2023-05-21">
										<div class="calendar-day-title">Вс</div>
										<div class="calendar-day-value">21</div>
									</div>
									<div class="calendar-day" data-value="2023-05-22">
										<div class="calendar-day-title">Пн</div>
										<div class="calendar-day-value">22</div>
									</div>
									<div class="calendar-day" data-value="2023-05-23">
										<div class="calendar-day-title">Вт</div>
										<div class="calendar-day-value">23</div>
									</div>
									<div class="calendar-day" data-value="2023-05-24">
										<div class="calendar-day-title">Ср</div>
										<div class="calendar-day-value">24</div>
									</div>
									<div class="calendar-day" data-value="2023-05-25">
										<div class="calendar-day-title">Чт</div>
										<div class="calendar-day-value">25</div>
									</div>
									<div class="calendar-day" data-value="2023-05-26">
										<div class="calendar-day-title">Пт</div>
										<div class="calendar-day-value">26</div>
									</div>
									<div class="calendar-day calendar-day-weekend" data-value="2023-05-27">
										<div class="calendar-day-title">Сб</div>
										<div class="calendar-day-value">27</div>
									</div>
									<div class="calendar-day calendar-day-weekend" data-value="2023-05-28">
										<div class="calendar-day-title">Вс</div>
										<div class="calendar-day-value">28</div>
									</div>
									<div class="calendar-day" data-value="2023-05-29">
										<div class="calendar-day-title">Пн</div>
										<div class="calendar-day-value">29</div>
									</div>
									<div class="calendar-day" data-value="2023-05-30">
										<div class="calendar-day-title">Вт</div>
										<div class="calendar-day-value">30</div>
									</div>
									<div class="calendar-day" data-value="2023-05-31">
										<div class="calendar-day-title">Ср</div>
										<div class="calendar-day-value">31</div>
									</div>
								</div>
        			</div>
        			<div class="calendar-month">
								<div class="calendar-month-title">Июнь</div>
								<div class="calendar-days">
                  <div class="calendar-day" data-value="2023-06-01">
                    <div class="calendar-day-title">Чт</div>
                    <div class="calendar-day-value">1</div>
                  </div>
                  <div class="calendar-day" data-value="2023-06-02">
                    <div class="calendar-day-title">Пт</div>
                    <div class="calendar-day-value">2</div>
                  </div>
                  <div class="calendar-day calendar-day-weekend" data-value="2023-06-03">
                    <div class="calendar-day-title">Сб</div>
                    <div class="calendar-day-value">3</div>
                  </div>
                  <div class="calendar-day calendar-day-weekend" data-value="2023-06-04">
                    <div class="calendar-day-title">Вс</div>
                    <div class="calendar-day-value">4</div>
                  </div>
                  <div class="calendar-day" data-value="2023-06-05">
                    <div class="calendar-day-title">Пн</div>
                    <div class="calendar-day-value">5</div>
                  </div>
                  <div class="calendar-day" data-value="2023-06-06">
                    <div class="calendar-day-title">Вт</div>
                    <div class="calendar-day-value">6</div>
                  </div>
                  <div class="calendar-day" data-value="2023-06-07">
                    <div class="calendar-day-title">Ср</div>
                    <div class="calendar-day-value">7</div>
                  </div>
                  <div class="calendar-day" data-value="2023-06-08">
                    <div class="calendar-day-title">Чт</div>
                    <div class="calendar-day-value">8</div>
                  </div>
                  <div class="calendar-day" data-value="2023-06-09">
                    <div class="calendar-day-title">Пт</div>
                    <div class="calendar-day-value">9</div>
                  </div>
                  <div class="calendar-day calendar-day-weekend" data-value="2023-06-10">
                    <div class="calendar-day-title">Сб</div>
                    <div class="calendar-day-value">10</div>
                  </div>
                  <div class="calendar-day calendar-day-weekend" data-value="2023-06-11">
                    <div class="calendar-day-title">Вс</div>
                    <div class="calendar-day-value">11</div>
                  </div>
                  <div class="calendar-day" data-value="2023-06-12">
                    <div class="calendar-day-title">Пн</div>
                    <div class="calendar-day-value">12</div>
                  </div>
                  <div class="calendar-day" data-value="2023-06-13">
                    <div class="calendar-day-title">Вт</div>
                    <div class="calendar-day-value">13</div>
                  </div>
                  <div class="calendar-day" data-value="2023-06-14">
                    <div class="calendar-day-title">Ср</div>
                    <div class="calendar-day-value">14</div>
                  </div>
                  <div class="calendar-day" data-value="2023-06-15">
                    <div class="calendar-day-title">Чт</div>
                    <div class="calendar-day-value">15</div>
                  </div>
                  <div class="calendar-day" data-value="2023-06-16">
                    <div class="calendar-day-title">Пт</div>
                    <div class="calendar-day-value">16</div>
                  </div>
                  <div class="calendar-day calendar-day-weekend" data-value="2023-06-17">
                    <div class="calendar-day-title">Сб</div>
                    <div class="calendar-day-value">17</div>
                  </div>
                  <div class="calendar-day calendar-day-weekend" data-value="2023-06-18">
                    <div class="calendar-day-title">Вс</div>
                    <div class="calendar-day-value">18</div>
                  </div>
                  <div class="calendar-day" data-value="2023-06-19">
                    <div class="calendar-day-title">Пн</div>
                    <div class="calendar-day-value">19</div>
                  </div>
                  <div class="calendar-day" data-value="2023-06-20">
                    <div class="calendar-day-title">Вт</div>
                    <div class="calendar-day-value">20</div>
                  </div>
                  <div class="calendar-day" data-value="2023-06-21">
                    <div class="calendar-day-title">Ср</div>
                    <div class="calendar-day-value">21</div>
                  </div>
                  <div class="calendar-day" data-value="2023-06-22">
                    <div class="calendar-day-title">Чт</div>
                    <div class="calendar-day-value">22</div>
                  </div>
                  <div class="calendar-day" data-value="2023-06-23">
                    <div class="calendar-day-title">Пт</div>
                    <div class="calendar-day-value">23</div>
                  </div>
                  <div class="calendar-day calendar-day-weekend" data-value="2023-06-24">
                    <div class="calendar-day-title">Сб</div>
                    <div class="calendar-day-value">24</div>
                  </div>
                  <div class="calendar-day calendar-day-weekend" data-value="2023-06-25">
                    <div class="calendar-day-title">Вс</div>
                    <div class="calendar-day-value">25</div>
                  </div>
                  <div class="calendar-day" data-value="2023-06-26">
                    <div class="calendar-day-title">Пн</div>
                    <div class="calendar-day-value">26</div>
                  </div>
                  <div class="calendar-day" data-value="2023-06-27">
                    <div class="calendar-day-title">Вт</div>
                    <div class="calendar-day-value">27</div>
                  </div>
                  <div class="calendar-day" data-value="2023-06-28">
                    <div class="calendar-day-title">Ср</div>
                    <div class="calendar-day-value">28</div>
                  </div>
                  <div class="calendar-day" data-value="2023-06-29">
                    <div class="calendar-day-title">Чт</div>
                    <div class="calendar-day-value">29</div>
                  </div>
                  <div class="calendar-day" data-value="2023-06-30">
                    <div class="calendar-day-title">Пт</div>
                    <div class="calendar-day-value">30</div>
                  </div>
                </div>
        			</div>
							<div class="calendar-month">
								<div class="calendar-month-title">Июль</div>
								<div class="calendar-days">
                  <div class="calendar-day calendar-day-weekend" data-value="2023-07-01">
                    <div class="calendar-day-title">Сб</div>
                    <div class="calendar-day-value">1</div>
                  </div>
                  <div class="calendar-day calendar-day-weekend" data-value="2023-07-02">
                    <div class="calendar-day-title">Вс</div>
                    <div class="calendar-day-value">2</div>
                  </div>
                  <div class="calendar-day" data-value="2023-07-03">
                    <div class="calendar-day-title">Пн</div>
                    <div class="calendar-day-value">3</div>
                  </div>
                  <div class="calendar-day" data-value="2023-07-04">
                    <div class="calendar-day-title">Вт</div>
                    <div class="calendar-day-value">4</div>
                  </div>
                  <div class="calendar-day" data-value="2023-07-05">
                    <div class="calendar-day-title">Ср</div>
                    <div class="calendar-day-value">5</div>
                  </div>
                  <div class="calendar-day" data-value="2023-07-06">
                    <div class="calendar-day-title">Чт</div>
                    <div class="calendar-day-value">6</div>
                  </div>
                  <div class="calendar-day" data-value="2023-07-07">
                    <div class="calendar-day-title">Пт</div>
                    <div class="calendar-day-value">7</div>
                  </div>
                  <div class="calendar-day calendar-day-weekend" data-value="2023-07-08">
                    <div class="calendar-day-title">Сб</div>
                    <div class="calendar-day-value">8</div>
                  </div>
                  <div class="calendar-day calendar-day-weekend" data-value="2023-07-09">
                    <div class="calendar-day-title">Вс</div>
                    <div class="calendar-day-value">9</div>
                  </div>
                </div>
        			</div>
						</div>
					</div>
				</div>
			</div>
			{/* <div class="impressions" data-module="mainpage-posts">
                <div class="impression-filters" data-module="mainpage-filters">
                    <div data-type="dates" data-filter="">
                        <div class="impression-calendar swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-free-mode swiper-container-android" data-module="impression-calendar date-filter" data-id="dates">
    
<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                    </div>
                    <div class="impression-filters-categories swiper-container" data-module="custom-swiper" space-between="8" free-mode="1" mobile-only="1">
                        <div class="swiper-wrapper">
                            <div class="impression-filter swiper-slide chips active" data-type="reset">Все</div>
                            <div class="impression-filter swiper-slide  chips open-dialog" data-type="type" data-open="type" data-filter="">
                                <span>Тип</span>
                                <div class="impression-icon ">
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#arrow_drop_down"></use>
    </svg>
</div>
                            </div>
                            <div class="impression-filter swiper-slide chips open-dialog d-none" id="categoryFilter" data-type="category" data-filter="" data-open="#">
                                <span>Категории</span>
                                <div class="impression-icon ">
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#arrow_drop_down"></use>
    </svg>
</div>
                            </div>
                            <div class="impression-filter swiper-slide chips" data-type="ticketsOnly" data-filter="" data-module="toggle-filter" data-id="ticketsOnly">Только билеты
                            </div>
                        </div>
                    </div>
                </div>
                <div class="impression-state">
                    <div class="impression-loader" hidden="">
                        <div class="impression-icon animate-spin">
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#loading-icon"></use>
    </svg>
</div>
                        Загрузка
                    </div>
                </div>
                <div class="impression-items">
                                            <div class="impression-card collected" data-minprice="6 000" data-hastickets="1" data-category="Концерты" data-id="53647" data-title="Большой Stand Up концерт" data-partner="Stand Up Astana">
    <div class="impression-card-image">
        <a href="https://sxodim.com/almaty/event/stand-up-astana">
            <picture>
                <source media="(min-width: 1000px)" srcset="/uploads/posts/2023/03/31/optimized/5eec97fef216f98e7e0493086be9efe6_352x198-q-85.jpg">
                <img src="/uploads/posts/2023/03/31/optimized/5eec97fef216f98e7e0493086be9efe6_328x184-q-85.jpg" alt="Большой Stand Up концерт">
            </picture>
        </a>
        <div class="impression-card-badges">
            <div class="badge">
                <div class="impression-icon ">
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#event"></use>
    </svg>
</div>
            </div>
                            <a href="https://sxodim.com/almaty/kontserty/stand-up-astana/tickets" class="badge">
                    <div class="impression-icon ">
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#ticket"></use>
    </svg>
</div>
                    <span>Билеты</span>
                </a>
                                        <a href="https://sxodim.com/almaty/events/kontserty" class="badge">
                    Концерты
                </a>
                    </div>
        <div class="impression-card-favorite " data-id="53647">
            <div class="impression-icon ">
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#heart-icon"></use>
    </svg>
</div>
        </div>
    </div>
    <a href="https://sxodim.com/almaty/event/stand-up-astana" class="impression-card-title">
        Большой Stand Up концерт
    </a>
    <div class="impression-card-info">
        6 000 - 15 000  ₸, 29 апреля в 20:00, Алматы, улица Богенбай Батыра, 151
    </div>

</div>

                                            <div class="impression-card collected" data-minprice="3 000" data-hastickets="1" data-category="Спортивные события" data-id="53874" data-title="Баскетбольный матч ПБК Irbis Almaty — ПБК Astana" data-partner="mclucker13@gmail.com">
    <div class="impression-card-image">
        <a href="https://sxodim.com/almaty/event/basketball-match-almaty-astana">
            <picture>
                <source media="(min-width: 1000px)" srcset="/uploads/posts/2023/04/07/optimized/9fdbc83dbc6003c863a96256f177ddc9_352x198-q-85.jpg">
                <img src="/uploads/posts/2023/04/07/optimized/9fdbc83dbc6003c863a96256f177ddc9_328x184-q-85.jpg" alt="Баскетбольный матч ПБК Irbis Almaty — ПБК Astana">
            </picture>
        </a>
        <div class="impression-card-badges">
            <div class="badge">
                <div class="impression-icon ">
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#event"></use>
    </svg>
</div>
            </div>
                            <a href="https://sxodim.com/almaty/sport/basketball-match-almaty-astana/tickets" class="badge">
                    <div class="impression-icon ">
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#ticket"></use>
    </svg>
</div>
                    <span>Билеты</span>
                </a>
                                        <a href="https://sxodim.com/almaty/events/sport" class="badge">
                    Спортивные события
                </a>
                    </div>
        <div class="impression-card-favorite " data-id="53874">
            <div class="impression-icon ">
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#heart-icon"></use>
    </svg>
</div>
        </div>
    </div>
    <a href="https://sxodim.com/almaty/event/basketball-match-almaty-astana" class="impression-card-title">
        Баскетбольный матч ПБК Irbis Almaty — ПБК Astana
    </a>
    <div class="impression-card-info">
        3 000 - 5 000  ₸, 12 апреля в 20:00, Алматы, улица Кожабекова, 6
    </div>

</div>

                                            <div class="impression-card collected" data-minprice="2 100" data-hastickets="1" data-category="Выставки" data-id="53048" data-title="Выставка «От Мунка до Босха. Самые загадочные картины мира»" data-partner="art.ekspo@yandex.ru">
    <div class="impression-card-image">
        <a href="https://sxodim.com/almaty/event/vystavka-ot-munka-do-bosha-samye-zagadochnye-kartiny-mira">
            <picture>
                <source media="(min-width: 1000px)" srcset="/uploads/posts/2023/03/09/optimized/f437b88ef7b7eb0a835c41dddccab385_352x198-q-85.jpg">
                <img src="/uploads/posts/2023/03/09/optimized/f437b88ef7b7eb0a835c41dddccab385_328x184-q-85.jpg" alt="Выставка «От Мунка до Босха. Самые загадочные картины мира»">
            </picture>
        </a>
        <div class="impression-card-badges">
            <div class="badge">
                <div class="impression-icon ">
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#event"></use>
    </svg>
</div>
            </div>
                            <a href="https://sxodim.com/almaty/vystavki/vystavka-ot-munka-do-bosha-samye-zagadochnye-kartiny-mira/tickets" class="badge">
                    <div class="impression-icon ">
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#ticket"></use>
    </svg>
</div>
                    <span>Билеты</span>
                </a>
                                        <a href="https://sxodim.com/almaty/events/vystavki" class="badge">
                    Выставки
                </a>
                    </div>
        <div class="impression-card-favorite " data-id="53048">
            <div class="impression-icon ">
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#heart-icon"></use>
    </svg>
</div>
        </div>
    </div>
    <a href="https://sxodim.com/almaty/event/vystavka-ot-munka-do-bosha-samye-zagadochnye-kartiny-mira" class="impression-card-title">
        Выставка «От Мунка до Босха. Самые загадочные картины мира»
    </a>
    <div class="impression-card-info">
        2 100 - 4 500  ₸, 11 апреля в 11:00, ул. Сатпаева 30/5, корп 2
    </div>

</div>

                                            <div class="impression-card collected" data-minprice="2 500" data-hastickets="1" data-category="Фестивали" data-id="53623" data-title="Фестиваль Sxodim Fest" data-partner="Алишер">
    <div class="impression-card-image">
        <a href="https://sxodim.com/almaty/event/festival-sxodim-fest">
            <picture>
                <source media="(min-width: 1000px)" srcset="/uploads/posts/2023/03/31/optimized/c7ccf83d7d93f5e1ac3d80a213d0220c_352x198-q-85.jpg">
                <img src="/uploads/posts/2023/03/31/optimized/c7ccf83d7d93f5e1ac3d80a213d0220c_328x184-q-85.jpg" alt="Фестиваль Sxodim Fest">
            </picture>
        </a>
        <div class="impression-card-badges">
            <div class="badge">
                <div class="impression-icon ">
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#event"></use>
    </svg>
</div>
            </div>
                            <a href="https://sxodim.com/almaty/festivali/festival-sxodim-fest/tickets" class="badge">
                    <div class="impression-icon ">
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#ticket"></use>
    </svg>
</div>
                    <span>Билеты</span>
                </a>
                                        <a href="https://sxodim.com/almaty/events/festivali" class="badge">
                    Фестивали
                </a>
                    </div>
        <div class="impression-card-favorite " data-id="53623">
            <div class="impression-icon ">
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#heart-icon"></use>
    </svg>
</div>
        </div>
    </div>
    <a href="https://sxodim.com/almaty/event/festival-sxodim-fest" class="impression-card-title">
        Фестиваль Sxodim Fest
    </a>
    <div class="impression-card-info">
        2 500 - 110 000  ₸, 24 июня в 13:00, Илийский район
    </div>

</div>

                                            <div class="impression-card collected" data-minprice="3 000" data-hastickets="1" data-category="Выставки" data-id="50492" data-title="Выставка «Ван Гог. Ожившие полотна»" data-partner="Egarminmaxim@gmail.com">
    <div class="impression-card-image">
        <a href="https://sxodim.com/almaty/event/vystavka-van-gog-ozhivshie-polotna">
            <picture>
                <source media="(min-width: 1000px)" srcset="/uploads/posts/2022/12/22/optimized/c32285fba7a7dfc77e3a29090874134c_352x198-q-85.jpg">
                <img src="/uploads/posts/2022/12/22/optimized/c32285fba7a7dfc77e3a29090874134c_328x184-q-85.jpg" alt="Выставка «Ван Гог. Ожившие полотна»">
            </picture>
        </a>
        <div class="impression-card-badges">
            <div class="badge">
                <div class="impression-icon ">
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#event"></use>
    </svg>
</div>
            </div>
                            <a href="https://sxodim.com/almaty/vystavki/vystavka-van-gog-ozhivshie-polotna/tickets" class="badge">
                    <div class="impression-icon ">
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#ticket"></use>
    </svg>
</div>
                    <span>Билеты</span>
                </a>
                                        <a href="https://sxodim.com/almaty/events/vystavki" class="badge">
                    Выставки
                </a>
                    </div>
        <div class="impression-card-favorite " data-id="50492">
            <div class="impression-icon ">
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#heart-icon"></use>
    </svg>
</div>
        </div>
    </div>
    <a href="https://sxodim.com/almaty/event/vystavka-van-gog-ozhivshie-polotna" class="impression-card-title">
        Выставка «Ван Гог. Ожившие полотна»
    </a>
    <div class="impression-card-info">
        3 000 - 4 500  ₸, 11 апреля в 11:00, пр. Аль-Фараби, 13 к2в
    </div>

</div>

                                            <div class="impression-card collected" data-minprice="10 000" data-hastickets="1" data-category="Концерты" data-id="49505" data-title="Stand Up концерт Ивана Абрамова" data-partner="Наргиза куленбаева">
    <div class="impression-card-image">
        <a href="https://sxodim.com/almaty/event/stand-up-koncert-ivana-abramova">
            <picture>
                <source media="(min-width: 1000px)" srcset="/uploads/posts/2022/11/24/optimized/24805ff11d2211ed485d2fc6a6a0bd6b_352x198-q-85.jpg">
                <img src="/uploads/posts/2022/11/24/optimized/24805ff11d2211ed485d2fc6a6a0bd6b_328x184-q-85.jpg" alt="Stand Up концерт Ивана Абрамова">
            </picture>
        </a>
        <div class="impression-card-badges">
            <div class="badge">
                <div class="impression-icon ">
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#event"></use>
    </svg>
</div>
            </div>
                            <a href="https://sxodim.com/almaty/kontserty/stand-up-koncert-ivana-abramova/tickets" class="badge">
                    <div class="impression-icon ">
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#ticket"></use>
    </svg>
</div>
                    <span>Билеты</span>
                </a>
                                        <a href="https://sxodim.com/almaty/events/kontserty" class="badge">
                    Концерты
                </a>
                    </div>
        <div class="impression-card-favorite " data-id="49505">
            <div class="impression-icon ">
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#heart-icon"></use>
    </svg>
</div>
        </div>
    </div>
    <a href="https://sxodim.com/almaty/event/stand-up-koncert-ivana-abramova" class="impression-card-title">
        Stand Up концерт Ивана Абрамова
    </a>
    <div class="impression-card-info">
        10 000 - 35 000  ₸, 15 апреля в 20:00, Алматы, улица Богенбай Батыра, 151
    </div>

</div>

                                            <div class="impression-card collected" data-minprice="1 800" data-hastickets="1" data-category="Выставки" data-id="53675" data-title="Выставка «Климт и Шиле. Золото Модерна»" data-partner="art.ekspo@yandex.ru">
    <div class="impression-card-image">
        <a href="https://sxodim.com/almaty/event/vystavka-klimt-i-shile-zoloto-moderna">
            <picture>
                <source media="(min-width: 1000px)" srcset="/uploads/posts/2023/03/31/optimized/587ff85538c4372833ab889e2e194bfb_352x198-q-85.jpg">
                <img src="/uploads/posts/2023/03/31/optimized/587ff85538c4372833ab889e2e194bfb_328x184-q-85.jpg" alt="Выставка «Климт и Шиле. Золото Модерна»">
            </picture>
        </a>
        <div class="impression-card-badges">
            <div class="badge">
                <div class="impression-icon ">
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#event"></use>
    </svg>
</div>
            </div>
                            <a href="https://sxodim.com/almaty/vystavki/vystavka-klimt-i-shile-zoloto-moderna/tickets" class="badge">
                    <div class="impression-icon ">
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#ticket"></use>
    </svg>
</div>
                    <span>Билеты</span>
                </a>
                                        <a href="https://sxodim.com/almaty/events/vystavki" class="badge">
                    Выставки
                </a>
                    </div>
        <div class="impression-card-favorite " data-id="53675">
            <div class="impression-icon ">
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#heart-icon"></use>
    </svg>
</div>
        </div>
    </div>
    <a href="https://sxodim.com/almaty/event/vystavka-klimt-i-shile-zoloto-moderna" class="impression-card-title">
        Выставка «Климт и Шиле. Золото Модерна»
    </a>
    <div class="impression-card-info">
        1 800 - 2 200  ₸, 11 апреля в 10:00, пр. Достык, 44
    </div>

</div>

                                            <div class="impression-card collected" data-minprice="12 000" data-hastickets="1" data-category="Концерты" data-id="51178" data-title="Стендап-моноспектакль «Лучше, чем кажется»" data-partner="Айнур">
    <div class="impression-card-image">
        <a href="https://sxodim.com/almaty/event/stendap-monospektakl-luchshe-chem-kazhetsya-1">
            <picture>
                <source media="(min-width: 1000px)" srcset="/uploads/posts/2023/01/17/optimized/7a92a8bd1fdc867c9224c4c17c6a5c7f_352x198-q-85.jpg">
                <img src="/uploads/posts/2023/01/17/optimized/7a92a8bd1fdc867c9224c4c17c6a5c7f_328x184-q-85.jpg" alt="Стендап-моноспектакль «Лучше, чем кажется»">
            </picture>
        </a>
        <div class="impression-card-badges">
            <div class="badge">
                <div class="impression-icon ">
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#event"></use>
    </svg>
</div>
            </div>
                            <a href="https://sxodim.com/almaty/kontserty/stendap-monospektakl-luchshe-chem-kazhetsya-1/tickets" class="badge">
                    <div class="impression-icon ">
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#ticket"></use>
    </svg>
</div>
                    <span>Билеты</span>
                </a>
                                        <a href="https://sxodim.com/almaty/events/kontserty" class="badge">
                    Концерты
                </a>
                    </div>
        <div class="impression-card-favorite " data-id="51178">
            <div class="impression-icon ">
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#heart-icon"></use>
    </svg>
</div>
        </div>
    </div>
    <a href="https://sxodim.com/almaty/event/stendap-monospektakl-luchshe-chem-kazhetsya-1" class="impression-card-title">
        Стендап-моноспектакль «Лучше, чем кажется»
    </a>
    <div class="impression-card-info">
        12 000 ₸, 13 апреля в 18:30, улица Байзакова, 280
    </div>

</div>

                                            <div class="impression-card collected" data-minprice="2 000" data-hastickets="1" data-category="Концерты в EverJazz" data-id="53502" data-title="Посвящение Фрэнку Синатре — Джаз, проверенный временем" data-partner="Jazz.Club.EverJazz">
    <div class="impression-card-image">
        <a href="https://sxodim.com/almaty/event/posvyashchenie-frenku-sinatre-dzhaz-proverennyy-vremenem">
            <picture>
                <source media="(min-width: 1000px)" srcset="/uploads/posts/2023/03/27/optimized/c34daecf29df62628f6675fa901aedaa_352x198-q-85.jpg">
                <img src="/uploads/posts/2023/03/27/optimized/c34daecf29df62628f6675fa901aedaa_328x184-q-85.jpg" alt="Посвящение Фрэнку Синатре — Джаз, проверенный временем">
            </picture>
        </a>
        <div class="impression-card-badges">
            <div class="badge">
                <div class="impression-icon ">
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#event"></use>
    </svg>
</div>
            </div>
                            <a href="https://sxodim.com/almaty/koncerty-v-everjazz/posvyashchenie-frenku-sinatre-dzhaz-proverennyy-vremenem/tickets" class="badge">
                    <div class="impression-icon ">
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#ticket"></use>
    </svg>
</div>
                    <span>Билеты</span>
                </a>
                                        <a href="https://sxodim.com/almaty/events/koncerty-v-everjazz" class="badge">
                    Концерты в EverJazz
                </a>
                    </div>
        <div class="impression-card-favorite " data-id="53502">
            <div class="impression-icon ">
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#heart-icon"></use>
    </svg>
</div>
        </div>
    </div>
    <a href="https://sxodim.com/almaty/event/posvyashchenie-frenku-sinatre-dzhaz-proverennyy-vremenem" class="impression-card-title">
        Посвящение Фрэнку Синатре — Джаз, проверенный временем
    </a>
    <div class="impression-card-info">
        2 000 - 6 000  ₸, 15 апреля в 19:00, Алматы, улица Зенкова, 24
    </div>

</div>

                                            <div class="impression-card collected" data-minprice="21 500" data-hastickets="1" data-category="Туры от Grande Voyage" data-id="49021" data-title="Тур на озеро Кольсай и Кайынды + 3 каньона реки Чарын" data-partner="Константин">
    <div class="impression-card-image">
        <a href="https://sxodim.com/almaty/event/tur-na-ozero-kolsay-i-kayyndy-chernyy-kanon">
            <picture>
                <source media="(min-width: 1000px)" srcset="/uploads/posts/2022/11/10/optimized/f91986f4db798c84e64ae6e2a3a45529_352x198-q-85.jpg">
                <img src="/uploads/posts/2022/11/10/optimized/f91986f4db798c84e64ae6e2a3a45529_328x184-q-85.jpg" alt="Тур на озеро Кольсай и Кайынды + 3 каньона реки Чарын">
            </picture>
        </a>
        <div class="impression-card-badges">
            <div class="badge">
                <div class="impression-icon ">
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#event"></use>
    </svg>
</div>
            </div>
                            <a href="https://sxodim.com/almaty/grand-voyage-tours/tur-na-ozero-kolsay-i-kayyndy-chernyy-kanon/tickets" class="badge">
                    <div class="impression-icon ">
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#ticket"></use>
    </svg>
</div>
                    <span>Билеты</span>
                </a>
                                        <a href="https://sxodim.com/almaty/events/grand-voyage-tours" class="badge">
                    Туры от Grande Voyage
                </a>
                    </div>
        <div class="impression-card-favorite " data-id="49021">
            <div class="impression-icon ">
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#heart-icon"></use>
    </svg>
</div>
        </div>
    </div>
    <a href="https://sxodim.com/almaty/event/tur-na-ozero-kolsay-i-kayyndy-chernyy-kanon" class="impression-card-title">
        Тур на озеро Кольсай и Кайынды + 3 каньона реки Чарын
    </a>
    <div class="impression-card-info">
        21 500 - 22 000  ₸, 14 апреля в 21:00, ул. Байтурсынова, 100
    </div>

</div>

                                            <div class="impression-card collected" data-minprice="2 000" data-hastickets="1" data-category="Туризм" data-id="40558" data-title="Экскурсии в автобусе-кабриолете на Медеу и по Алматы" data-partner="Алмас Асылбеков">
    <div class="impression-card-image">
        <a href="https://sxodim.com/almaty/event/ekskursii-v-avtobuse-kabriolete-na-medeu-i-po-almaty">
            <picture>
                <source media="(min-width: 1000px)" srcset="/uploads/posts/2023/02/27/optimized/8bac6ada3de5a159b397af9236b2a663_352x198-q-85.jpg">
                <img src="/uploads/posts/2023/02/27/optimized/8bac6ada3de5a159b397af9236b2a663_328x184-q-85.jpg" alt="Экскурсии в автобусе-кабриолете на Медеу и по Алматы">
            </picture>
        </a>
        <div class="impression-card-badges">
            <div class="badge">
                <div class="impression-icon ">
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#event"></use>
    </svg>
</div>
            </div>
                            <a href="https://sxodim.com/almaty/tourism/ekskursii-v-avtobuse-kabriolete-na-medeu-i-po-almaty/tickets" class="badge">
                    <div class="impression-icon ">
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#ticket"></use>
    </svg>
</div>
                    <span>Билеты</span>
                </a>
                                        <a href="https://sxodim.com/almaty/events/tourism" class="badge">
                    Туризм
                </a>
                    </div>
        <div class="impression-card-favorite " data-id="40558">
            <div class="impression-icon ">
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#heart-icon"></use>
    </svg>
</div>
        </div>
    </div>
    <a href="https://sxodim.com/almaty/event/ekskursii-v-avtobuse-kabriolete-na-medeu-i-po-almaty" class="impression-card-title">
        Экскурсии в автобусе-кабриолете на Медеу и по Алматы
    </a>
    <div class="impression-card-info">
        2 000 - 3 500  ₸, 12 апреля в 10:00
    </div>

</div>

                                            <div class="impression-card collected" data-minprice="2 000" data-hastickets="1" data-category="Концерты в EverJazz" data-id="53630" data-title="Посвящение Элле Фицджеральд – Квинтет Екатерины Хоменковой" data-partner="Jazz.Club.EverJazz">
    <div class="impression-card-image">
        <a href="https://sxodim.com/almaty/event/posvyashchenie-elle-ficdzherald-kvintet-ekateriny-homenkovoy">
            <picture>
                <source media="(min-width: 1000px)" srcset="/uploads/posts/2023/03/30/optimized/bc90c099830a2faceeae9ce30ba04111_352x198-q-85.jpg">
                <img src="/uploads/posts/2023/03/30/optimized/bc90c099830a2faceeae9ce30ba04111_328x184-q-85.jpg" alt="Посвящение Элле Фицджеральд – Квинтет Екатерины Хоменковой">
            </picture>
        </a>
        <div class="impression-card-badges">
            <div class="badge">
                <div class="impression-icon ">
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#event"></use>
    </svg>
</div>
            </div>
                            <a href="https://sxodim.com/almaty/koncerty-v-everjazz/posvyashchenie-elle-ficdzherald-kvintet-ekateriny-homenkovoy/tickets" class="badge">
                    <div class="impression-icon ">
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#ticket"></use>
    </svg>
</div>
                    <span>Билеты</span>
                </a>
                                        <a href="https://sxodim.com/almaty/events/koncerty-v-everjazz" class="badge">
                    Концерты в EverJazz
                </a>
                    </div>
        <div class="impression-card-favorite " data-id="53630">
            <div class="impression-icon ">
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#heart-icon"></use>
    </svg>
</div>
        </div>
    </div>
    <a href="https://sxodim.com/almaty/event/posvyashchenie-elle-ficdzherald-kvintet-ekateriny-homenkovoy" class="impression-card-title">
        Посвящение Элле Фицджеральд – Квинтет Екатерины Хоменковой
    </a>
    <div class="impression-card-info">
        2 000 - 6 000  ₸, 14 апреля в 19:00, Алматы, улица Зенкова, 24
    </div>

</div>

                                            <div class="impression-card collected" data-minprice="4 500" data-hastickets="1" data-category="Фестивали" data-id="44679" data-title="Фестиваль Chef's Point" data-partner="winehub.pro">
    <div class="impression-card-image">
        <a href="https://sxodim.com/almaty/event/festival-chef-s-point">
            <picture>
                <source media="(min-width: 1000px)" srcset="/uploads/posts/2023/02/06/optimized/fbf021c269b0a62373183f457ca82bd2_352x198-q-85.jpg">
                <img src="/uploads/posts/2023/02/06/optimized/fbf021c269b0a62373183f457ca82bd2_328x184-q-85.jpg" alt="Фестиваль Chef's Point">
            </picture>
        </a>
        <div class="impression-card-badges">
            <div class="badge">
                <div class="impression-icon ">
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#event"></use>
    </svg>
</div>
            </div>
                            <a href="https://sxodim.com/almaty/festivali/festival-chef-s-point/tickets" class="badge">
                    <div class="impression-icon ">
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#ticket"></use>
    </svg>
</div>
                    <span>Билеты</span>
                </a>
                                        <a href="https://sxodim.com/almaty/events/festivali" class="badge">
                    Фестивали
                </a>
                    </div>
        <div class="impression-card-favorite " data-id="44679">
            <div class="impression-icon ">
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#heart-icon"></use>
    </svg>
</div>
        </div>
    </div>
    <a href="https://sxodim.com/almaty/event/festival-chef-s-point" class="impression-card-title">
        Фестиваль Chef's Point
    </a>
    <div class="impression-card-info">
        4 500 ₸, 29 апреля в 12:00, Алматы, проспект Сакена Сейфуллина, 617
    </div>

</div>

                                            <div class="impression-card collected" data-minprice="2 000" data-hastickets="1" data-category="Концерты в EverJazz" data-id="52944" data-title="Посвящение Майлзу Дэвису – Квинтет Всеволода Цыпина" data-partner="Jazz.Club.EverJazz">
    <div class="impression-card-image">
        <a href="https://sxodim.com/almaty/event/posvyashchenie-maylzu-devisu-kvintet-vsevoloda-cypina">
            <picture>
                <source media="(min-width: 1000px)" srcset="/uploads/posts/2023/03/31/optimized/6a345b2ec25ca640cea3959e8be4df06_352x198-q-85.jpg">
                <img src="/uploads/posts/2023/03/31/optimized/6a345b2ec25ca640cea3959e8be4df06_328x184-q-85.jpg" alt="Посвящение Майлзу Дэвису – Квинтет Всеволода Цыпина">
            </picture>
        </a>
        <div class="impression-card-badges">
            <div class="badge">
                <div class="impression-icon ">
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#event"></use>
    </svg>
</div>
            </div>
                            <a href="https://sxodim.com/almaty/koncerty-v-everjazz/posvyashchenie-maylzu-devisu-kvintet-vsevoloda-cypina/tickets" class="badge">
                    <div class="impression-icon ">
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#ticket"></use>
    </svg>
</div>
                    <span>Билеты</span>
                </a>
                                        <a href="https://sxodim.com/almaty/events/koncerty-v-everjazz" class="badge">
                    Концерты в EverJazz
                </a>
                    </div>
        <div class="impression-card-favorite " data-id="52944">
            <div class="impression-icon ">
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#heart-icon"></use>
    </svg>
</div>
        </div>
    </div>
    <a href="https://sxodim.com/almaty/event/posvyashchenie-maylzu-devisu-kvintet-vsevoloda-cypina" class="impression-card-title">
        Посвящение Майлзу Дэвису – Квинтет Всеволода Цыпина
    </a>
    <div class="impression-card-info">
        2 000 - 6 000  ₸, 21 апреля в 19:00, Алматы, улица Зенкова, 24
    </div>

</div>

                                            <div class="impression-card collected" data-minprice="2 000" data-hastickets="1" data-category="Концерты в EverJazz" data-id="51263" data-title="«Посвящение Уэсу Монтгомери» – Органное трио Виктора Хоменкова" data-partner="Jazz.Club.EverJazz">
    <div class="impression-card-image">
        <a href="https://sxodim.com/almaty/event/posvyashchenie-uesu-montgomeri-trio-viktora-homenkova">
            <picture>
                <source media="(min-width: 1000px)" srcset="/uploads/posts/2023/03/30/optimized/ef48578b31312467025b4f2a39541fc6_352x198-q-85.jpg">
                <img src="/uploads/posts/2023/03/30/optimized/ef48578b31312467025b4f2a39541fc6_328x184-q-85.jpg" alt="«Посвящение Уэсу Монтгомери» – Органное трио Виктора Хоменкова">
            </picture>
        </a>
        <div class="impression-card-badges">
            <div class="badge">
                <div class="impression-icon ">
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#event"></use>
    </svg>
</div>
            </div>
                            <a href="https://sxodim.com/almaty/koncerty-v-everjazz/posvyashchenie-uesu-montgomeri-trio-viktora-homenkova/tickets" class="badge">
                    <div class="impression-icon ">
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#ticket"></use>
    </svg>
</div>
                    <span>Билеты</span>
                </a>
                                        <a href="https://sxodim.com/almaty/events/koncerty-v-everjazz" class="badge">
                    Концерты в EverJazz
                </a>
                    </div>
        <div class="impression-card-favorite " data-id="51263">
            <div class="impression-icon ">
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#heart-icon"></use>
    </svg>
</div>
        </div>
    </div>
    <a href="https://sxodim.com/almaty/event/posvyashchenie-uesu-montgomeri-trio-viktora-homenkova" class="impression-card-title">
        «Посвящение Уэсу Монтгомери» – Органное трио Виктора Хоменкова
    </a>
    <div class="impression-card-info">
        2 000 - 6 000  ₸, 13 апреля в 20:00, Алматы, улица Зенкова, 24
    </div>

</div>

                                            <div class="impression-card collected" data-minprice="13 000" data-hastickets="1" data-category="Театр" data-id="53037" data-title="Литературно-музыкальный спектакль «Идеальная пара»" data-partner="info@lectoriy.kz">
    <div class="impression-card-image">
        <a href="https://sxodim.com/almaty/event/literaturno-muzykalnyy-spektakl-idealnaya-para">
            <picture>
                <source media="(min-width: 1000px)" srcset="/uploads/posts/2023/03/10/optimized/e8da8bced59296d7b53b6ee791c26985_352x198-q-85.jpg">
                <img src="/uploads/posts/2023/03/10/optimized/e8da8bced59296d7b53b6ee791c26985_328x184-q-85.jpg" alt="Литературно-музыкальный спектакль «Идеальная пара»">
            </picture>
        </a>
        <div class="impression-card-badges">
            <div class="badge">
                <div class="impression-icon ">
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#event"></use>
    </svg>
</div>
            </div>
                            <a href="https://sxodim.com/almaty/teatr/literaturno-muzykalnyy-spektakl-idealnaya-para/tickets" class="badge">
                    <div class="impression-icon ">
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#ticket"></use>
    </svg>
</div>
                    <span>Билеты</span>
                </a>
                                        <a href="https://sxodim.com/almaty/events/teatr" class="badge">
                    Театр
                </a>
                    </div>
        <div class="impression-card-favorite " data-id="53037">
            <div class="impression-icon ">
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#heart-icon"></use>
    </svg>
</div>
        </div>
    </div>
    <a href="https://sxodim.com/almaty/event/literaturno-muzykalnyy-spektakl-idealnaya-para" class="impression-card-title">
        Литературно-музыкальный спектакль «Идеальная пара»
    </a>
    <div class="impression-card-info">
        13 000 - 25 000  ₸, 18 апреля в 19:00, Казахстан, Алматы, улица Калдаякова, 35
    </div>

</div>

                                    </div>
                <div class="impression-actions">
                    <button class="button impression-btn-secondary" data-action="loadMore">
                        <div class="impression-icon animate-spin" hidden="">
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#loading-icon"></use>
    </svg>
</div>
                        Показать еще
                    </button>
                </div>
            </div> */}
		</Wrapper>
	);
}

const Wrapper = styled.div`
	.impression-filters {
    position: relative;
		max-width: 100%;
    margin-top: 8px;
    padding: 0 16px;
	}

	.impression-filters-top {
		display: flex;
	}

	.page-title {
    display: flex;
    align-items: center;
		width: 100%;
		height: 40px;
    font-size: 32px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.865);
	}

	.impression-city-list {
		border-radius: 4px;
		color: rgba(0, 0, 0, 0.865);
		background: var(--clr-grey1);
		margin-left: 16px;
		padding: 8px 4px;
		cursor: pointer;
	}

	.impression-city {
		display: flex;
		align-items: center;
		font-size: 14px;
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
    border: 1px solid var(--clr-grey2);
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
		display: flex;
		flex-wrap: wrap;
		width: 40px;
		height: 50px;
		position: relative;
		cursor: pointer;
		padding: 4px 0;
		justify-content: center;
	}

	.calendar-day-weekend .calendar-day-value {
    color: var(--clr-orange-2);
	}

	.calendar-day-title {
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    text-transform: uppercase;
    width: 100%;
    text-align: center;
    margin-bottom: 2px;
    color: #a6a6a6;
	}

	.calendar-day-value {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
	}
`;

export default Impresions;
