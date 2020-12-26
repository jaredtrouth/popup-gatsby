import { useStaticQuery, graphql } from "gatsby";

const useMenuData = () => {
    const menu = useStaticQuery(graphql`
    query {
        entrees: 
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/content\\/_menu\\/entrees/"}}) {
            edges {
                node {
                    frontmatter {
                        description
                        price
                        templateKey
                        title
                    }
                }
            }
        }
        sides: 
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/content\\/_menu\\/sides/"}}) {
            edges {
                node {
                    frontmatter {
                        description
                        price
                        templateKey
                        title
                    }
                }
            }
        }
        addons: 
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/content\\/_menu\\/addons/"}}) {
            edges {
                node {
                    frontmatter {
                        description
                        price
                        templateKey
                        title
                    }
                }
            }
        }
        sauces: 
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/content\\/_menu\\/sauces/"}}) {
            edges {
                node {
                    frontmatter {
                        description
                        templateKey
                        title
                    }
                }
            }
        }
        drinks: 
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/content\\/_menu\\/drinks/"}}) {
            edges {
                node {
                    frontmatter {
                        description
                        price
                        templateKey
                        title
                    }
                }
            }
        }
    }
    `
    );
    return {
        entrees: menu.entrees.edges.map(edge => edge.node.frontmatter),
        sides: menu.sides.edges.map(edge => edge.node.frontmatter),
        addons: menu.addons.edges.map(edge => edge.node.frontmatter),
        sauces: menu.sauces.edges.map(edge => edge.node.frontmatter),
        drinks: menu.drinks.edges.map(edge => edge.node.frontmatter),
    };
};

export default useMenuData;