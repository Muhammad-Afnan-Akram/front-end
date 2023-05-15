import React from 'react';
import './Results.css';

function Results({ files }) {
  let results = files.results;
  return (
    <div className="Results">
      <div></div>
      {Object.keys(results).map((fileKey, status) => {
        return (
          <div key={status} className="Results__box">
            The Status of file {fileKey} is {results[fileKey]}
          </div>
        );
      })}
    </div>
  );
}

export default Results;