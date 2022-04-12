import React from 'react';
import PropTypes from 'prop-types';
const Pagination = ({ pagination, setCurrentPage }) => {
	const getPaginationGroup = () => {
		const start = Math.floor((pagination.page - 1) / pagination.offset) * pagination.offset;
		return new Array(pagination.total).fill().map((_, idx) => start + idx + 1);
	};
	return (
		<nav aria-label='...'>
			<ul className='pagination'>
				<li className={`page-item ${pagination.prev || 'disabled'}`}>
					<button onClick={() => setCurrentPage(pagination.page - 1)} className='page-link' tabIndex='-1' aria-disabled='true'>Previous</button>
				</li>
				{
					getPaginationGroup().map((item, index) =>
						<li key={index} className={`page-item ${pagination.page === item && `active`}`}>
							<button onClick={() => setCurrentPage(item)} className='page-link'>{item}</button>
						</li>
					)
				}
				<li className={`page-item ${pagination.next || 'disabled'}`}>
					<button onClick={() => setCurrentPage(pagination.page + 1)} className='page-link'>Next</button>
				</li>
			</ul>
		</nav>
	);
};
Pagination.propTypes = {
	pagination: PropTypes.object,
	setCurrentPage: PropTypes.func

};
export default Pagination;
