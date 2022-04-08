import React from 'react';
import dummy from 'assets/images/not-found.png';
import './BlogItem.scss';
const BlogItem = () => {
	return (
		<li className='mb-3'>
			<a href='#' className='media text-decoration-none rounded-lg' title='View'>
				<div className='media__img mr-3 mt-1'>
					<img src={dummy} alt='image' />
				</div>
				<div className='media-body'>
					<h5 className='mt-0 mb-1'>List-based media object</h5>
					<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
				</div>
				<div className='media__btn ml-4'>
					<button className='btn btn-warning mr-2'>Edit</button>
					<button className='btn btn-danger'>Delete</button>
				</div>
			</a>
		</li>
	);
};

export default BlogItem;
