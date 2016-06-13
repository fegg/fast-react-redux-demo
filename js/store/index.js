import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const composedCreateStore = compose(
  applyMiddleware(thunk),
  // 只支持 chrome 插件的方式，不引入其它代码
  window.devToolsExtension && window.devToolsExtension()
)(createStore);

function configureStore(initialState = {}) {
  // store => reducers && initialState
  const store = composedCreateStore(reducers, initialState);

  return store;
}

export default configureStore;