import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

export default function FourNotFour() {
  return (
    <>
      <h1>404 Error Page #3</h1>
      <section class="error-container">
        <span>4</span>
        <span>
          <span class="screen-reader-text">0</span>
        </span>
        <span>4</span>
      </section>
      <div class="link-container">
        <Link to="/" class="more-link">
          Visit the original article
        </Link>
      </div>
    </>
  );
}
