import React from "react";
import { Spinner } from "react-bootstrap";

function Loader() {
	return (
		<Spinner
			animation="border"
			role="status"
			style={{
				display: 'block',
				width: '100px',
				height: '100px',
				margin: 'auto',
			}}
		></Spinner>
	);
}

export default Loader;
