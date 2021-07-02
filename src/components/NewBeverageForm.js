import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function NewBeverageForm(props) {
  function handleNewBeverageFormSubmission(event) {
    event.preventDefault();
    props.onNewBeverageCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      style: event.target.style.value,
      abv: event.target.abv.value,
      price: event.target.price.value,
      quantity: event.target.quantity.value,
      id: v4()
    });
  }

  NewBeverageForm.propTypes = {
    onNewBeverageCreation: PropTypes.func
  };

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewBeverageFormSubmission}
        buttonText="Add Beverage"
        />
    </React.Fragment>
  );
}

export default NewBeverageForm;