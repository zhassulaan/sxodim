import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
// import { listEvents, addNewEvent, deleteEvent } from '../../actions/eventActions';
import Button from '../../components/Button';
import Loader from '../../components/Loader';
import Message from '../../components/Message';

function Editer() {
	const [id, setId] = useState('');
	const [title, setTitle] = useState('');
	const [category, setCategory] = useState('');
	const [date, setDate] = useState('');
	const [time, setTime] = useState('');
	const [location, setLocation] = useState('');
	const [address, setAddress] = useState('');
	const [image, setImage] = useState('');
	const [phone, setPhone] = useState('');
	const [price, setPrice] = useState('');

	const dispatch = useDispatch();

	const eventList = useSelector(state => state.eventList);
	const { loading, error, events } = eventList;
	
	const eventAdd = useSelector(state => state.eventAdd);
	const { event } = eventAdd;
	
	const eventDelete = useSelector(state => state.eventDelete);
	const { success } = eventDelete;
	
	const userLogin = useSelector(state => state.userLogin);
	const { userInfo } = userLogin;

	// useEffect(() => {
	// 	if (userInfo && userInfo.isAdmin) {
	// 		dispatch(listEvents());
	// 	}
	// }, [dispatch]);

	// const addHandler = () => {
	// 	dispatch(addNewEvent(id, title, category, date, time, location, address, image, phone, price));
	// }
	
	// const deleteHandler = (id) => {
	// 	dispatch(deleteEvent(id));
	// }

	return (
		<Wrapper>
			{ (userInfo && userInfo.isAdmin) ? <h1>Events</h1> : <h1 className='error'>Error</h1> }
			{ loading
				? <Loader />
				: error
					? (<Message variant="danger">{ error }</Message>)
			   : (userInfo && userInfo.isAdmin) ?
					<table>
							<thead>
								<th>ID</th>
								<th>TITLE</th>
								<th>CATEGORY</th>
								<th>DATE</th>
								<th>TIME</th>
								<th>LOCATION</th>
								<th>ADDRESS</th>
								<th>IMAGE</th>
								<th>PHONE</th>
								<th>PRICE</th>
							</thead>
							<tbody>
								<tr>
									<td>
										<input
											type="text"
											name="id"
											placeholder="id"
											value={ id }
											id="id"
											onChange={ (e) => setId(e.target.value) }
										/>
									</td>
									<td>
										<input
											type="text"
											name="title"
											placeholder="title"
											value={ title }
											id="title"
											onChange={ (e) => setTitle(e.target.value) }
										/>
									</td>
									<td>
										<input
											type="text"
											name="category"
											placeholder="category"
											value={ category }
											id="category"
											onChange={ (e) => setCategory(e.target.value) }
										/>
									</td>
									<td>
										<input
											type="text"
											name="date"
											placeholder="date"
											value={ date }
											id="date"
											onChange={ (e) => setDate(e.target.value) }
										/>
									</td>
									<td>
										<input
											type="text"
											name="time"
											placeholder="time"
											value={ time }
											id="time"
											onChange={ (e) => setTime(e.target.value) }
										/>
									</td>
									<td>
										<input
											type="text"
											name="location"
											placeholder="location"
											value={ location }
											id="location"
											onChange={ (e) => setLocation(e.target.value) }
										/>
									</td>
									<td>
										<input
											type="text"
											name="address"
											placeholder="address"
											value={ address }
											id="address"
											onChange={ (e) => setAddress(e.target.value) }
										/>
									</td>
									<td>
										<input
											type="file"
											name="image"
											placeholder="image"
											value={ image }
											id="image"
											onChange={ (e) => setImage(e.target.value) }
										/>
									</td>
									<td>
										<input
											type="text"
											name="phone"
											placeholder="phone"
											value={ phone }
											id="phone"
											onChange={ (e) => setPhone(e.target.value) }
										/>
									</td>
									<td>
										<input
											type="text"
											name="price"
											placeholder="price"
											value={ price }
											id="price"
											onChange={ (e) => setPrice(e.target.value) }
										/>
									</td>
									{/* <td onClick={ () => addHandler() }>+</td> */}
								</tr>
								{ events.map (event => (
									<tr key={event.id}>
										<td>
											<input
												type="text"
												name="id"
												placeholder="id"
												value={ event.id }
												id="id"
												onChange={ (e) => setId(e.target.value) }
											/>
										</td>
										<td>
											<input
												type="text"
												name="title"
												placeholder="title"
												value={ event.title }
												id="title"
												onChange={ (e) => setTitle(e.target.value) }
											/>
										</td>
										<td>
											<input
												type="text"
												name="category"
												placeholder="category"
												value={ event.category }
												id="category"
												onChange={ (e) => setCategory(e.target.value) }
											/>
										</td>
										<td>
											<input
												type="text"
												name="date"
												placeholder="date"
												value={ event.date }
												id="date"
												onChange={ (e) => setDate(e.target.value) }
											/>
										</td>
										<td>
											<input
												type="text"
												name="time"
												placeholder="time"
												value={ event.time }
												id="time"
												onChange={ (e) => setTime(e.target.value) }
											/>
										</td>
										<td>
											<input
												type="text"
												name="location"
												placeholder="location"
												value={ event.location }
												id="location"
												onChange={ (e) => setLocation(e.target.value) }
											/>
										</td>
										<td>
											<input
												type="text"
												name="address"
												placeholder="address"
												value={ event.address }
												id="address"
												onChange={ (e) => setAddress(e.target.value) }
											/>
										</td>
										<td>
											<input
												type="text"
												name="image"
												placeholder="image"
												value={ event.image }
												id="image"
												onChange={ (e) => setImage(e.target.value) }
											/>
										</td>
										<td>
											<input
												type="text"
												name="phone"
												placeholder="phone"
												value={ event.phone }
												id="phone"
												onChange={ (e) => setPhone(e.target.value) }
											/>
										</td>
										<td>
											<input
												type="number"
												name="price"
												placeholder="price"
												value={ event.price }
												id="price"
												onChange={ (e) => setPrice(e.target.value) }
											/>
										</td>
										{/* <td onClick={ () => deleteHandler(event.id) }>x</td> */}
									</tr>
								))}
							</tbody>
						</table>
							:
						null
			}
			
			{/* <Button text={ "Изменить" } event={ submitHandler } /> */}
		</Wrapper>
	);
}

const Wrapper = styled.div`
	margin: 64px 0;

	table {
		width: 95vw;
		margin: 32px auto 0;
	}

	table, td, th {
		border: 1px solid black;
	}

	thead {
		background: var(--clr-grey-1);
	}

	th, td {
		max-width: 140px;
	}

	td:last-child {
		padding: 0 5px;
		cursor: pointer;
	}
	
	input {
		width: 100%;
		border: none;
		font-size: 12px;
	}

	.error {
		width: 100vw;
		text-align: center;
		padding: 120px 0;
	}
`;

export default Editer;
