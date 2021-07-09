import React from 'react';
import KegList from './KegList';
import EditKegForm from './EditKegForm';
import KegDetail from './KegDetail';
import NewKegForm from './NewKegForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      formVisibleOnPage: false,
      selectedKeg: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  };

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const { name, brand, style, abv, price, pints, id } = newKeg;
    const action = {
      type: "ADD_KEG",
      name: name,
      brand: brand,
      style: style,
      abv: abv,
      price: price,
      pints: pints,
      id: id
    }
    dispatch(action);
    this.setState({formVisibleOnPage: false});
  };

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    this.setState({ selectedKeg: selectedKeg });
  };

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_KEG',
      id: id
    }
    dispatch(action);
    this.setState({selectedKeg: null});
  };

  handleEditClick = () => {
    this.setState({ editing: true });
  };

  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const { name, brand, style, abv, price, pints, id } = kegToEdit;
    const action = {
      type: "ADD_KEG",
      name: name,
      brand: brand,
      style: style,
      abv: abv,
      price: price,
      pints: pints,
      id: id
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedKeg: null,
    });
  };

  handleOrderingAPint = (id) => {
    const selectedKeg = this.state.masterKegList.filter((keg) => keg.id === id)[0];
    const orderedKeg = Object.assign( {}, selectedKeg, { pints: (selectedKeg.pints - 1) });
    const newMasterKegList = this.state.masterKegList
      .filter((keg) => keg.id !== this.state.selectedKeg.id)
      .concat(orderedKeg);
    this.setState({
      masterKegList: newMasterKegList,
      selectedKeg: orderedKeg
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = (
        <EditKegForm
          keg={this.state.selectedKeg}
          onEditKeg={this.handleEditingKegInList}
        />
      );
      buttonText = "Return to Keg List";
    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState = (
        <KegDetail
          keg={this.state.selectedKeg}
          onClickingDelete={this.handleDeletingKeg}
          onClickingEdit={this.handleEditClick}
          onClickingOrderAPint={this.handleOrderingAPint}
        />
      );
      buttonText = "Return to Keg List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
      );
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = (
        <KegList
          kegList={this.props.masterKegList}
          onKegSelection={this.handleChangingSelectedKeg}
        />
      );
      buttonText = "Add Keg";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

KegControl.propTypes = {
  masterKegList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterKegList: state
  }
}

KegControl = connect(mapStateToProps)(KegControl)

export default KegControl;
