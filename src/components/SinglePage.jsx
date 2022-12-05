import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SinglePage = () => {
    const { id } = useParams()
    const [post, setPost] = useState(null)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(response => setPost(response))
    }, [id])

    return (
        <div>
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </>
            )}
        </div>
    );
};

export default SinglePage;