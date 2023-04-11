import React from "react";
import styled from 'styled-components';
import Impresions from "./Impresions";

function PageContent() {
	return (
		<Wrapper>
			<Impresions />
		</Wrapper>
	);
}

const Wrapper = styled.div`
	margin-top: 16px;
`;

export default PageContent;
