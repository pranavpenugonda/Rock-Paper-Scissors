import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #223a5f;
  padding: 50px;
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const Header = styled.div`
  border: 1px solid #ffffff;
  padding: 10px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-radius: 8px;
`
export const ItemHeading = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 20px;
`
export const ScoreCont = styled.div`
  background-color: #ffffff;
  padding: 5px;
  border-radius: 8px;
  text-align: center;
  width: 120px;
`
export const ScoreHeading = styled.p`
  font-family: 'Roboto';
  color: #223a5f;
  font-size: 20px;
`
export const ScoreValue = styled.p`
  font-family: 'Roboto';
  color: #223a5f;
  font-size: 34px;
`
export const GameUlList = styled.ul`
  list-style-type: none;
  display: flex;
`
export const resultCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`
export const YouOpponentCont = styled.div`
  display: flex;
  justify-content: space-between;
`
export const YouOpponentHeading = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 34px;
`
export const YouOpponentImg = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
`
export const PlayAgainBtn = styled.button`
  border: none;
  padding: 10px;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  background-color: #ffffff;
  color: #223a5f;
  font-family: 'Roboto';
`
export const ResultBottomCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const MatchResult = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 34px;
`
