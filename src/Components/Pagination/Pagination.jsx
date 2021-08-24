import React, { Component } from 'react';
import "./Pagination.css"

class Pagination extends Component {
  state = {}
  render() {
    return (
      <nav>
        <ul className="pagination justify-content-center">
          <li className={`page-item ${this.props.currentPage<=1?'disabled':''}`} onClick={this.props.previousPage}>
            <button className="page-link" >Previous</button>
          </li>
          {this.props.pages.map(page => {
            return page === this.props.currentPage ? (
              <li className="page-item active" key={page}>
                <button className="page-link" >{page}</button>
              </li>
            ) : (
              <li className="page-item" onClick={() => this.props.setPage(page)} key={page}>
                <button className="page-link" >{page}</button>
              </li>
            )
          })}
          <li className={`page-item ${this.props.currentPage>=this.props.pages.length?'disabled':''}`} onClick={this.props.nextPage}>
            <button className="page-link" >Next</button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Pagination;