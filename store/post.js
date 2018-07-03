export const state = () => ({
    currentPost: {},
    isLoading: true
})

export const mutations = {
    setCurrentPost(state, payload) {
        state.currentPost = payload;
    },
    setLoading(state, payload) {
        state.isLoading = payload;
    }
}

export const actions = {
    async getPostBySlug({commit}, slug) {
        
    }
}
