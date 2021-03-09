import React, {useRef} from 'react';
import {connect} from 'react-redux';

import {PropTypes} from 'prop-types';
import {ActionCreator} from '../../../store/action';
import {SORT_LIST, SORT_TEXTS} from '../../../const';

const Sort = ({changeSort, currentSort}) => {

  const selectRef = useRef();

  const sortTypeClickHandler = (evt) => {
    changeSort(evt.currentTarget.dataset.sortType);
  };

  const selectClickHandler = () => {
    selectRef.current.classList.toggle(`places__options--opened`);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption" >Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => selectClickHandler()}>
        {SORT_TEXTS[currentSort]}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className="places__options places__options--custom" ref={selectRef}>
        {
          SORT_LIST.map(({text, type}) => (
            <li key={type} className={`places__option ${currentSort === type ? `places__option--active` : ``}`} data-sort-type={type} tabIndex={0} onClick={(evt) => sortTypeClickHandler(evt)}>
              {text}
            </li>
          ))
        }
      </ul>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeSort(currentSort) {
    dispatch(ActionCreator.changeSort(currentSort));
  }
});

const mapStateToProps = (state) => ({
  currentSort: state.currentSort
});

Sort.propTypes = {
  changeSort: PropTypes.func.isRequired,
  currentSort: PropTypes.string.isRequired
};


export {Sort};
export default connect(mapStateToProps, mapDispatchToProps)(Sort);
