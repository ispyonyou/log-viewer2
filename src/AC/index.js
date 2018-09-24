import {CLOSE_FILTER, TOGGLE_FILTER_IS_OPENED, CLOSE_SETTINGS, TOGGLE_SETTINGS_IS_OPENED } from '../constants'

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
