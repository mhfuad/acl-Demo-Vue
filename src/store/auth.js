import axios from "axios"
export default {
    namespaced: true,
    state: {
        token: null,
        user: null,
    },
    getters:{
        authenticated(state){
            return state.token && state.user
        },
        user(state){
            return state.user
        }
    },
    mutations: {
        SET_TOKEN(state, token){
            state.token = token
        },
        SET_USER(state, data){
            state.user = data
        }
    },
    actions: {
        async signIn({ dispatch, commit }, credential){
            let res = await axios.post('v1/auth/login', credential)
            return dispatch("attempt",res.data.accessToken)
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