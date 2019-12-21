import React from 'react';

const CommentsList = ({ comments }) => (
    <>
    <h3>Comments:</h3>
    <h6>(Add your own below)</h6>
    {comments.map((comment, key) => (
        <div className="comment" key={key}>
            <h4>{comment.username}</h4>
            <p>{comment.text}</p>
        </div>
    ))}
    </>
);

export default CommentsList;