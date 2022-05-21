import React, { useState } from 'react';
import Paginator from '../pagination';

const FetchTableData = () => {
  const [data, setData] = useState([]);
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <table className="table table-bordered table-striped table-sm">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Tagline</th>
                  <th>Description</th>
                  <th>Image_url</th>
                  <th>First_brewed</th>
                </tr>
              </thead>
              <tbody>
                {data.map((obj, index) => {
                  return (
                    <tr key={index}>
                      <td>{obj.name}</td>
                      <td>{obj.tagline}</td>
                      <td
                        className="text-truncate"
                        style={{ maxWidth: '100px' }}
                      >
                        {obj.description}
                      </td>
                      <td>
                        <img
                          src={obj.image_url}
                          style={{ height: '30px' }}
                          alt="display image"
                        />
                      </td>
                      <td>{obj.first_brewed}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <Paginator setData={setData} data={data} />
      </div>
    </>
  );
};

export default FetchTableData;
