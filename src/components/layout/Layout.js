import React from 'react';
import PropTypes from 'prop-types';
const Layout = ({ children }) => {
	return (
		<>
			<main className='l-main'>{ children }</main>
		</>
	);
};
Layout.propTypes = {
	children: PropTypes.any
};
export default Layout;
