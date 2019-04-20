import axios from 'axios';

const actions = {
    async login({commit}, user) {
        const response = await axios.post(`http://localhost:3000/api/users/login`, user);

        if(response.status === 200) {
            commit('token', response.data.token);
        }

    }
};

const getters = {};

const state = {};

const mutations = {
    // setToken
};

export default {
    actions, 
    getters, 
    state, 
    mutations
}