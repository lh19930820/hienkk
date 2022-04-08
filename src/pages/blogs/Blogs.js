import Form from 'components/blogs/form/Form';
import Filter from 'components/blogs/filter/Filter';
import Search from 'components/blogs/search/Search';
import Layout from 'components/layout/Layout';
import Pagination from 'components/pagination/Pagination';
import React from 'react';
import BlogItem from '../../components/blogs/item/BlogItem';
const Blogs = () => {
	return (
		<Layout>
			<div className='container h-100 py-5 mt-4'>
				<div className='row'>
					<div className='col-lg-4'><h2 className='h1 mb-3 mb-lg-0'>The Blog</h2></div>
					<div className='col-lg-8'>
						<div className='row'>
							<div className='col-lg-7 pr-lg-0'>
								<Search/>
							</div>
							<div className='col-lg-3 mt-2 mt-lg-0'>
								<Filter/>
							</div>
							<div className='col-lg-2 pl-lg-0 mt-2 mt-lg-0'>
								<button className='btn btn-success w-100'>Add post</button>
							</div>
						</div>
					</div>
				</div>
				<Form/>
				<div className='d-flex flex-column'>
					<ul className='list-unstyled pt-5 flex-1 mb-4'>
						<BlogItem/>
						<BlogItem/>
						<BlogItem/>
						<BlogItem/>
						<BlogItem/>
						<BlogItem/>
						<BlogItem/>
						<BlogItem/>
						<BlogItem/>
					</ul>
					<Pagination/>
				</div>
			</div>
		</Layout>
	);
};

export default Blogs;
