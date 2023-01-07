import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {  Link } from "gatsby"

const Game = ({ game }) => {
    const logo = getImage(game.gameMeta.logo.localFile)
    return (
      <div className="GameTitleContainer">
        <h3 className="GameTitle">{game.gameMeta.title}</h3>
        <div className="GamesContainer">
          <p className="GameDescription">{game.gameMeta.description}</p>
          <Link to={game.slug}>
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

  export default Game;