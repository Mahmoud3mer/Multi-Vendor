import authReducer from "./authReducer";
import LanguageSlice from "./languageSlice";
import categoryReducer from './categoryReducer';

const rootReducer = {
    auth: authReducer,
    category: categoryReducer,
    // lang: LanguageSlice
}

export default rootReducer;