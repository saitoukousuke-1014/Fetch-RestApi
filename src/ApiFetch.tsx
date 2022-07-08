import React, { useState, useEffect } from 'react'
import './App.css';
//import List from './List'

const ApiFetch = () => {

    type postContents = {
        id: number;
        title: string;
    };

    const [posts, setPosts] = useState<postContents[]>([]);

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
            <ul className="list">
                {
                    posts.map(post =>
                        <li key={post.id}>
                            {post.title}
                        </li>)
                }
            </ul>
        </div>
    )
}

export default ApiFetch