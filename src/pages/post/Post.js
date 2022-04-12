import Layout from 'components/layout/Layout';
import React from 'react';
import { useParams } from 'react-router-dom';
import { usePostFetch } from 'hook/usePostFetch';
import Spinner from 'components/spinner/Spinner';
import dummy from 'assets/images/not-found.png';

const Post = () => {
	const { id } = useParams();
	const [state, loading, error] = usePostFetch(id);
	if (error) return <div className='container py-4'>Something went wrong ...</div>;
	if (loading) return <Spinner/>;
	return (
		<Layout>
			<div className='container py-4'>
				<h1 className='h2'>{state.data.data.title}</h1>
				<div className='post-content'>{state.data.data.content}</div>
				<img className='mw-100 mt-4' src={state.data.data.image?.url || dummy }/>
			</div>
		</Layout>
	);
};

export default Post;

