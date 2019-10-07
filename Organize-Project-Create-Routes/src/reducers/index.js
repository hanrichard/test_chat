import * as actionTypes from '../actions/types';
import { combineReducers } from 'redux';

const intialState = {
	currentUser: null,
	isLoading: true,
};

const user_reducer = (state = intialState, action) => {
	switch (action.type) {
		case actionTypes.SET_USER:
			return {
				currentUser: action.payload.currentUser,
				isLoading: false,
			};
		case actionTypes.CLEAR_USER:
			return {
				...state,
				isLoading: false,
			};
		default:
			return state;
	}
};

const intialChannelState = {
	currentChannel: null,
};

const channel_reducer = (state = intialChannelState, action) => {
	switch (action.type) {
		case actionTypes.SET_CURRENT_CHANNEL:
			return {
				...state,
				currentChannel: action.payload.currentChannel,
			};
		default:
			return state;
	}
};

const rootReducer = combineReducers({
	user: user_reducer,
	channel: channel_reducer,
});

export default rootReducer;
