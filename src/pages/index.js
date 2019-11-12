import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import ReactMarkdown from "react-markdown"
import "../styles/global.css"  

const IndexPage = ({data}) => (
  <Layout>
    <ul>
      {data.allStrapiArticle.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/${document.node.id}`}>{document.node.Title}</Link>
          </h2>
          <ReactMarkdown 
            source={document.node.Content.substring(0,500).concat("...")}
            className="indexArticle" />

          <Link to={`/${document.node.id}`}>Read more</Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`  
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          id
          Title
          Content
        }
      }
    }
  }
`