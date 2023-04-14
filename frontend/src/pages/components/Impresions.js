import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from "axios";
import tickets from "../../resources/tickets_white.png";
import afisha from "../../resources/afisha_white.png";

function Impresions() {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        async function fetchEvents() {
            const { data } = await axios.get('/api/event/');
            setEvents(data);
        }
        fetchEvents();
    }, []);
	return (
		<Wrapper>
			<div className="impression-items">
				{ events.map(item => 
					<div className="impression-card">
						<div className="impression-card-image">
							<a href="https://sxodim.com/almaty/event/festival-sxodim-fest">
								<img src={ item.image } alt="Фестиваль Sxodim Fest" className="impression-card-background_image"/>
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
									{ item.category }
								</a>
							</div>
							{/* <div className="impression-card-favorite">
								<div className="impression-icon">
									<img href={} alt="" />
								</div>
							</div> */}
						</div>
						<a href="https://sxodim.com/almaty/event/festival-sxodim-fest" className="impression-card-title">
							{ item.title }
						</a>
						<p className="impression-card-info">
							{ item.price }  ₸, { item.address }
						</p>
					</div>
				) }
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.div`
margin-top: 8px;
padding: 0 16px;

	.impression-items {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-gap: 16px 32px;
	}
	
	.impression-card {
		display: flex;
		flex-wrap: wrap;
		align-content: flex-start;
		max-width: 480px;
		width: 256px;
		margin-bottom: 16px;
	}
	
	.impression-card-image {
		position: relative;
		display: flex;
		width: 100%;
		min-height: 120px;
	}
	
	.impression-card-background_image {
		max-width: 256px;
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

export default Impresions;
