import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ setSortTerm, sort, sortTerm, setSearchTerm }) => {
	return (
		<select className='custom-select w-100' onChange={(e) => {setSortTerm(e.target.value); setSearchTerm('');}}>
			{sort.map((item, index) =>
				<option key={index} selected={item.name === sortTerm}>{item.name}</option>
			)}
		</select>
	);
};
Filter.propTypes = {
	setSearchTerm: PropTypes.func,
	setSortTerm: PropTypes.func,
	sortTerm: PropTypes.string,
	sort: PropTypes.array
};
export default Filter;
