import { configureStore } from "@reduxjs/toolkit";
import inqueryReducer from "../component/inquery/inquerySlice";
import appointmentReducer from "../component/appointment/appointmentSlice";
import contractReducer from "../component/contract/contractSlice";
import caseReducer from "../component/case/casesSlice";
import usersReducer from "../component/user/usersSlice";
import authReducer from "../component/auth/authSlice";
import courtReducer from "../component/court/courtSlices"
import categoryReducer from "../component/category/categorySlices"
import paymentReducer from "../component/payment/paymentSlice"

export const store = configureStore({
    reducer:{
        inquerys:inqueryReducer,
        appointments:appointmentReducer,
        contracts:contractReducer,
        cases:caseReducer,
        courts:courtReducer,
        categories:categoryReducer,
        users:usersReducer,
        auths:authReducer,
        payments:paymentReducer
    }
});