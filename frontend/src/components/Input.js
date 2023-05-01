import React from 'react';

function Input({ type, name, classname, value, placeholder, action }) {
	return (
		<input
			type={ type }
			name={ name }
			id={ name }
			className={ classname }
			value={ value }
			placeholder={ placeholder }
			onChange={ action }
		/>
	);
}

export default Input;
