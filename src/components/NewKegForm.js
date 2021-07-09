import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function NewKegForm(props) {
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      style: event.target.style.value,
      abv: event.target.abv.value,
      price: event.target.price.value,
      pints: event.target.pints.value,
      id: v4()
    });
  }

  NewKegForm.propTypes = {
    onNewKegCreation: PropTypes.func
  };

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewKegFormSubmission}
        buttonText="Add Keg"
        />
    </React.Fragment>
  );
}

export default NewKegForm;