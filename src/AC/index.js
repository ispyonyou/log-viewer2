import {CLOSE_FILTER, TOGGLE_FILTER_IS_OPENED, CLOSE_SETTINGS, TOGGLE_SETTINGS_IS_OPENED,
  CHANGE_FLT_INCLUDE_LOG_LEVEVLS, CHANGE_FLT_EXCLUDE_LOG_LEVEVLS, CHANGE_FLT_INCLUDE_LOGGERS,
  CHANGE_FLT_EXCLUDE_LOGGERS, CHANGE_FLT_LOG_LEVELS, CHANGE_FLT_LOGGERS, 
  CHANGE_DEFAULT_LOG_MESSAGES, CHANGE_SETTINGS_FORMAT_SQL,CHANGE_SETTINGS_HIGHLIGHT_SQL, 
  FILTER_LOG_MESSAGES, CHANGE_MESSAGES_PER_PAGE
} from '../constants'

export function closeFilter() {
  return {
    type: CLOSE_FILTER
  }
}

export function toggleFilterIsOpened() {
  return {
    type: TOGGLE_FILTER_IS_OPENED
  }
}

export function closeSettings() {
  return {
    type: CLOSE_SETTINGS
  }
}

export function toggleSettingsIsOpened() {
  return {
    type: TOGGLE_SETTINGS_IS_OPENED
  }
}

export function changeDefaultLogMessages(defaultLogMessages) {
  return {
    type: CHANGE_DEFAULT_LOG_MESSAGES,
    payload: { defaultLogMessages }
  }
}

export function changeFltLogLevels(logLevels) {
  return {
    type: CHANGE_FLT_LOG_LEVELS,
    payload: { logLevels }
  }
}

export function changeFltLoggers(loggers) {
  return {
    type: CHANGE_FLT_LOGGERS,
    payload: { loggers }
  }
}

export function changeSettingsFormatSql(formatSql) {
  return {
    type: CHANGE_SETTINGS_FORMAT_SQL,
    payload: { formatSql }
  }
}

export function changeSettingsHighlightSql(highlightSql) {
  return {
    type: CHANGE_SETTINGS_HIGHLIGHT_SQL,
    payload: { highlightSql }
  }
}

export function changeMessagesPerPage(messagesPerPage) {
  return {
    type: CHANGE_MESSAGES_PER_PAGE,
    payload: { messagesPerPage }
  }
}

export function filterLogMessages() {
  return {
    type: FILTER_LOG_MESSAGES,
    filterLogMessages: true,
  }
}
