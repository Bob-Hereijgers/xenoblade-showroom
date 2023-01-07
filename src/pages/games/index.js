import * as React from "react"
import Layout from "../../components/layout"
import "./games.css"
import { graphql } from "gatsby"
import Game from "../../components/game"

const GamesPage = ({
  data: {
    allWpGame: { edges },
  },
}) => {
  return (
    <section>
      <Layout pageTitle={"Games"}>
        <title>Game page</title>
        <div className="PageTitleContainer">
        <h1 className="PageTitle">Game Overview</h1>
        </div>
        <div className="GamesPageContainer">
          {edges.map(({ node: game }) => (
            <Game game={game} />
          ))}
        </div>
      </Layout>
    </section>
  )
}

export const query = graphql`
  query {
    allWpGame {
      edges {
        node {
          gameMeta {
            title
            description
            logo {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
            }
          }
          slug
        }
      }
    }
  }
`

export default GamesPage
