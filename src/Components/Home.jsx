import React, { useEffect, useState } from 'react'
import './HomeStyle.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Home() {

    const [blogData, setBlogData] = useState([])

    useEffect( ()=> {
        fethMiniBlogData();
    }, [])

    const fethMiniBlogData = async () => {
        try {
            const reqData = await fetch("http://localhost/mini-blog/api-mini-blog/index.php");
            const resData = await reqData.json();
            console.log(resData);
            setBlogData(resData);
        } catch (error) {
            console.error("Error fetching employee data:", error);
        }
    }

    const handleDelete = async (id) => {
        try {
            const ress = await axios.delete("http://localhost/mini-blog/api-mini-blog/index.php/" + id);
            console.log(ress.data)
            fethMiniBlogData();
        } catch (error) {
            console.error("Error fetching employee data:", error);
        }
    }
    return (
        <div>
            <div className="post">

                {blogData.length > 0 ?
                
                blogData.map((blog) => 
                    <div className="blog-content" key={blog.id}>
                        <div className="title-content">
                            <h4 className="blog-title">{blog.title}</h4>
                            <span className='blog-content'>{blog.content}</span>
                        </div>

                        <div className="delete-edit">
                            <button className='btn-delete' onClick={ () => handleDelete(blog.id)}>Delete</button>
                            <Link className='toEdit' to={"/edit-post/"+ blog.id}>Edit</Link>
                        </div>
                    </div>
                ) :
                <p>Empty</p>
                }
            </div>
            <Link className='toCreatePost' to='/create-post'>CREATE NEW POST</Link>
        </div>
    )
}
