import Axios from "axios";

const initialState = {
   purchases: [],
   budgetLimit: null,
   loading: false
}

const REQUEST_BUDGET_DATA = 'REQUEST_BUDGET_DATA';

export const requestBudgetData = () => {
   const data = Axios.get('/api/budget-data').then(res => res.data);
   return {
      type: REQUEST_BUDGET_DATA,
      payload: data
   }
}

export default function budgetReducer(state = initialState, action) {
   const {type, payload} = action;

   switch(type) {
      case `${REQUEST_BUDGET_DATA}_PENDING`:
         return {
            ...state,
            loading: true
         }
      case `${REQUEST_BUDGET_DATA}_FULFILLED`:
         return {
            ...state,
            ...payload,
            loading: false
         }
      default: return state;
   }
}