import Form from 'components/blogs/form/Form';
import Filter from 'components/blogs/filter/Filter';
import Search from 'components/blogs/search/Search';
import Layout from 'components/layout/Layout';
import Pagination from 'components/pagination/Pagination';
import React, { useEffect, useState } from 'react';
import BlogItem from '../../components/blogs/item/BlogItem';
import Spinner from 'components/spinner/Spinner';

import { useBlogsFetch } from 'hook/useBlogsFetch';
const Blogs = () => {
	const [showForm, setShowForm] = useState(false);
	const [post, setPost] = useState(null);
	const [searchTerm, setSearchTerm] = useState('');
	const [sortTerm, setSortTerm] = useState('created_at');
	const [orderBy, setOrderBy] = useState('desc');
	const [currentPage, setCurrentPage] = useState(1);
	const [
		{
			state,
			loading,
			error
		},
		fetchBlogs
	] = useBlogsFetch(searchTerm);

	const sort = [
		{ id: 1, name: 'id' },
		{ id: 2, name: 'title' },
		{ id: 3, name: 'created_at' },
		{ id: 4, name: 'content' },
		{ id: 5, name: 'updated_at' }
	];

	const searchBlogs = (keyWord) => {
		setSearchTerm(keyWord);
		fetchBlogs(`${process.env.REACT_APP_API_URL}/blogs?search=${keyWord}`);
	};

	const editPost = (post) => {
		setShowForm(true);
		setPost(post);
	};
	useEffect(() => {
		fetchBlogs(`${process.env.REACT_APP_API_URL}/blogs?page=${currentPage}`);
	}, [currentPage]);

	useEffect(() => {
		fetchBlogs(`${process.env.REACT_APP_API_URL}/blogs?sort_by=${sortTerm}`);
	}, [sortTerm]);

	if (error) return <div className='container py-4'>Something went wrong ...</div>;
	if (loading) return <Spinner/>;
	return (
		<Layout>
			<div className='container h-100 py-5 mt-4'>
				<div className='row'>
					<div className='col-lg-4'><h2 className='h1 mb-3 mb-lg-0'>The Blog</h2></div>
					<div className='col-lg-8'>
						<div className='row'>
							<div className='col-lg-7 pr-lg-0'>
								<Search callback={searchBlogs} searchTerm={searchTerm}/>
							</div>
							<div className='col-lg-3 mt-2 mt-lg-0'>
								<Filter sort={sort} setSortTerm={setSortTerm} sortTerm={sortTerm} setSearchTerm={setSearchTerm}/>
							</div>
							<div className='col-lg-2 pl-lg-0 mt-2 mt-lg-0'>
								<button onClick={() => {setShowForm(!showForm); setPost({});}} className='btn btn-success w-100'>Add post</button>
							</div>
						</div>
					</div>
				</div>
				{showForm && <Form post={post}/>}
				<div className='d-flex flex-column'>
					<ul className='list-unstyled pt-5 flex-1 mb-4'>
						{
							state.data.data.items.length > 0
								? state.data.data.items.map((item, index) =>
									<BlogItem key={index} data={item} editPost = {editPost}/>
								)
								: <li className='text-center'>There are no posts yet</li>
						}
					</ul>
					{state.data.pagination.total > 1 && <Pagination pagination={state.data.pagination} setCurrentPage={setCurrentPage}/>}
				</div>
			</div>
		</Layout>
	);
};

export default Blogs;
