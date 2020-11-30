import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        activePageNo: 0,
        activePage: {
            intro: true,
            mode: false,
            role: false,
            lifepath: false,
            sheet: false
        },
        mode: null,
        pc: {
            name: null,
            role: null,
            role_rank: null,
            lifepath: {
                culture: null,
                personality: null,
                style: {
                    clothing: null,
                    hair: null
                },
                motivation: {
                    valuing: null,
                    relationships: null,
                    idol: null,
                    posession: null
                },
                family: {
                    family_type: null,
                    environment: null,
                    family_crisis: null,
                },
                circle: {
                    friends: [], // {id, name, relationship}
                    enemies: [], // {id, name, enemy_type, cause, backup, reaction},
                    lover: null,
                },
                goals: null
            }
        }
    },
    mutations: {
        updateVisibility(state) {
            let i = 0;
            for (let key in state.activePage) {
                state.activePage[key] = i === state.activePageNo;
                i++;
            }
        },
        nextPage(state) {
            if (state.activePageNo < 4) {
                state.activePageNo++;
            }
        },
        prevPage(state) {
            if (state.activePageNo > 0) {
                state.activePageNo--;
            }
        },
        modeChange (state, mode) {
            state.mode = mode;
        },
        roleChange (state, role) {
            state.pc.role = role;
        }
    },
    actions: {
        next({commit}) {
            commit('nextPage');
            commit("updateVisibility");
        },
        prev({commit}) {
            commit('prevPage');
            commit("updateVisibility");
        }
    },
    modules: {}
})
