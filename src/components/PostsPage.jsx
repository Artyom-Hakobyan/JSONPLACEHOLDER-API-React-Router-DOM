import React, { useContext, useEffect, useState } from 'react';
import { CustomContext } from '../contexts/CustomContext';
import { Link } from 'react-router-dom';

const PostsPage = (props) => {
    const [posts, setPosts] = useState([])
    const fullName = useContext(CustomContext)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(response => setPosts(response))
    }, [])

    return (
        <div>
            <h1>Here are the Posts of {fullName}</h1>
            {
                posts.filter(el => el.userId === props.passedUserData
                    .filter(el => el.name === fullName)[0].id).map(post => (
                        <Link key={post.id} to={`/posts/${post.id}`}>
                            <li>{post.title}</li>
                        </Link>
                    ))
            }
        </div>
    );
};

export default PostsPage;