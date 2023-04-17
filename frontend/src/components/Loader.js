import React from "react";
import { Spinner } from "react-bootstrap";

function Loader() {
	return (
		<Spinner
			animation="border"
			role="stat"
			style={{
				display: 'block',
				width: '100px',
				height: '100px',
				margin: 'auto',
			}}
		>
			<span className="sr-only">Loading...</span>
		</Spinner>
	);
}

export default Loader;
