/**
 * Created by cpalomino on 9/1/2017.
 */
import {FETCH_WEATHER} from '../actions/index';
export default  function(state=[], action){
    switch(action.type){
        case FETCH_WEATHER:
            return [ action.payload.data, ...state]  ;

    }
    return state;
}