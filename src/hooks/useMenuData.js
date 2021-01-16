import { useStaticQuery, graphql } from 'gatsby';

const useMenuData = () => {
  const menu = useStaticQuery(graphql`
  {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/_menu\\/[a-z_0-9]+.md/"}}) {
      edges {
        node {
          frontmatter {
            name
            price
            title
            items {
              description
              price
              title
            }
          }
        }
      }
    }
  }
`);

  return {
		entrees: menu.allMarkdownRemark.edges.find(
			(e) => e.node.frontmatter.name === 'entrees',
		).node.frontmatter,
		sides: menu.allMarkdownRemark.edges.find(
			(e) => e.node.frontmatter.name === 'sides',
		).node.frontmatter,
		addons: menu.allMarkdownRemark.edges.find(
			(e) => e.node.frontmatter.name === 'addons',
		).node.frontmatter,
		sauces: menu.allMarkdownRemark.edges.find(
			(e) => e.node.frontmatter.name === 'sauces',
		).node.frontmatter,
		drinks: menu.allMarkdownRemark.edges.find(
			(e) => e.node.frontmatter.name === 'drinks',
		).node.frontmatter,
	};
};

export default useMenuData;
