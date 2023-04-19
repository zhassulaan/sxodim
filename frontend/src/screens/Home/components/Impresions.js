import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listEvents } from "../../../actions/eventActions";
import styled from 'styled-components';
import ImpressionCard from "./ImpressionCard";
import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import Button from "../../../components/Button";

function Impresions() {
	const dispatch = useDispatch();
	
	const eventList = useSelector(state => state.eventList);
	const { error, loading, events } = eventList;

  useEffect(() => {
		dispatch(listEvents());
  }, [dispatch]);

	window.onload = function () {
		var card = document.getElementsByClassName('impression-card');
		var btn = document.getElementById('button');
		for (let i = 16; i < card.length; i++) {
			card[i].style.display = "none";
		}

		var countD = 16;
		btn.addEventListener("click", function() {
			var card = document.getElementsByClassName('impression-card');
			countD += 16;
			if (countD <= card.length) {
				for (let i = 0; i < countD; i++) {
					card[i].style.display = "block";
				}
			}
		})
	}

	return (
		<Wrapper>
			{ loading ? <Loader width={ 100 } height={ 100 } />
				: error ? <Message variant="danger">{ error }</Message>
					:
					<div className="impression-items">
						{ events?.map(item => 
							<ImpressionCard event={ item } />
						) }
					</div>
			}
			<Button />
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
`;

export default Impresions;
