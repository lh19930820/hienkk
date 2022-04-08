import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div className='d-flex align-items-center justify-content-center h-100 flex-column'>
			<h2 className=' h1'>404</h2>
			<Link to='/'>Back to Home page</Link>
		</div>
	);
};

export default NotFound;
