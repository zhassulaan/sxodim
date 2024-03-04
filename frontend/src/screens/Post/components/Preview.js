import React from "react";
import styled from 'styled-components';

function Info({ post }) {
	return (
		<Wrapper>
			<div className="post_top-image">
				<img src={ post.main_image } alt="main" />
			</div>
			<div className="post_top-info">
				<div className="post_top-info-category_wrapper">
					<a href="https://sxodim.com/almaty/events/vystavki" className="post_top-info-category">{ post.category }</a>
					<p className="post_top-info-views">{ post.views }</p>
				</div>
				<h1 className="post_top-info-title">{ post.title }</h1>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	position: relative;	
	height: 410px;
	margin: 25px -46px 27px;
	
	.post_top-image {
		height: 100%;
		border-radius: 12px;
		overflow: hidden;
	}
	
	.post_top-image,
	.post_top-image img {
		display: block;
    width: 100%;
		object-fit: cover;
	}

	.post_top-image:after {
		content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
		background: linear-gradient(180deg, rgba(0, 0, 0, 0) 12.99%, #000000 69.25%);
    border-radius: 12px;
		opacity: 0.7;
    z-index: 1;
	}

	.post_top-info {
		position: absolute;
		left: 46px;
    bottom: 50px;
    display: flex;
		flex-direction: column;
    align-items: flex-start;
    width: 658px;
		letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--clr-white);
    z-index: 1;
	}
	
	.post_top-info-category_wrapper {
		display: flex;
		height: 17.5px;
		font-size: 13px;
		font-weight: 500;
    margin-bottom: 4px;
	}
	
	.post_top-info-views {
		color: #ccc;
		margin-left: 25px;
	}
	
	.post_top-info-title {
    line-height: 33px;
		font-size: 28px;
    font-weight: 900;
	}
`;

export default Info;
