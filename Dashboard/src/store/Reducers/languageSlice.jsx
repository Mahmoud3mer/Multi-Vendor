import { createSlice } from "@reduxjs/toolkit"
import { en } from "../../test/languages/en";
import { ar } from "../../test/languages/ar";

const translation = {
    en: en,
    ar: ar
}


const INITIAL_STATE = {
    language: localStorage.getItem('lang') || 'en',
    translation: (localStorage.getItem('lang') === 'en' ? translation['en'] : translation['ar']) || translation['en']
}

export const LanguageSlice = createSlice({
    name: 'LANGUAGE_SLICE',
    initialState: INITIAL_STATE,
    reducers: {
        changeLanguage: (state , action) => {
            state.language = action.payload;
            state.translation = translation[action.payload];
        }
    }
})


export const { changeLanguage } = LanguageSlice.actions;
export default LanguageSlice.reducer;

