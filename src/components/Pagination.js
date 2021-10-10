import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
  month: PropTypes.number,
  onPageChange: PropTypes.func,
}

Pagination.defaultProps = {
  onPageChange: null,
}

function Pagination(props) {
  const { month, onPageChange } = props;
  const [numberMonth, setnumberMonth] = useState();

  useEffect(() => {
    setnumberMonth(month);
  }, [month]);


  let months = ["Jan", "Feb", "mar", "apr", "may", "xun", "jul", "aug", "sep", "oct", "nov", "dec"];

  function handlePrev(newPage) {
    setnumberMonth(numberMonth - 1);
    if (onPageChange) {
      onPageChange(numberMonth);
    }
  }

  function handleNext(newPage) {
    setnumberMonth(numberMonth + 1);
    if (onPageChange) {
      onPageChange(numberMonth);
    }
  }
  return (

    <div>
      <button
        disabled={numberMonth === 0}
        onClick={() => handlePrev(numberMonth)}
      >
        {months[numberMonth - 1]}
      </button>
      <button
        disabled={numberMonth === 11}
        onClick={() => handleNext(numberMonth)}
      >
        {months[numberMonth + 1]}
      </button>

    </div>
  );
}

export default Pagination;