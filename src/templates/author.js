import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import ReactMarkdown from "react-markdown"

const UserTemplate = ({ data }) => (
    <Layout>
      <h1>{data.strapiUser.username}</h1>
      <ul>
        {data.strapiUser.articles.map(article => (
          <li key={article.id}>
            <h2>
              <Link to={`/Article_${article.id}`}>{article.Title}</Link>
            </h2>
            <ReactMarkdown 
              source={article.Content.substring(0, 500).concat("...")}
              className="indexArticle"
            />
            <Link to={`/Article_${article.id}`}>Read more</Link>  
          </li>
        ))}
      </ul>
    </Layout>
  )
  
export default UserTemplate

export const query = graphql`
  query UserTemplate($id: String!) {
    strapiUser(id: { eq: $id }) {
      id
      username
      articles {
        id
        Title
        Content
      }
    }
  }
` 