import {configureStore} from'@reduxjs/toolkit';

import { cartReducer } from './reducer/cartReducer';


export default  configureStore({
    reducer:{custom:cartReducer,}
})