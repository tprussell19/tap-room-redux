import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input type="text" name="name" placeholder="Beer or Cider Name" />
        <input type="text" name="brand" placeholder="Brewery or Cidery" />
        <input type="text" name="style" placeholder="Beer or Cider Style" />
        <input type="float" name="abv" placeholder="ABV %" />
        <input type="number" name="price" placeholder="Price (per 16oz)" />
        <input type="number" name="pints" placeholder="Number of pints(full = 124, pony = 62)" />
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