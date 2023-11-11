import axios from "axios"
export default {
    namespaced: true,
    state: {
        token: null,
        user: null,
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
        async signIn({ dispatch }, credential){
            let res = await axios.post('v1/auth/login', credential)
            //console.log(res.data)
            dispatch("attempt",res.data.accessToken)
        },
        async attempt({ commit }, token){
            commit('SET_TOKEN', token)
            try {
                let user = axios.get('v1/auth/me', {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                })
                console.log(user)
                //commit('SET_USER', user.data)
            } catch (error) {
                console.log("faild")
            }
        }

    }
}