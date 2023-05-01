import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listPostDetails } from '../../actions/postActions';
import Promotion from '../../components/Promotion';
import Preview from './components/Preview';
import Info from './components/Info';
import Loader from '../../components/Loader';
import Message from '../../components/Message';

function Post() {
	const { _id } = useParams();

	const dispatch = useDispatch();

	const postDetails = useSelector(state => state.postDetails);
	const { error, loading, post } = postDetails;

	useEffect(() => {
		dispatch(listPostDetails(_id)); 
  }, [dispatch, _id]);
	return (
		<div className='container'>
			<Promotion />
			{ loading ? <Loader />
				: error ? <Message variant='danger'>{ error }</Message>
					:
					<Preview post={ post } />
			}
			{/* <Info post={ post } /> */}
		</div>
	);
}

export default Post;
