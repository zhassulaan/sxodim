import React from "react";
import styled from 'styled-components';
import tickets from "../../../resources/tickets_white.png";
import afisha from "../../../resources/afisha_white.png";

function ImpressionCard({ event }) {
	return (
		<Wrapper className="impression-card">
			<div className="impression-card-image">
				<a href={ `/event/${event._id}` }>
					<img src={ event.image } alt="Фестиваль Sxodim Fest" className="impression-card-background_image"/>
				</a>
				<div className="impression-card-badges">
					<div className="impression-card-badge badge">
						<div className="impression-icon">
							<img src={ afisha } alt="afisha icon" />
						</div>
					</div>
					<a href={ `/${event.category_en}/${event._id}/tickets` } className="impression-card-badge badge">
						<div className="impression-icon">
							<img src={ tickets } alt="tickets icon" />
						</div>
						<span>Билеты</span>
					</a>
					<a href={ `/events/${event.category_en}` } className="impression-card-badge badge">
						{ event.category }
					</a>
				</div>
				{/* <div className="impression-card-favorite">
					<div className="impression-icon">
						<img href={} alt="" />
					</div>
				</div> */}
			</div>
			<a href={ `/event/${event._id}` } className="impression-card-title">
				{ event.title }
			</a>
			<p className="impression-card-info">
				{ event.price }  ₸, { event.address }
			</p>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-content: flex-start;
	max-width: 480px;
	width: 256px;
	margin-bottom: 16px;
	
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
`;

export default ImpressionCard;
