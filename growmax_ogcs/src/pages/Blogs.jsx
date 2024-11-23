import React from 'react';
import './Blogs.css';
import book1 from '../assets/book.jpg';
import book2 from '../assets/book.jpg';
import book3 from '../assets/book.jpg';
import book4 from '../assets/book.jpg';
import book5 from '../assets/book.jpg';

const Blogs = () => {
    return (
        <section className="best-selling-books">
            <h2>Blogs</h2>
            <div className="books-container">
                {[book1, book2, book3, book4, book5].map((book, index) => (
                    <div key={index} className="book">
                        <img src={book} alt={`Book ${index + 1}`} className="book-image" />
                        <button className="buy-button">Buy Now</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Blogs;
