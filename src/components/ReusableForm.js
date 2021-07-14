import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input type="text" name="name" placeholder="Beer or Cider Name" required/>
        <input type="text" name="brand" placeholder="Brewery or Cidery" required/>
        <input type="text" name="style" placeholder="Beer or Cider Style" required/>
        <input type="number" step="0.1" min="0" name="abv" placeholder="ABV %" required/>
        <input type="number" step="0.01" min="0" name="price" placeholder="Price (per 16oz)" required/>
        <input type="number" min="0" name="pints" placeholder="Number of pints(full = 124, pony = 62)" required/>
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;