import { useStaticQuery, graphql } from "gatsby";

export const useMenuData = () => {
    const { markdownRemark } = useStaticQuery(
        graphql`
            query MyQuery {
                markdownRemark(fileAbsolutePath: {regex: "/content\\/_menu/"}) {
                    frontmatter {
                        description
                        image
                        price
                        templateKey
                        title
                    }
                }
            }
        `
    );
    console.log(markdownRemark.frontmatter);
    return markdownRemark.frontmatter;
}