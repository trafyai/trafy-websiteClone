"use client";

import React, { useEffect, useState } from "react";
import '@styles/blog/BlogLanding.css';
import Link from "next/link";
import Image from "next/image";

export default function BlogLanding() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5002/api/blogs/getAllBlogs')
            .then(response => response.json())
            .then(data => setBlogs(data))
            .catch(error => console.error('Error fetching blogs:', error));
    }, []);

    return (
        <main>
            <div className="blog-landing-page">
                <div className="blog-landing-container">
                    {blogs.length === 0 ? (
                        <p>LOADING</p>
                    ) : (
                        blogs.map((item, index) => (
                            <div className="blog-landing-card" key={index}>
                                <Link href={`/blogs/${item.id}`} className="blog-landing-card-inner">
                                    <div className="blog-landing-card-image" style={{ backgroundColor: item.bgColor }}>
                                        <Image src={item.image} alt={item.alt} width={600} height={400} />
                                    </div>
                                    <div className="blog-landing-card-content">
                                        <div className="blog-landing-card-category">
                                            <h1>{item.category}</h1>
                                            <p>{item.read}</p>
                                        </div>
                                        <div className="blog-landing-card-heading">
                                            <h1>{item.title}</h1>
                                        </div>
                                        <div className="blog-landing-card-description">
                                            <p>{item.description}</p>
                                        </div>
                                        <div className="blog-landing-card-author">
                                            <p>{item.author}</p>
                                            <p>{item.date}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </main>
    );
}
