import {createWrapper} from 'next-redux-wrapper';
import {applyMiddleware, configureStore, compose,} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducer from '../reducers'

const configureStore = () => {
    const middlewares = [];
    const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares))
    const store = configureStore(reducer, enhancer);
    return store;
};

const wrapper = createWrapper(configureStore,{
    debug:process.env.NODE_ENV === 'development',
});

export default wrapper;