import React, { Component } from 'react';
import './index.css';  
class BookDetails extends Component {
  render() {
    return (
      <div className="book-details-container">
        <h1 className="book-details-heading">Book Details</h1>
        <p className="book-details-description">
          This is the details of the book.
        </p>
      </div>
    );
  }
}
export default BookDetails;