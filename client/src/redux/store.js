import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./features/auth/authSlice/authSlice";

const store= configureStore({
    reducer: {
        auth: authSlice.reducer,
    }
})
export default store;
