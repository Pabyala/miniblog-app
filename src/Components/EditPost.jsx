import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import './EditPostStyle.css'
import axios from 'axios';

export default function EditPost() {
    const history = useNavigate();
    const { id } = useParams();
    const [blogContent, setBlogContent] = useState({
        title: "",
        content: "",
    });

    const handleChange = (e) => {
        setBlogContent({ ...blogContent, [e.target.name]: e.target.value})
    }

    useEffect( () => {
        const miniBlogRow = async () => {
            const getMiniBlogData = await fetch("http://localhost/mini-blog/api-mini-blog/index.php/" + id)
            const resMiniBlogData = await getMiniBlogData.json();
            console.log('edit', resMiniBlogData);
            setBlogContent(resMiniBlogData)
        }
        miniBlogRow();
    }, [id])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!blogContent.title || !blogContent.content){
            console.error("All fields are required.");
            return;
        }


        const blogContentData = {
            id: id,
            title: blogContent.title,
            content: blogContent.content,
        }
        console.log(blogContentData)

        try{
            const response = await axios.put("http://localhost/mini-blog/api-mini-blog/index.php", blogContentData);
            console.log(response.data);
            if(response.data.success){
                setTimeout(() => {
                    history('/dashboard')
                }, 2000)
            }
        } catch (error){
            console.error("Error adding user:", error.response ? error.response.data : error.message);
        }
    }

    return (
        <div className='createPost-form'>
            <Form onSubmit={handleSubmit} className='createPost-input'>
                <Form.Group className="mb-3">
                    <Form.Control 
                        type="text" 
                        placeholder="Enter Title" 
                        name='title' 
                        value={blogContent.title} 
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control 
                        type="text" 
                        placeholder="Enter Content"
                        name='content' 
                        value={blogContent.content} 
                        onChange={handleChange}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Update
                </Button>
            </Form>
        </div>
    )
}
