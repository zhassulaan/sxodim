import React from "react";
import styled from 'styled-components';
import Promotion from "./components/Promotion.js";
import SpecialDates from "./components/SpecialDates.js";
import Impression from "./components/Impression.js";

function Home() {
	return (
		<Wrapper className="container">
			<Promotion />
			<SpecialDates />
			<Impression />
		</Wrapper>
	);
}

const Wrapper = styled.div`
	padding-bottom: 50px;
`;

export default Home;
