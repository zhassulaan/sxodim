import React from "react";
import styled from "styled-components";

function Button({ text, event }) {
	return (
		<Wrapper>
			<button id="button" onClick={ event }>
				{ text }
			</button>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	padding: 0px 16px;

	button {
		display: flex;
    justify-content: center;
    align-items: center;
		min-width: 192px;
    min-height: 48px;
    line-height: 20px;
    font-size: 14px;
    background: rgb(255, 255, 255);
    color: rgb(236, 102, 82);
    border: 1px solid rgb(236, 102, 82);
    border-radius: 4px;
	}
`;

export default Button;
