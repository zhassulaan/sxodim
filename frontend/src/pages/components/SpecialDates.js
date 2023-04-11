import React from "react";
import styled from 'styled-components';

function SpecialDates() {
	return (
		<Wrapper>
			<a className="special_date" href="https://sxodim.com/almaty/events/today">
				<span className="special_date-title">
					Сегодня
				</span>
				<span className="special_date-sub">
					9 апреля
				</span>
			</a>
			<a className="special_date" href="https://sxodim.com/almaty/events/week">
				<span className="special_date-title">
					На этой неделе
				</span>
				<span className="special_date-sub">
					3–9 апреля
				</span>
			</a>
			<a className="special_date" href="https://sxodim.com/almaty/events/weekend">
				<span className="special_date-title">
					На выходных
				</span>
				<span className="special_date-sub">
					8–9 апреля
				</span>
			</a>
			<a className="special_date" href="https://sxodim.com/almaty/search-events?date_from=01.04.2023&amp;date_to=30.04.2023">
				<span className="special_date-title">
					В этом месяце
				</span>
				<span className="special_date-sub">
					Апрель
				</span>
			</a>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	max-width: 100%;

	.special_date {
		display: flex;
		width: 192px;
		border-radius: 4px;
		align-items: center;
		background: #f2f2f2;
		flex-wrap: wrap;
		min-width: 128px;
		margin-right: 16px;
		padding: 8px 12px;
	}

	.special_date-title {
		width: 100%;
		line-height: 22px;
		font-size: 16px;
		font-weight: 500;
		color: rgba(0, 0, 0, 0.865);
	white-space: nowrap;
	}

	.special_date-sub {
		line-height: 20px;
		font-size: 14px;
		color: rgba(0, 0, 0, 0.48);
	}
`;

export default SpecialDates;
