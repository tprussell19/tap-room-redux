import React from 'react';
import BeverageList from './BeverageList';
import EditBeverageForm from './EditBeverageForm';
import BeverageDetail from './BeverageDetail';
import NewBeverageForm from './NewBeverageForm';

class BeverageControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterBeverageList: [],
      selectedBeverage: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedBeverage != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedBeverage: null,
        editing: false
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  };

  handleAddingNewBeverageToList = (newBeverage) => {
    const newMasterBeverageList = this.state.masterBeverageList.concat(newBeverage);
    this.setState({
      masterBeverageList: newMasterBeverageList,
      formVisibleOnPage: false,
    });
  };

  handleChangingSelectedBeverage = (id) => {
    const selectedBeverage = this.state.masterBeverageList.filter(
      (beverage) => beverage.id === id
    )[0];
    this.setState({ selectedBeverage: selectedBeverage });
  };

  handleDeletingBeverage = (id) => {
    const newMasterBeverageList = this.state.masterBeverageList.filter(
      (beverage) => beverage.id !== id
    );
    this.setState({
      masterBeverageList: newMasterBeverageList,
      selectedBeverage: null,
    });
  };

  handleEditClick = () => {
    this.setState({ editing: true });
  };

  handleEditingBeverageInList = (beverageToEdit) => {
    const editedMasterBeverageList = this.state.masterBeverageList
      .filter((beverage) => beverage.id !== this.state.selectedBeverage.id)
      .concat(beverageToEdit);
    this.setState({
      masterBeverageList: editedMasterBeverageList,
      editing: false,
      selectedBeverage: null,
    });
  };

  handleOrderingAPint = (id) => {
    const selectedBeverage = this.state.masterBeverageList.filter((beverage) => beverage.id === id)[0];
    const orderedBeverage = Object.assign( {}, selectedBeverage, { pints: (selectedBeverage.pints - 1) });
    const newMasterBeverageList = this.state.masterBeverageList
      .filter((beverage) => beverage.id !== this.state.selectedBeverage.id)
      .concat(orderedBeverage);
    this.setState({
      masterBeverageList: newMasterBeverageList,
      selectedBeverage: orderedBeverage
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = (
        <EditBeverageForm
          beverage={this.state.selectedBeverage}
          onEditBeverage={this.handleEditingBeverageInList}
        />
      );
      buttonText = "Return to Beverage List";
    } else if (this.state.selectedBeverage != null) {
      currentlyVisibleState = (
        <BeverageDetail
          beverage={this.state.selectedBeverage}
          onClickingDelete={this.handleDeletingBeverage}
          onClickingEdit={this.handleEditClick}
          onClickingOrderAPint={this.handleOrderingAPint}
        />
      );
      buttonText = "Return to Beverage List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewBeverageForm onNewBeverageCreation={this.handleAddingNewBeverageToList} />
      );
      buttonText = "Return to Beverage List";
    } else {
      currentlyVisibleState = (
        <BeverageList
          beverageList={this.state.masterBeverageList}
          onBeverageSelection={this.handleChangingSelectedBeverage}
        />
      );
      buttonText = "Add Beverage";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default BeverageControl;
