import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/header/Header';
const Layout = ({ children }) => {
	return (
		<>
			<Header/>
			<main className='l-main'>{ children }</main>
		</>
	);
};
Layout.propTypes = {
	children: PropTypes.any
};
export default Layout;
