const path = require('path')

module.exports.onCreateNode = ({ node, actions}) => {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')

        // Creates a node field we can use
        // node, is shorthand for a node variable with the name 'node'
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

// Asynchronously creates pages and allows the use of data from graphql to the function below
module.exports.createPages = async({ graphql, actions}) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
        query { 
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    // For each edge, create a page with a dynamically allocated path based on the SLUG 
    res.data.allMarkdownRemark.edges.forEach((edge)=> {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })

    // 1. Get path to template
    // 2. Get mardown data
    // 3. Create new pages
}