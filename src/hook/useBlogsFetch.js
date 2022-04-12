import { useState, useEffect } from 'react';
import axios from 'axios';

export const useBlogsFetch = searchTerm => {
	const [state, setState] = useState({ movies: [] });
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const fetchBlogs = async endpoint => {
		setError(false);
		setLoading(true);
		try {
			const result = await axios.get(endpoint);
			setState({
				...result
			});
		} catch (error) {
			setError(true);
		}
		setLoading(false);
	};
	useEffect(() => {
		const endpoint = `${process.env.REACT_APP_API_URL}/blogs/`;
		fetchBlogs(endpoint);
	}, []);
	useEffect(() => {
		if (!searchTerm) {
			sessionStorage.setItem('homeState', JSON.stringify(state));
		}
	}, [searchTerm, state]);

	return [{ state, loading, error }, fetchBlogs];
};
