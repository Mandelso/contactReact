import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contacts: [
        {
            name: "Mandelson Afari",
            location: "Assemblies, Agbogba",
            number: "0506656930",
            id: "12765jfbbvd8"
        },
        {
            name: "Abla Shika",
            location: "American House, East Legon",
            number: "0547821234",
            id: "345628ubcvsg8"
        },
        {
            name: "Ahmed Zaky",
            location: "Volta Region, Ho",
            number: "0205674326",
            id: "3e673ujgvfjvb"
        }
    ]
}

const contactSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        addUser: (state, {payload}) => {
            state.contacts.push(payload)
        },
        deleteUser: (state, {payload}) => {
            state.contacts = state.contacts.filter((user) => user.id !== payload)
        },
        editUser: (state, {payload}) => {
            const {name, location, number} = payload
            const isEdit = state.contacts.find((user) => user.id === payload.id )
            if(isEdit){
                isEdit.name = name
                isEdit.location = location
                isEdit.number = number
            }
        }
    }
})

export const { addUser, deleteUser, editUser } = contactSlice.actions
export default contactSlice.reducer