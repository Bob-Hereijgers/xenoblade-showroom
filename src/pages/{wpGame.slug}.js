import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const GamePage = ({
  data: {
    wpGame: { gameMeta: game },
  },
}) => {
    const image = getImage(game.gameplayImages.localFile)
  return (
    <Layout pageTitle="Game Template">
      <div>
<GatsbyImage image={image} alt={game.gameplayImages.altText} />
        <h3>{game.title}</h3>
        <p>{game.description }</p>
        <p>test</p>
        <p>protagonist: {game.protagonist}</p>
        <p>antagonist: {game.antagonist}</p>
        <p>Best Song: {game.bestSong}</p>
        <p>The World:</p> {game.theWorld}
        <p>story: {game.story}</p>
        <p>reviews: </p> {game.reviews}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    wpGame(id: { eq: $id }) {
      gameMeta {
        title
        description
        protagonist
        antagonist
        bestSong
        theWorld
        story
        reviews
        gameplayImages {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
            altText
          }
      }
    }
  }
`

export default GamePage
