import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Construction from "../components/UnderConstruction/UnderConstruction"

const Archive = props => {
  const UnderConstructionMessage =
    "Soon you will be able to see the list of entries by category, but for now only the connection to WordPress is done. We still need to finish giving it a sexy design 😄."
  const {
    data: {
      allWpPost: { nodes, pageInfo },
    },
    pageContext: { archiveType, archivePath },
  } = props

  if (archivePath === "/") {
    return <Layout isHomePage />
  }

  return (
    <Layout>
      <Construction content={UnderConstructionMessage} />
    </Layout>
  )
}

export const query = graphql`
  query ArchivePage(
    $offset: Int!
    $perPage: Int!
    $userDatabaseId: Int
    $categoryDatabaseId: Int
  ) {
    allWpPost(
      limit: $perPage
      skip: $offset
      filter: {
        author: { node: { databaseId: { eq: $userDatabaseId } } }
        categories: {
          nodes: { elemMatch: { databaseId: { eq: $categoryDatabaseId } } }
        }
      }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        ...PostPreviewContent
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        currentPage
        pageCount
      }
    }
  }
`

export default Archive
