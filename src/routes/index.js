import NotFound from 'components/not-found/NotFound';
import Home from 'pages/home/Home';
import Post from 'pages/post/Post';

const routes = [
	{
		path: '/',
		exact: true,
		component: Home
	},
	{
		path: '/blog/:id',
		exact: true,
		component: <Post/>

	},
	{
		path: '*',
		exact: false,
		component: NotFound
	}
];

export default routes;
