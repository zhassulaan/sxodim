import React from "react";
import styled from "styled-components";
import Promotion from "../../components/Promotion.js";
import SpecialDates from "./components/SpecialDates.js";
import Impression from "./components/ImpressionBest.js";
import PageContent from "./components/PageContent.js";

function HomeScreen() {
	return (
		<Wrapper className="container">
			<Promotion />
			<SpecialDates />
			<Impression />
			<PageContent />
		</Wrapper>
	);
}

const Wrapper = styled.div`
	max-width: 1152px;
	padding-bottom: 50px;
`;

export default HomeScreen;
