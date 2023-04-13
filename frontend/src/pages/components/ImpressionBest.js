import React from "react";
import styled from 'styled-components';
import image1 from "../../resources/c7ccf83d7d93f5e1ac3d80a213d0220c_363x204-q-85.jpeg";
import image2 from "../../resources/3ee652276022264531519d82b2390410_363x204-q-85.jpeg";
import image3 from "../../resources/4c3f5118647031ae3ea1fe64cf1dfac8_363x204-q-85.jpeg";
import image4 from "../../resources/8bac6ada3de5a159b397af9236b2a663_363x204-q-85.jpeg";
import tickets from "../../resources/tickets_white.png";
import afisha from "../../resources/afisha_white.png";
import journal from "../../resources/journal_white.png";
import swiper from "../../resources/swiper_button.png";

function ImpressionBest() {
	return (
		<Wrapper>
			<div className="swiper-container">
				<div className="swiper-slide">
					<div className="impression-card">
						<div className="impression-card-image">
							<a href="https://sxodim.com/almaty/event/festival-sxodim-fest">
								<img src={ image1 } alt="Фестиваль Sxodim Fest" className="impression-card-background_image"/>
							</a>
							<div className="impression-card-badges">
								<div className="impression-card-badge badge">
									<div className="impression-icon">
										<img src={ afisha } alt="afisha icon" />
									</div>
								</div>
								<a href="https://sxodim.com/almaty/festivali/festival-sxodim-fest/tickets" className="impression-card-badge badge">
									<div className="impression-icon">
										<img src={ tickets } alt="tickets icon" />
									</div>
									<span>Билеты</span>
								</a>
								<a href="https://sxodim.com/almaty/events/festivali" className="impression-card-badge badge">
									Фестивали
								</a>
							</div>
							{/* <div className="impression-card-favorite">
								<div className="impression-icon">
									<img href={} alt="" />
								</div>
							</div> */}
						</div>
						<a href="https://sxodim.com/almaty/event/festival-sxodim-fest" className="impression-card-title">
							Фестиваль Sxodim Fest
						</a>
						<p className="impression-card-info">
							2 500 - 10 000  ₸, 24 июня, Илийский район
						</p>
					</div>
				</div>
				<div className="swiper-slide">
					<div className="impression-card">
						<div className="impression-card-image">
							<a href="https://sxodim.com/almaty/article/glavnye-meropriyatiya-nedeli-v-almaty-10-16-aprelya" className="impression-card-background_image">
								<img src={ image2 } alt="Главные мероприятия недели в Алматы" className="impression-card-background_image"/>
							</a>
							<div className="impression-card-badges">
								<div className="impression-card-badge badge">
									<div className="impression-icon">
										<img src={ journal } alt="newspaper icon" />
									</div>
								</div>
								<a href="https://sxodim.com/almaty/articles/to-go" className="impression-card-badge badge">
									Куда сходить
								</a>
							</div>
							{/* <div className="impression-card-favorite">
								<div className="impression-icon">
									<img href={} alt="" />
								</div>
							</div> */}
						</div>
						<a href="https://sxodim.com/almaty/article/glavnye-meropriyatiya-nedeli-v-almaty-10-16-aprelya" className="impression-card-title">
							Главные мероприятия недели в Алматы (10&nbsp;—&nbsp;16&nbsp;апреля)
						</a>
						<p className="impression-card-info"></p>
					</div>
				</div>
				<div className="swiper-slide">
					<div className="impression-card">
						<div className="impression-card-image">
							<a href="https://sxodim.com/almaty/article/glavnye-meropriyatiya-nedeli-v-almaty-10-16-aprelya" className="impression-card-background_image">
								<img src={ image3 } alt="Қазақтың рейві бітпесін: 6 андеграунд площадок в Алматы" className="impression-card-background_image"/>
							</a>
							<div className="impression-card-badges">
								<div className="impression-card-badge badge">
									<div className="impression-icon">
										<img src={ journal } alt="newspaper icon" />
									</div>
								</div>
								<a href="https://sxodim.com/almaty/articles/podborki" className="impression-card-badge badge">
									Подборки
								</a>
							</div>
							{/* <div className="impression-card-favorite">
								<div className="impression-icon">
									<img href={} alt="" />
								</div>
							</div> */}
						</div>
						<a href="https://sxodim.com/almaty/article/underground-clubs" className="impression-card-title">
							Қазақтың рейві бітпесін: 6 андеграунд площадок в Алматы
						</a>
						<p className="impression-card-info"></p>
					</div>
				</div>
				<div className="swiper-slide">
					<div className="impression-card">
						<div className="impression-card-image">
							<a href="https://sxodim.com/almaty/event/ekskursii-v-avtobuse-kabriolete-na-medeu-i-po-almaty" className="impression-card-background_image">
								<img src={ image4 } alt="Фестиваль Sxodim Fest" className="impression-card-background_image"/>
							</a>
							<div className="impression-card-badges">
								<div className="impression-card-badge badge">
									<div className="impression-icon">
										<img src={ afisha } alt="afisha icon" />
									</div>
								</div>
								<a href="https://sxodim.com/almaty/tourism/ekskursii-v-avtobuse-kabriolete-na-medeu-i-po-almaty/tickets" className="impression-card-badge badge">
									<div className="impression-icon">
										<img src={ tickets } alt="tickets icon" />
									</div>
									<span>Билеты</span>
								</a>
								<a href="https://sxodim.com/almaty/events/tourism" className="impression-card-badge badge">
									Туризм
								</a>
							</div>
							{/* <div className="impression-card-favorite">
								<div className="impression-icon">
									<img href={} alt="" />
								</div>
							</div> */}
						</div>
						<a href="https://sxodim.com/almaty/event/ekskursii-v-avtobuse-kabriolete-na-medeu-i-po-almaty" className="impression-card-title">
							Экскурсии в автобусе-кабриолете на Медеу и по Алматы
						</a>
						<p className="impression-card-info">
							2 000 - 3 500  ₸, 23 апреля - 30 апреля
						</p>
					</div>
				</div>
			</div>
			<div className="swiper-button-prev swiper-button-disabled">
        <div className="impression-icon">
					<img src={ swiper } alt="arrow back" />
				</div>
    	</div>
			<div className="swiper-button-next">
        <div className="impression-icon">
					<img src={ swiper } alt="arrow next" />
				</div>
    	</div>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	position: relative;
	display: flex;
	max-width: 100%;
	padding: 16px;

	.swiper-container {
		display: flex;
    overflow: hidden;
    z-index: 1;
	}

	.swiper-slide {
    position: relative;
		margin-right: 16px;
	}

	.impression-card {
		display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    max-width: 480px;
	}
	
	.impression-card-image {
		position: relative;
		display: flex;
    width: 100%;
    min-height: 120px;
	}

	.impression-card-background_image {
    border-radius: 8px;
    overflow: hidden;
    object-fit: cover;
	}

	.impression-card-badges {
    position: absolute;
    left: 8px;
    bottom: 8px;
		display: flex;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 4px;
	}

	.badge {
    display: flex;
    background: rgba(0, 0, 0, 0.48);
    border-radius: 4px;
    color: var(--clr-white);
    line-height: 16px;
    font-size: 12px;
    white-space: nowrap;
		padding: 4px 6px;
	}

	.impression-card-badge {
		width: auto;
    margin-right: 4px;
	}
	
	.impression-icon {
		display: flex;
    align-items: center;
    justify-content: center;
		width: 16px;
		height: 16px;
	}
	
	.impression-card-badge .impression-icon + span {
		margin-left: 4px;
	}

	.impression-card-title {
		width: 100%;
    line-height: 20px;
    font-size: 16px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.865);
    margin-top: 8px;
	}

	.impression-card-info {
		width: 100%;
    line-height: 16px;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.48);
    margin-top: 4px;
	}

	.swiper-button-prev, 
	.swiper-button-next {
    position: absolute;
		top: calc(50% - 12px);
    color: rgba(0, 0, 0, 0.32);
    cursor: pointer;
	}

	.swiper-button-prev {
		left: -24px;
		transform: rotate(-180deg);
	}

	.swiper-button-next {
		right: -24px;
	}
	
	.swiper-button-disabled {
		display: none;
	}
`;

export default ImpressionBest;
