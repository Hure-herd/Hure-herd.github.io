import { createContentLoader } from 'vitepress'

export default createContentLoader('posts/**/*.md', {
    excerpt: true,
    transform(raw) {
        return raw
            .filter(({ url }) => !url.endsWith('/'))
            .map(({ url, frontmatter, excerpt }) => ({url, frontmatter, excerpt}))
            .sort((a, b) => {return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)})
    }
})