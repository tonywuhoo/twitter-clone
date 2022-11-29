import React, { forwardRef } from 'react';
import './Post.css';

const Post = forwardRef(({ displayName, username, text, image }, ref) => {
	return (
		<div className='post' ref={ref}>
			<div className='post__avatar'></div>
			<div className='post__body'>
				<div className='post__header'>
					<div className='post__headerText'>
						<h3>
							{displayName}{' '}
							<span className='post__headerSpecial'>{username}</span>
						</h3>
					</div>
					<div className='post__headerDescription'>
						<p>Some text here, this is the simulated tweet content{text}</p>
						<p>Some text here, this is the simulated tweet content{text}</p>
						<p>Some text here, this is the simulated tweet content{text}</p>
						<p>Some text here, this is the simulated tweet content{text}</p>
						<p>Some text here, this is the simulated tweet content{text}</p>
						<p>Some text here, this is the simulated tweet content{text}</p>
						<p>Some text here, this is the simulated tweet content{text}</p>
						<p>Some text here, this is the simulated tweet content{text}</p>
						<p>Some text here, this is the simulated tweet content{text}</p>
						<p>Some text here, this is the simulated tweet content{text}</p>
						<p>Some text here, this is the simulated tweet content{text}</p>
						<p>Some text here, this is the simulated tweet content{text}</p>
						<p>Some text here, this is the simulated tweet content{text}</p>
						<p>Some text here, this is the simulated tweet content{text}</p>
						<p>Some text here, this is the simulated tweet content{text}</p>
						<p>Some text here, this is the simulated tweet content{text}</p>
						<p>Some text here, this is the simulated tweet content{text}</p>
						<p>Some text here, this is the simulated tweet content{text}</p>
						<p>Some text here, this is the simulated tweet content{text}</p>
						<p>Some text here, this is the simulated tweet content{text}</p>
						<p>Some text here, this is the simulated tweet content{text}</p>
						<p>Some text here, this is the simulated tweet content{text}</p>
						<p>Some text here, this is the simulated tweet content{text}</p>
						<p>Some text here, this is the simulated tweet content{text}</p>
						<p>Some text here, this is the simulated tweet content{text}</p>
						<p>Some text here, this is the simulated tweet content{text}</p>
						<p>Some text here, this is the simulated tweet content{text}</p>
						<p>Some text here, this is the simulated tweet content{text}</p>
						<p>Some text here, this is the simulated tweet content{text}</p>
						<p>Some text here, this is the simulated tweet content{text}</p>
						<p>Some text here, this is the simulated tweet content{text}</p>
						<p>Some text here, this is the simulated tweet content{text}</p>
						<p>Some text here, this is the simulated tweet content{text}</p>
					</div>
				</div>
				<img src={image} alt='' />
				<div className='post__footer'></div>
			</div>
		</div>
	);
});

export default Post;
