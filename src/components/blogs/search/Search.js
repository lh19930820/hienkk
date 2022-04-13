import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

const Search = React.memo(({ callback, searchTerm }) => {
	const [state, setState] = useState(searchTerm);
	const timeOut = useRef(null);

	const doSearch = event => {
		const { value } = event.target;

		clearTimeout(timeOut.current);
		setState(value);

		timeOut.current = setTimeout(() => {
			callback(value);
		}, 500);
	};

	return (
		<div className='input-group'>
			<input type='text'
				className='form-control'
				placeholder='Search Movie'
				onChange={doSearch}
				value={state}/>
		</div>
	);
});
Search.propTypes = {
	callback: PropTypes.func,
	searchTerm: PropTypes.string
};
Search.displayName = 'Search';
export default Search;
