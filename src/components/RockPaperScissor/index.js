import {Component} from 'react'

import {
  BgContainer,
  Header,
  ItemHeading,
  ScoreCont,
  ScoreHeading,
  ScoreValue,
  GameUlList,
  resultCont,
  MatchResult,
  ResultBottomCont,
  YouOpponentCont,
  YouOpponentHeading,
  YouOpponentImg,
  PlayAgainBtn,
} from './styledComponents'

import RulesPopUpButton from '../RulesPopUpButton'
import GameButtonItem from '../GameButtonItem'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class RockPaperScissor extends Component {
  state = {
    score: 0,
    isGameOver: false,
    playerSelected: {},
    opponentSelected: choicesList[Math.floor(Math.random() * 3)],
    matchResult: '',
  }

  onPlayGameAgain = () => {
    this.setState({
      isGameOver: false,
      playerSelected: {},
      opponentSelected: choicesList[Math.floor(Math.random() * 3)],
      matchResult: '',
    })
  }

  renderGameResults = () => {
    const {playerSelected, opponentSelected, matchResult} = this.state

    return (
      <resultCont>
        <YouOpponentCont>
          <div>
            <YouOpponentHeading>YOU</YouOpponentHeading>
            <YouOpponentImg src={playerSelected.imageUrl} alt="your choice" />
          </div>
          <div>
            <YouOpponentHeading>OPPONENT</YouOpponentHeading>
            <YouOpponentImg
              src={opponentSelected.imageUrl}
              alt="opponent choice"
            />
          </div>
        </YouOpponentCont>
        <ResultBottomCont>
          <MatchResult>{matchResult}</MatchResult>
          <PlayAgainBtn type="button" onClick={this.onPlayGameAgain}>
            PLAY AGAIN
          </PlayAgainBtn>
        </ResultBottomCont>
      </resultCont>
    )
  }

  chechResults = userSelectedItem => {
    const {opponentSelected} = this.state

    if (userSelectedItem.id === opponentSelected.id) {
      this.setState({
        isGameOver: true,
        matchResult: 'IT IS DRAW',
        playerSelected: userSelectedItem,
      })
    } else if (
      (userSelectedItem.id === 'ROCK' && opponentSelected.id === 'SCISSORS') ||
      (userSelectedItem.id === 'PAPER' && opponentSelected.id === 'ROCK') ||
      (userSelectedItem.id === 'SCISSORS' && opponentSelected.id === 'PAPER')
    ) {
      this.setState(prevState => ({
        isGameOver: true,
        matchResult: 'YOU WON',
        score: prevState.score + 1,
        playerSelected: userSelectedItem,
      }))
    } else {
      this.setState(prevState => ({
        isGameOver: true,
        matchResult: 'YOU LOSE',
        score: prevState.score - 1,
        playerSelected: userSelectedItem,
      }))
    }
  }

  renderGameView = () => (
    <GameUlList>
      {choicesList.map(eachChoice => (
        <GameButtonItem
          gameItemDetails={eachChoice}
          key={eachChoice.id}
          chechResults={this.chechResults}
        />
      ))}
    </GameUlList>
  )

  render() {
    const {score, isGameOver} = this.state

    return (
      <BgContainer>
        <Header>
          <div>
            <ItemHeading>
              ROCK
              <br />
              PAPER
              <br />
              SCISSORS
            </ItemHeading>
          </div>
          <ScoreCont>
            <ScoreHeading>SCORE</ScoreHeading>
            <ScoreValue>{score}</ScoreValue>
          </ScoreCont>
        </Header>
        {isGameOver ? this.renderGameResults() : this.renderGameView()}
        <RulesPopUpButton />
      </BgContainer>
    )
  }
}

export default RockPaperScissor
