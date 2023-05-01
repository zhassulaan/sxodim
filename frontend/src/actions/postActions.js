import axios from 'axios';
import {
	POST_LIST_REQUEST,
	POST_LIST_SUCCESS,
	POST_LIST_FAIL,
	POST_DETAILS_REQUEST,
	POST_DETAILS_SUCCESS,
	POST_DETAILS_FAIL,
	// POST_ADD_REQUEST,
	// POST_ADD_SUCCESS,
	// POST_ADD_FAIL,
	// POST_DELETE_REQUEST,
	// POST_DELETE_SUCCESS,
	// POST_DELETE_FAIL,
} from '../constants/postConstants';

export const listPosts = () => async (dispatch) => {
	try {
		dispatch({ type: POST_LIST_REQUEST });

		const { data } = await axios.get('/api/post/');
		
		dispatch({
			type: POST_LIST_SUCCESS,
			payload: data,
		});

	} catch (error) {
		dispatch({
			type: POST_LIST_FAIL,
			payload: error.response && error.response.data.detail
			 ? error.response.data.detail
			 : error.message,
		});
	}
}

export const listPostDetails = (_id) => async (dispatch) => {
	try {
		dispatch({ type: POST_DETAILS_REQUEST });

		const { data } = await axios.get(`/api/post/${_id}`);
		
		dispatch({
			type: POST_DETAILS_SUCCESS,
			payload: data,
		});
		
	} catch (error) {
		dispatch({
			type: POST_DETAILS_FAIL,
			payload: error.response && error.response.data.detail
			 ? error.response.data.detail
			 : error.message,
		});
	}
}

// export const addNewEvent = (id, title, category, date, time, location, address, image, phone, price) => async (dispatch) => {
// 	try {
// 		dispatch({ type: EVENT_ADD_REQUEST });

// 		const config = {
// 			headers: {
// 				'Content-type': 'application/json',
// 			}
// 		}

// 		const { data } = await axios.post(
// 			'/api/event/add/',
// 			{ 'id': id,
// 				'title': title,
// 				'category': category,
// 				'date': date,
// 				'time': time,
// 				'location': location,
// 				'address': address,
// 				'image': image,
// 				'phone': phone,
// 				'price': price,
// 			},
// 			config,
// 		);
		
// 		dispatch({
// 			type: EVENT_ADD_SUCCESS,
// 			payload: data,
// 		});
		
// 	} catch (error) {
// 		dispatch({
// 			type: EVENT_ADD_FAIL,
// 			payload: error.response && error.response.data.detail
// 			 ? error.response.data.detail
// 			 : error.message,
// 		});
// 	}
// }

// export const deleteEvent = (id) => async (dispatch) => {
// 	try {
// 		dispatch({ type: EVENT_DELETE_REQUEST });

// 		const config = {
// 			headers: {
// 				'Content-type': 'application/json',
// 			}
// 		}

// 		const { data } = await axios.delete(
// 			`/api/event/delete/${id}`,
// 			config,
// 		);
		
// 		dispatch({
// 			type: EVENT_DELETE_SUCCESS,
// 			payload: data,
// 		});
		
// 	} catch (error) {
// 		dispatch({
// 			type: EVENT_DELETE_FAIL,
// 			payload: error.response && error.response.data.detail
// 			 ? error.response.data.detail
// 			 : error.message,
// 		});
// 	}
// }

