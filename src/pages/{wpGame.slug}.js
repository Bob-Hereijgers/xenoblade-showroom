import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "./game.css"

const GamePage = ({
  data: {
    wpGame: { gameMeta: game },
  },
}) => {
  const image = getImage(game.gameplayImages.localFile)
  const reviews = game.reviews.split("-")
  return (
    <Layout pageTitle="Game Template">
      <div>
        <div className="GameImage">
          <h1 className="GamePageTitle">{game.title}</h1>
          <div className="ImageCosmetic">
          <GatsbyImage image={image} alt={game.gameplayImages.altText} />
          </div>
        </div>
        <div className="Description">
          <p>{game.description}</p>
          <p>{game.story}</p>
        </div>
        <div className="Characters">
          <div className="MainCharacters">
          <p className="MainCharacter">Protagonist: {game.protagonist}</p>
          <p className="MainCharacter">Antagonist: {game.antagonist}</p>
          </div>
          <p className="Favorite">Favorite Character: {game.favoriteCharacter}</p>
        </div>
        <div className="Songs">
          <div>
            <p className="SongTitle">Best Area Theme:</p>
            <iframe
              width="528"
              height="297"
              src={game.bestAreaTheme}
              title="Best Area Theme"
            />
          </div>
          <div>
            <p className="SongTitle">Best Battle Theme:</p>
            <iframe
              width="528"
              height="297"
              src={game.bestBattleTheme}
              title="Best Battle Theme"
            />
          </div>
        </div>
        <div className="ReviewContainer">
          <p className="Review">{reviews[0]}</p>
        { reviews[1] ? <p className="Review">{reviews[1]}</p> : null}
        { reviews[2] ? <p className="Review">{reviews[2]}</p> : null}
        </div>
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
        favoriteCharacter
        bestAreaTheme
        bestBattleTheme
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
