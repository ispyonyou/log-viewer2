import {START, FINISH} from '../constants'
import Worker from "worker-loader!../FilterWorker";

const worker = new Worker();

export default store => next => action => {
  const {type, filterLogMessages} = action  
  if (!filterLogMessages) return next(action)

  const state = store.getState()

  next({...action, type: type + START})

//  setTimeout(() => {
    worker.postMessage({ filter: state.filter, defaultLogMessages: state.logMessages.defaultLogMessages });
//  }, 1000)

  worker.addEventListener("message", (event) => {
    next({...action, type: type + FINISH, filteredLogMessages: event.data})
  });
}
