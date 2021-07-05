import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

function EditBeverageForm(props) {
  const { beverage } = props;
  function handleEditBeverageFormSubmission(event) {
    event.preventDefault();
    props.onEditBeverage({
      name: event.target.name.value,
      brand: event.target.brand.value,
      style: event.target.style.value,
      abv: event.target.abv.value,
      price: event.target.price.value,
      pints: event.target.pints.value,
      id: beverage.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditBeverageFormSubmission}
        buttonText="Update Beverage"
        />
    </React.Fragment>
  );
}

EditBeverageForm.propTypes = {
  beverage: PropTypes.object,
  onEditBeverage: PropTypes.func
};

export default EditBeverageForm;