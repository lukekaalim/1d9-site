import { combineReducers } from 'redux';
import homepage from 'reducers/homepageReducer';
import gameData from 'reducers/gameDataReducer';

const reducer = combineReducers({
    homepage,
    gameData,
});

export default reducer;
