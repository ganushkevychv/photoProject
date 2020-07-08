import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundImage from "gatsby-background-image"
import { graphql } from "gatsby"


const IndexPage = (props) => {

const background = {
  width: "100%",
  height:"100vh",
  backgroundSize:"cover",
  backgroundPosition:"center",
  backgroundRepeat:"no-repeat",
  marginBottom:"10px",
}
return(
  <Layout>
    <SEO title="Home" />
    <BackgroundImage
    fluid={props.data.gdansk.childImageSharp.fluid}
    style={background}
    >
hsdkfhksdhkfs
    </BackgroundImage>

  </Layout>
)
}

export default IndexPage

export const pageQuery = graphql`
query {
  gdansk: file(relativePath: {eq: "gdansk.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 1000){
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;
