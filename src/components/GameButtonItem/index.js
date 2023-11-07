import {GameButton, GameImg} from './styledComponents'

const GameButtonItem = props => {
  const {gameItemDetails, chechResults} = props
  const {imageUrl, id} = gameItemDetails

  const dataTestId = () => {
    switch (id) {
      case 'ROCK':
        return 'rockButton'
      case 'PAPER':
        return 'paperButton'
      case 'SCISSORS':
        return 'scissorsButton'
      default:
        return null
    }
  }

  const onCheckResults = () => chechResults(gameItemDetails)

  return (
    <li>
      <GameButton
        type="button"
        data-testid={dataTestId()}
        onClick={onCheckResults}
      >
        <GameImg src={imageUrl} alt={id} />
      </GameButton>
    </li>
  )
}

export default GameButtonItem
