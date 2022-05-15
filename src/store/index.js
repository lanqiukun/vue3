import { createStore } from 'vuex'


export default createStore({
    state() {
        return {
            count: 0,
            numbers: [1, 2, 3, 4, 5, 6]
        }
    },
    mutations: {
        increment(state, payload = 1) {
            state.count += payload
        }
    },
    getters: {
        even_numbers(state) {
            return state.numbers.filter(e => e % 2 == 0)
        }
    },
    actions: {
        async_func(store, payload) {
            setTimeout(() => {
                store.commit('increment', 1000)
            }, 1000);
        }
    }
})