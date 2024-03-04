import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listPostDetails } from '../../actions/postActions';
import Promotion from '../../components/Promotion';
import Preview from './components/Preview';
// import Info from './components/Info';
import Loader from '../../components/Loader';
import Message from '../../components/Message';

function Post() {
	const { _id } = useParams();

	const dispatch = useDispatch();

	const userLogin = useSelector(state => state.userLogin);
	const { userInfo } = userLogin;
	
	
	const postDetails = useSelector(state => state.postDetails);
	const { error, loading, post } = postDetails;

	const userList = JSON.parse(localStorage.getItem('user_list'));
	const user = userList.find(item => item.id === userInfo.id)
	
	// let newData = {};
	
	// if (user.last_viwed === [] || !user.last_viwed.includes(_id)) {
	// 	user.last_viwed.add(_id);
	// } else {
	// 	const temp = user.last_viwed.filter(item => item !== _id)
	// 	user = temp;
	// 	user.last_viwed.add(_id);
	// }
	// console.log(user);

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
