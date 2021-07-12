import React from 'react';
import KegList from './KegList';
import EditKegForm from './EditKegForm';
import KegDetail from './KegDetail';
import NewKegForm from './NewKegForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      editing: false
    };
  }

  handleClick = () => {
    if (this.props.selectedKeg !== null) {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
      const action2 = a.clearSelectedKeg()
      dispatch(action2);
      this.setState({
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  };

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  };

  handleChangingSelectedKeg = (id) => {
    const { dispatch } = this.props;
    const selectedKeg = this.props.masterKegList[id];
    const action = a.selectKeg(selectedKeg);
    dispatch(action);
  };

  handleEditClick = () => {
    this.setState({ editing: true });
  };

  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const action = a.addKeg(kegToEdit);
    dispatch(action);
    const action2 = a.clearSelectedKeg();
    dispatch(action2);
    this.setState({
      editing: false,
    });
  };

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteKeg(id);
    dispatch(action);
    const action2 = a.clearSelectedKeg();
    dispatch(action2);
  };

  handleOrderingAPint = (id) => {
    const { dispatch } = this.props;
    const selectedKeg = this.props.masterKegList[id];
    const orderedKeg = Object.assign( {}, selectedKeg, { pints: (selectedKeg.pints - 1) });
    const action = a.addKeg(orderedKeg);
    dispatch(action);
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    console.log(this.props.selectedKeg);
    if (this.state.editing) {
      currentlyVisibleState = (
        <EditKegForm
          keg={this.props.selectedKeg}
          onEditKeg={this.handleEditingKegInList}
        />
      );
      buttonText = "Return to Keg List";
    } else if (this.props.selectedKeg !== null) {
      currentlyVisibleState = (
        <KegDetail
          keg={this.props.selectedKeg}
          onClickingDelete={this.handleDeletingKeg}
          onClickingEdit={this.handleEditClick}
          onClickingOrderAPint={this.handleOrderingAPint}
        />
      );
      buttonText = "Return to Keg List";
    } else if (this.props.formVisibleOnPage) {
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
  masterKegList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool,
  selectedKeg: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisibleOnPage: state.formVisibleOnPage,
    selectedKeg: state.selectedKeg
  }
}

KegControl = connect(mapStateToProps)(KegControl)

export default KegControl;
