import {FILTER_LOG_MESSAGES, START, FINISH} from '../constants'
import Worker from "worker-loader!../FilterWorker";

const worker = new Worker();

export default store => {
  worker.onmessage = (event) => {
    console.log(21)
    store.dispatch({
      type: FILTER_LOG_MESSAGES + FINISH,
      filteredLogMessages: event.data})
      console.log(22)
    }

  return (next) => {
    return (action) => {
      const {type, filterLogMessages} = action  
      if (!filterLogMessages) return next(action)

      const state = store.getState()

      next({...action, type: FILTER_LOG_MESSAGES + START})

      worker.postMessage({ filter: state.filter, defaultLogMessages: state.logMessages.defaultLogMessages });
    }
  }
}
