import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { listPosts } from '../../../actions/postActions';
import styled from 'styled-components';
import ImpressionCard from './ImpressionCard';
import Loader from '../../../components/Loader';
import Message from '../../../components/Message';
import Button from '../../../components/Button';

function Impresions() {
	const [query, setQuery] = useState('Стендап');
	const [results, setResults] = useState([]);

	const dispatch = useDispatch();
	
	const postList = useSelector(state => state.postList);
	const { error, loading, posts } = postList;

  useEffect(() => {
		dispatch(listPosts());
  }, [dispatch]);

	const handleSubmit = (e) => {
    e.preventDefault();
    axios.get('/api/post/search/', { params: { q: query } })
      .then(response => setResults(response.data.results));
  };

	window.onload = function () {
		var card = document.getElementsByClassName('impression-card');
		var btn = document.getElementById('button');
		for (let i = 16; i < card.length; i++) {
			card[i].style.display = 'none';
		}

		var countD = 16;
		btn.addEventListener('click', function() {
			var card = document.getElementsByClassName('impression-card');
			countD += 16;
			if (countD <= card.length) {
				for (let i = 0; i < countD; i++) {
					card[i].style.display = 'block';
				}
			}
		})
	}
	return (
		<Wrapper>
			{ loading ? <Loader />
				: error ? <Message variant='danger'>{ error }</Message>
					:
					<div className='impression-items'>
						{ posts?.map(item => 
							<ImpressionCard post={ item } />
						) }
					</div>
			}
			<Button text={ 'Показать еще' } />
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
