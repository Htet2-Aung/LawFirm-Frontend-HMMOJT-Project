import { configureStore } from "@reduxjs/toolkit";
import inqueryReducer from "../component/inquery/inquerySlice";
import appointmentReducer from "../component/appointment/appointmentSlice";
import contractReducer from "../component/contract/contractSlice";
import caseReducer from "../component/case/casesSlice";

export const store = configureStore({
    reducer:{
        inquerys:inqueryReducer,
        appointments:appointmentReducer,
        contracts:contractReducer,
        cases:caseReducer
    }
});