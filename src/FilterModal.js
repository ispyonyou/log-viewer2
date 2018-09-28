import React from 'react'
import Modal from 'react-modal'
import {connect} from 'react-redux'
import Filter from './Filter'
import {closeFilter} from './AC'

class FilterModal extends React.Component {
  render() {
    const {isOpened, avLogLevels, avLoggers} = this.props;

    return (
      <Modal isOpen={isOpened}
             className="ModalContent"
             overlayClassName="ModalOverlay">
        <Filter avLogLevels={avLogLevels}
                avLoggers={avLoggers} />
      </Modal>
    )
  }
}

export default connect((state) => ({
  isOpened: state.navUi.isFilterOpen,
}), {closeFilter})(FilterModal)
