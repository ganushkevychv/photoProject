import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundImage from "gatsby-background-image"
import { Badge } from "reactstrap"
import { graphql } from "gatsby"
import Header from "../components/header"
import Story from "../components/story"



const IndexPage = (props) => {

const background = {
  width: "100%",
  height:"100vh",
  backgroundSize:"cover",
  backgroundPosition:"center",
  backgroundRepeat:"no-repeat",
  marginBottom:"30px",
}
const contentBox = {
  display:"flex",
  height:"100%",
  alignItems:"center",
  color:"red",
}
const content = {
  maxWidth:"700px",
  textAlign:"center",
  margin:"0 auto",
}
return(
  <Layout>
    <SEO title="Home" />
    <BackgroundImage
    fluid={props.data.gdansk.childImageSharp.fluid}
    style={background}
    >
<Header/>
<div style={contentBox}>
<div style={content}>
  <h1><Badge color="danger">Наши в Троймясте</Badge></h1>
</div>
</div>
    </BackgroundImage>
    <Story/>
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
