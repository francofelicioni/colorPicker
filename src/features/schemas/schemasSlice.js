import createSlice from  '@reduxjs/toolkit'


const schemasSlice = createSlice({
    name: 'schemas',
    initialState: {
        schemas: []
    },
    reducers: {
        setSchemas: (state, action) => {
            state.schemas = action.payload
        }
    }
})

export default schemasSlice.reducer
export const { setSchemas } = schemasSlice.actions