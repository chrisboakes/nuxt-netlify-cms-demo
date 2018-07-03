export const state = () => ({
    posts: []
})

export const mutations = {
    setPosts(state, payload) {
        state.posts = payload;
    }
}

export const actions = {
    async getPosts({commit}) {
        
    }
}
