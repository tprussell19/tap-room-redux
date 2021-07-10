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
    if (this.props.selectedKeg != null) {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
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
    const selectedKeg = this.props.masterKegList[id];
    this.setState({ selectedKeg: selectedKeg });
  };

  handleEditClick = () => {
    this.setState({ editing: true });
  };

  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const action = a.addKeg(kegToEdit);
    dispatch(action);
    this.setState({
      editing: false,
      selectedKeg: null,
    });
  };

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteKeg(id);
    dispatch(action);
    this.setState({selectedKeg: null});
  };

  handleOrderingAPint = (id) => {
    const selectedKeg = Object.values(this.props.masterKegList).filter((keg) => keg.id === id)[0];
    const orderedKeg = Object.assign( {}, selectedKeg, { pints: (selectedKeg.pints - 1) });
    // const newMasterKegList = Object.values(this.props.masterKegList)
    //   .filter((keg) => keg.id !== (selectedKeg.id))
    //   .concat(orderedKeg);
    this.setState({
      // masterKegList: newMasterKegList,
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
