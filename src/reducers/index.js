import authReducer from './authReducer';
import dataLoadingReducer from './dataLoadingReducer';
import dialogReducer from './dialogReducer';
import editingFieldReducer from './editingFieldReducer';
import {
    combineReducers
} from 'redux';

export default combineReducers({
    auth: authReducer,
    dataLoading: dataLoadingReducer,
    dialog: dialogReducer,
    editingFields: editingFieldReducer
});
