import {CLOSE_FILTER, TOGGLE_FILTER_IS_OPENED, CLOSE_SETTINGS, TOGGLE_SETTINGS_IS_OPENED
} from '../constants'

const defaultState = {
  isFilterOpen: false,
  isSettingsOpen: false,
}

export default (state = defaultState, action) => {
  const {type} = action;
  switch (type) {
    case CLOSE_FILTER: return {
      ...state, 
      isFilterOpen: false
    };
    case TOGGLE_FILTER_IS_OPENED: return {
      ...state, 
      isFilterOpen: !state.isFilterOpen,
      isSettingsOpen: !state.isFilterOpen ? false : state.isSettingsOpen
    }
    case CLOSE_SETTINGS: return {
      ...state, 
      isSettingsOpen: false
    };
    case TOGGLE_SETTINGS_IS_OPENED: return {
      ...state, 
      isFilterOpen: !state.isSettingsOpen ? false : state.isFilterOpen,
      isSettingsOpen: !state.isSettingsOpen
    }

    default: return state;
  }
}
