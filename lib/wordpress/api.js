// grab first 20 posts
export const ALL_POSTS = `query MyQuery {
    posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
            id
            date
            title
            slug
            excerpt
        }
    }
}`
// get all slugs for static paths

// post by a slug, so we display 