import * as React from "react"
import Layout from "../components/layout"
import "./games.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"

const Game = ({ game }) => {
  const logo = getImage(game.gameMeta.logo.localFile)
  return (
    <div className="GameTitleContainer">
      <h3 className="GameTitle">{game.gameMeta.title}</h3>
      <div className="GamesContainer">
        <p className="GameDescription">{game.gameMeta.description}</p>
        <Link to={"/"+game.slug}>
        <GatsbyImage
          image={logo}
          alt={game.gameMeta.logo.altText}
          width={500}
          height={160}
        />
        </Link>
      </div>
    </div>
  )
}

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
