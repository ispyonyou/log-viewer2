import {CLOSE_FILTER, TOGGLE_FILTER_IS_OPENED, CLOSE_SETTINGS, TOGGLE_SETTINGS_IS_OPENED,
  CHANGE_FLT_INCLUDE_LOG_LEVEVLS, CHANGE_FLT_EXCLUDE_LOG_LEVEVLS, CHANGE_FLT_INCLUDE_LOGGERS,
  CHANGE_FLT_EXCLUDE_LOGGERS, CHANGE_DEFAULT_LOG_MESSAGES, CHANGE_SETTINGS_FORMAT_SQL,
  CHANGE_SETTINGS_HIGHLIGHT_SQL} from '../constants'

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
export function changeFltIncludeLogLevevls(includeLogLevels) {
  return {
    type: CHANGE_FLT_INCLUDE_LOG_LEVEVLS,
    payload: { includeLogLevels }
  }
}

export function changeFltExcludeLogLevevls(excludeLogLevels) {
  return {
    type: CHANGE_FLT_EXCLUDE_LOG_LEVEVLS,
    payload: { excludeLogLevels }
  }
}

export function changeFltIncludeLoggers(includeLoggers) {
  return {
    type: CHANGE_FLT_INCLUDE_LOGGERS,
    payload: { includeLoggers }
  }
}

export function changeFltExcludeLoggers(excludeLoggers) {
  return {
    type: CHANGE_FLT_EXCLUDE_LOGGERS,
    payload: { excludeLoggers }
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
