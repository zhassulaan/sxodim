import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listEventDetails } from '../../actions/eventActions';
import Promotion from '../../components/Promotion';
import Preview from './components/Preview';
import Info from './components/Info';
import Loader from '../../components/Loader';
import Message from '../../components/Message';

function Event() {
	const { _id } = useParams();

	const dispatch = useDispatch();

	const eventDetails = useSelector(state => state.eventDetails);
	const { error, loading, event } = eventDetails;

	useEffect(() => {
		dispatch(listEventDetails(_id)); 
  }, [dispatch, _id]);
	return (
		<div className="container">
			<Promotion />
			{ loading ? <Loader />
				: error ? <Message variant="danger">{ error }</Message>
					:
					<Preview event={ event } />
			}
			{/* <Info event={ event } /> */}
		</div>
	);
}

export default Event;
