import React, { useState, useEffect } from 'react'
import './App.css';

const ApiFetch = () => {

    type postContents = {
        id: number;
        title: string;
    };

    const [posts, setPosts] = useState<postContents[]>([]);

    const PostItems = posts.map(post =>
        <li key={post.id}>
            {post.title}
        </li>
    );

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts', { method: 'GET' })
            .then(res => res.json())
            .then(data => {
                setPosts(data)
                console.log(data)
            })
    }, [])

    return (
        <div>
            <ul>
                {PostItems}
            </ul>
        </div>
    )
}


export default ApiFetch