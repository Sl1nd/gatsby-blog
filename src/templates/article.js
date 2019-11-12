import React from 'react'
import { Link, graphql } from 'gatsby'
import ReactMarkdown from "react-markdown" 
import Layout from '../components/layout' 

const ArticleTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiArticle.Title}</h1>
    <p>by <Link to={`/authors/User_${data.strapiArticle.author.id}`}>{data.strapiArticle.author.username}</Link></p>
    <ReactMarkdown source={data.strapiArticle.Content} />
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: {eq: $id}) {
      Title
      Content
      author {
        id
        username
      }
    }
  }
`