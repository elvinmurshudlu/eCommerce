import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import FetchData  from '../../api/FetchApi';



export const backetSlice = createSlice({
  name: 'backet',
  initialState:{
    products:{

    }
    
  },
  
  reducers: {
    addProduct:(state,action)=>{
      //!Məhsul ediləndə İitialState əlavə etmək üçün
      let product = action.payload 
      // console.log("Product",product)     
      if(state.products[product.name + product.id]){
        state.products[product.name + product.id].count ++
        // console.log(state.products)        
      }else{
        product.count = 1
        state.products[product.name + product.id] = product
        // console.log(state.products[product.id])
      }      

      //! Hər məhsul əlavə ediləndə serverə post etmək üçün
      FetchData.addData("backet",state.products)
           
           


    },

    removeProduct:(state,action)=>{      
      let product = action.payload 
      if(state.products[product.name+product.id].count==1){
        delete state.products[product.name + product.id]
      }else{
        state.products[product.name + product.id].count --
      }
      
      FetchData.addData("backet",state.products)



    },

    getProductsFromApi:(state,action)=>{
      //!Sorğu ilə əldə edilən datanı İnitial state bərabər etmək üçün
      // console.log("GetDataFromApi",action.payload)
      state.products = action.payload
    }
    
  }
  
});


export const {addProduct,getProductsFromApi,removeProduct } = backetSlice.actions;

export default backetSlice.reducer;

