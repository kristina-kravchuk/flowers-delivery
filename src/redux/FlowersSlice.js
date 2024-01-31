// import { createSlice } from '@reduxjs/toolkit'

// export const FlowersSlice = createSlice({
//     name: 'flowers',
//     initialState: {
//         selectedCategory:"ALL"
//     },
//     reducers: {
//         filterCategory:(state, action) => {
//             state.selectedCategory = action.payload;
//         }
//     }
    
//     }
//   })

//   export const getSelectedCategory = state => state.flowers.selectedCategory;
//   export const { filterCategory } = FlowersSlice.actions;
//   export default FlowersSlice.reducer;
import { createSlice } from '@reduxjs/toolkit'

export const FlowersSlice = createSlice({
    name: 'flowers',
    initialState: {
        selectedCategory :"ALL"
    },
    reducers: {
        filterCategory:(state, action) => {
            state.selectedCategory = action.payload;
        }
    }

})

export const getSelectedCategory = state => state.flowers.selectedCategory;
export const { filterCategory } = FlowersSlice.actions;
export default FlowersSlice.reducer;