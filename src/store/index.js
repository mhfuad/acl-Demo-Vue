import { createStore } from "vuex";
import auth from "./auth"
import student from "./student"

export default createStore({
    modules: {
        auth,
        student
    }
})