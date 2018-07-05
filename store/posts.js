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
        // Use webpack's context to get all files from a folder
        const context = require.context('~/content/post/', false, /\.json$/)
        const posts = context.keys().map(key => ({
            ...context(key),
            slug: `${key.replace('.json', '').replace('./', '')}`
        }));
        commit('setPosts', posts);
    }
}
