import React from "react";
import styled from 'styled-components';
import Filter from "./Filter";
import Impresions from "./Impresions";

function PageContent() {
	return (
		<Wrapper>
			<Filter />
			<Impresions />
		</Wrapper>
	);
}

const Wrapper = styled.div`
	margin-top: 16px;
`;

export default PageContent;
