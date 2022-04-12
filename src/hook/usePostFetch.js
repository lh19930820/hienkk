import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export const usePostFetch = postId => {
	const [state, setState] = useState({});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const fetchData = useCallback(async () => {
		setError(false);
		setLoading(true);
		try {
			const endpoint = `${process.env.REACT_APP_API_URL}/blogs/${postId}`;
			const result = await axios.get(endpoint);
			setState({
				...result
			});
		} catch (error) {
			setError(true);
		}
		setLoading(false);
	}, [postId]);

	useEffect(() => {
		if (localStorage[postId]) {
			setState(JSON.parse(localStorage[postId]));
			setLoading(false);
		} else {
			fetchData();
		}
	}, [fetchData, postId]);

	useEffect(() => {
		localStorage.setItem(postId, JSON.stringify(state));
	}, [postId, state]);
	return [state, loading, error];
};
