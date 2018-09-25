import {CHANGE_SETTINGS_FORMAT_SQL, CHANGE_SETTINGS_HIGHLIGHT_SQL} from '../constants'

const defaultState = {
  formatSql: true,
  highlightSql: true,
}

export default (state=defaultState, action) => {
  const { type } = action;
  switch( type )
  {
    case CHANGE_SETTINGS_FORMAT_SQL: return {
      ...state, formatSql: action.payload.formatSql
    }
    case CHANGE_SETTINGS_HIGHLIGHT_SQL: return {
      ...state, highlightSql: action.payload.highlightSql
    }
    default: return state;
  }
}