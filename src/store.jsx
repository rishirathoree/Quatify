import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { wishlistReducer } from './reducers/Wishlistitemreducer';

const reducer = combineReducers({
    // add reducers here in this type
    wishlist : wishlistReducer
})

const initialstate = {}
const middleware = [thunk]
const store = createStore(
    reducer,
    initialstate,
    composeWithDevTools(applyMiddleware(...middleware))
    )



 export default store;