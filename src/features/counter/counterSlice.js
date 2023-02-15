import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';




export const backetSlice = createSlice({
  name: 'backet',
  initialState:{
    products:{

    }
    ,

    totalProducts:0


  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addProduct:(state,action)=>{
      let product = action.payload      

      if(state.products[product.id]){
        state.products[product.id].count ++
        // console.log(state.products[product.id].count)        
      }else{
        product.count = 1
        state.products[product.id] = product
        // console.log(state.products[product.id])
      }
      state.totalProducts ++
      // console.log(state.totalProducts)

    }
    
  }
  
});


export const {addProduct } = backetSlice.actions;

export default backetSlice.reducer;

