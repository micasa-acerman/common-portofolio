const path = require('path');
const createPaginatedPages = require('gatsby-paginate');

module.exports = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
  {
    allMarkdownRemark(
      limit: 1000
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          
          frontmatter {
            tags
            templateKey
            slug
            id
            title
            url: slug
            date
            tags
            description
            headerImage
            type
          }
        }
      }
    }
  }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const { edges = [] } = result.data.allMarkdownRemark;

    const posts = Array.prototype.filter.bind(edges)(({node})=>node.frontmatter.type === "post")
    console.log("POSTS COUNT :", posts)
    const tagSet = new Set();
    createPaginatedPages({
      edges:posts,
      createPage,
      pageTemplate: 'src/templates/index.js',
      context: {
        totalCount: edges.length,
      },
      pathPrefix: 'pages',
      buildPath: (index, pathPrefix) => {
        if (index > 1) {
          return `${pathPrefix}/${index}`;
        }
        return '/';
      },
    });

    edges.forEach(({ node }, index) => {
      const { id, frontmatter, fields } = node;
      const { slug, tags, templateKey } = frontmatter;

      if (tags) {
        tags.forEach(item => tagSet.add(item));
      }

      let $path = fields.slug;
      if (slug) {
        $path = slug;
      }

      const component = templateKey || 'blog-post';

      createPage({
        path: $path,
        tags,
        component: path.resolve(`src/templates/${String(component)}.js`),
        context: {
          id,
          index,
        },
      });
    });

    return tagSet.forEach((tag) => {
      createPage({
        path: `/tag/${tag}`,
        component: path.resolve('src/templates/tag.js'),
        context: {
          tag,
        },
      });
    });
  });
};
