import axios from "axios"
export default {
    namespaced: true,
    state: {
        students: null,
    },
    getters:{
        students(state){
            return state.students
        }
    },
    mutations: {
        SET_STUDENT(state, data){
            state.students = data
        }
    },
    actions: {
        async signIn({ dispatch, commit }, credential){
            let res = await axios.post('v1/auth/login', credential)
            return dispatch("attempt",res.data.accessToken)
        },

        async allStudent({ dispatch, commit }){
            let res = await axios.get('v1/students')
            commit("SET_STUDENT",res.data);
        },

        async create({ dispatch, commit}, data){
            let res = await axios.post("v1/students/create", data);
            return res;
        },
        
        async attempt({ commit, state }, token){
            
            if(token){
                commit('SET_TOKEN', token)
            }

            if(!state.token){
                return
            }

            try {
                let res = await axios.get('v1/auth/me')
                commit('SET_USER', res.data)
            } catch (error) {
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
            }
        },

        signOut ({commit}){
            return axios.post('v1/auth/logout')
            .then(()=>{
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
            })
        }
    }
}