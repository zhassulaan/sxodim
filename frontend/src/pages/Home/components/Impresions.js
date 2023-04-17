import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listEvents } from "../../../actions/eventActions";
import styled from 'styled-components';
import ImpressionCard from "./ImpressionCard";
import Loader from "../../../components/Loader";
import Message from "../../../components/Message";

function Impresions() {
	const dispatch = useDispatch();
	
	const eventList = useSelector(state => state.eventList);
	const { error, loading, events } = eventList;

  useEffect(() => {
		dispatch(listEvents())
  }, [dispatch]);

	return (
		<Wrapper>
			{ loading ? <Loader />
				: error ? <Message variant="danger">{ error }</Message>
					:
					<div className="impression-items">
						{ events?.map(item => 
							<ImpressionCard event={ item } />
							) }
					</div>
			}
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
