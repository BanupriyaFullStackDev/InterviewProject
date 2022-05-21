import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Paginator = (props) => {
  const { data, setData } = props;
  const [perPage, setPerPage] = useState(5);
  const [page, setPage] = useState(1);

  const getApiData = async (a, b) => {
    const url = `https://api.punkapi.com/v2/beers?page=${a}&per_page=${b}`;
    const { data } = await axios.get(url);
    setData(data);
  };

  useEffect(() => {
    if (!data.length) getApiData(page, perPage);
  }, [data]);

  const handlePerPage = (e) => {
    let newValue = parseInt(e.target.value);
    setPerPage(newValue);
    getApiData(page, newValue);
  };

  const handlePrev = () => {
    if (page > 1) {
      let newValue = page - 1;
      setPage(newValue);
      getApiData(newValue, perPage);
    }
  };

  const handleNext = () => {
    let newValue = page + 1;
    setPage(newValue);
    getApiData(newValue, perPage);
  };

  return (
    <div className="row">
      <div className="col-6 d-flex justify-content-start">
        <select
          className="form-select form-select-sm"
          aria-label=".form-select-sm example"
          style={{ width: '70px', height: '30px' }}
          onChange={handlePerPage}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
      </div>
      <div className="col-6 d-flex justify-content-end">
        <nav aria-label="Page navigation">
          <ul className="pagination pagination-sm">
            <li
              className={`page-item ${page > 1 ? '' : 'disabled'}`}
              onClick={handlePrev}
            >
              <a className="page-link" href="/#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/#">
                {page}
              </a>
            </li>
            <li className="page-item" onClick={handleNext}>
              <a className="page-link" href="/#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Paginator;
