import React, { Component } from 'react';
import "./Pagination.css"

class Pagination extends Component {
  state = {}
  render() {
    return (
      <nav>
        <ul className="pagination justify-content-center">
          <li className={`page-item ${this.props.currentPage<=1?'disabled':''}`} onClick={this.props.previousPage}>
            <a className="page-link" href="#">Previous</a>
          </li>
          {this.props.pages.map(page => {
            return page == this.props.currentPage ? (
              <li className="page-item active">
                <a className="page-link" href="#">{page}</a>
              </li>
            ) : (
              <li className="page-item" onClick={() => this.props.setPage(page)}>
                <a className="page-link" href="#">{page}</a>
              </li>
            )
          })}
          <li className={`page-item ${this.props.currentPage>=this.props.pages.length?'disabled':''}`} onClick={this.props.nextPage}>
            <a className="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Pagination;