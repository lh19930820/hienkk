import React from 'react';
import dummy from 'assets/images/not-found.png';
import './BlogItem.scss';
import PropTypes from 'prop-types';

const BlogItem = ({ data, editPost }) => {
	const { image, content, title } = data;
	return (
		<li className='mb-3'>
			<a href='#' className='media text-decoration-none rounded-lg' title='View'>
				<div className='media__img mr-3 mt-1'>
					<img src={image?.url || dummy} alt='image' />
				</div>
				<div className='media-body'>
					<h5 className='mt-0 mb-1'>{title}</h5>
					<p className='media__content'>{content}</p>
				</div>
				<div className='media__btn ml-4'>
					<button type='button' className='btn btn-warning mr-2' onClick={() => editPost(data)}>Edit</button>
					{/* <button className='btn btn-danger'>Delete</button> */}
				</div>
			</a>
		</li>
	);
};
BlogItem.propTypes = {
	data: PropTypes.object,
	editPost: PropTypes.func

};
export default BlogItem;
