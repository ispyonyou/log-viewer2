import React from 'react'
import Modal from 'react-modal'
import {connect} from 'react-redux'
import Settings from './Settings'

class SettingsModal extends React.Component {
  render() {
    const {isOpened} = this.props;

    return (
      <Modal isOpen={isOpened}
             className="ModalContent"
             overlayClassName="ModalOverlay">
        <Settings />
      </Modal>
    )
  }
}

export default connect((state) => ({
  isOpened: state.navUi.isSettingsOpen,
}), {})(SettingsModal)
