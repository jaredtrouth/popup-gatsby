import { useStaticQuery, graphql } from "gatsby";

const useMenuData = () => {
    const menu = useStaticQuery(graphql`
    {
        allMenuYaml {
            edges {
                node {
                    name
                    title
                    items {
                        description
                        price
                        title
                    }
                    price
                }
            }
        }
    }
    `);
    
    return {
        entrees: menu.allMenuYaml.edges.find(e => e.node.name === 'entrees').node,
        sides: menu.allMenuYaml.edges.find(e => e.node.name === 'sides').node,
        addons: menu.allMenuYaml.edges.find(e => e.node.name === 'addons').node,
        sauces: menu.allMenuYaml.edges.find(e => e.node.name === 'sauces').node,
        drinks: menu.allMenuYaml.edges.find(e => e.node.name === 'drinks').node,
    }
};

export default useMenuData;