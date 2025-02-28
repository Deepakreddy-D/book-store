import React, { Component } from 'react';
import './index.css';
class BookList extends Component {
  render() {
    return (
      <div className="book-list-container">
        <h1 className="book-list-heading">Book List</h1>
        <ul className="book-list">
          <li className="book-item">Book 1</li>
          <li className="book-item">Book 2</li>
          <li className="book-item">Book 3</li>
        </ul>
      </div>
    );
  }
}
export default BookList;