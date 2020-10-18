const store = {
        state: {
            lang: 'zh-CN'
        },
        mutations: {
            SET_LANG: (state, data) => {
                state.lang = data;
                window.localStorage.setItem('lang', data);
            }
        },
        actions: {
            setLang({ commit }, data) {
                commit('SET_LANG', data);
            }
        },
        getters: {
            lang: state => state.lang
        }
    };

export default store;