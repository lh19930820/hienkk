import React, { useState, useEffect } from 'react';
import './Form.scss';
import axios from 'axios';

import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import dummyImg from 'assets/images/not-found.png';

const Form = ({ post }) => {
	const editMode = post;
	console.log(typeof (editMode));

	const [postImg, setPostImg] = useState('');
	const { register, handleSubmit, getValues, setValue, formState: { errors } } = useForm();
	useEffect(() => {
		if (editMode) {
			setValue('title', post?.title);
			setValue('content', post?.content);
			setValue('image', post?.image?.url || dummyImg);
		}
	}, [post]);
	const handlePostForm = async (values) => {
		var formData = new FormData();
		formData.append('blog[title]', values.title);
		formData.append('blog[content]', values.content);
		formData.append('blog[image]', values.image);
		return editMode
			? updatePost(formData)
			: createPost(formData);
	};

	const updatePost = async (data) => {
		console.log(`${process.env.REACT_APP_API_URL}/blogs/${post.id}`);
		const result = await axios.put(`${process.env.REACT_APP_API_URL}/blogs/${post.id}`, data);
		console.log(result);
	};
	const createPost = async (data) => {
		const result = await axios.post(`${process.env.REACT_APP_API_URL}/blogs`, data);
		console.log(result);
	};
	return (
		<div className='col-md-8 pl-0 pr-0 mx-auto p-3 mt-5 mb-md-5 form-post rounded-lg'>
			<h3 className='h3'>{editMode ? 'Edit Post' : 'Add Post'}</h3>
			<form onSubmit={handleSubmit(handlePostForm)}>
				<div className='form-group'>
					<div className='img-upload p-3 my-4 mx-auto rounded-lg'>
						<img src={postImg || getValues('image')} alt=''/>
						<label className='img-upload__label' htmlFor='img-upload'>
							<input id='img-upload' className='img-upload__input' type='file' {...register('image')} accept='.jpg,.jpeg,.png,.svg' onChange={(e) => setPostImg(e.target.value)}/>
							Add image
						</label>
					</div>
				</div>
				<div className='form-group'>
					<label htmlFor='formGroupExampleInput'>Title</label>
					<input {...register('title', { required: true })} type='text' className='form-control' placeholder='Post title...'/>
					{errors.title && <span className='text-danger mt-1 d-block'>This field is required</span>}
				</div>
				<div className='form-group'>
					<label htmlFor='formGroupExampleInput2'>Content</label>
					<input {...register('content', { required: true })} type='text' className='form-control' placeholder='Post content...'/>
					{errors.content && <span className='text-danger mt-1 d-block'>This field is required</span>}
				</div>
				<div className='form-group'>
					<button className='btn btn-success w-100' type='submit'>{editMode ? 'Edit Post' : 'Add New'}</button>
				</div>

			</form>
		</div>
	);
};
Form.propTypes = {
	post: PropTypes.object

};
export default Form;
