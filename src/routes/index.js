import NotFound from 'pages/not-found/NotFound';
import Post from 'pages/post/Post';
import Blogs from 'pages/blogs/Blogs';
import {
	Navigate
} from 'react-router-dom';

const routes = [
	{
		path: '/',
		exact: true,
		component: <Navigate to='/blogs' replace />
	},
	{
		path: '/blogs',
		exact: true,
		component: <Blogs/>
	},
	{
		path: '/blog/:id',
		exact: true,
		component: <Post/>

	},
	{
		path: '*',
		exact: false,
		component: <NotFound/>
	}
];

export default routes;
