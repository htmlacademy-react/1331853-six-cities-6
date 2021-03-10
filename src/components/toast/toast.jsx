import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import "./toast.css";
import {setErrorMessage} from '../../store/action';
import {getErrorMessage} from '../../store/user/selectors';

const SHOW_TIME = 5000;

const Toast = ({errorMessage, removeErrorMessage}) => {
  if (errorMessage.length) {
    setTimeout(() => {
      removeErrorMessage(``);
    }, SHOW_TIME);
  }

  return (
    <div className="toast-container" style={{display: !errorMessage.length && `none`}}>
      <div className="toast-item">Error {errorMessage} try later</div>
    </div>
  );
};

Toast.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  removeErrorMessage: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  errorMessage: getErrorMessage(state)
});

const mapDispatchToProps = (dispatch) => ({
  removeErrorMessage(message) {
    dispatch(setErrorMessage(message));
  }
});

export {Toast};
export default connect(mapStateToProps, mapDispatchToProps)(Toast);
