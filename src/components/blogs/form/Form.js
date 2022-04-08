import React from 'react';
import './Form.scss';
import dummy from 'assets/images/not-found.png';

const Form = () => {
	return (
		<div className='col-md-8 pl-0 pr-0 mx-auto p-3 mt-5 mb-md-5 form-post rounded-lg'>
			<h3 className='h3'>Add Post</h3>
			<form>
				<div className='form-group'>
					<div className='img-upload p-3 my-4 mx-auto rounded-lg'>
						<img src={dummy} alt=''/>
						<label className='img-upload__label' htmlFor='img-upload'>
							<input id='img-upload' className='img-upload__input' type='file'/>
							Add image
						</label>
					</div>
				</div>
				<div className='form-group'>
					<label htmlFor='formGroupExampleInput'>Title</label>
					<input type='text' className='form-control' placeholder='Post title...'/>
				</div>
				<div className='form-group'>
					<label htmlFor='formGroupExampleInput2'>Content</label>
					<input type='text' className='form-control' placeholder='Post content...'/>
				</div>
				<div className='form-group'>
					<button className='btn btn-success w-100'>Add New</button>
				</div>

			</form>
		</div>
	);
};

export default Form;
