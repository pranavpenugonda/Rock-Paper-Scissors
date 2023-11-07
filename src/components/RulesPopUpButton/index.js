import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import 'reactjs-popup/dist/index.css'

import {RulesBtn, PopUpImg, PopUpCont, CloseBtn} from './styledComponents'

const RulesPopUpButton = () => (
  <div>
    <Popup modal trigger={<RulesBtn type="button">Rules</RulesBtn>}>
      {close => (
        <PopUpCont>
          <CloseBtn type="button" onClick={() => close()}>
            <RiCloseLine size={20} />
          </CloseBtn>
          <PopUpImg
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
        </PopUpCont>
      )}
    </Popup>
  </div>
)

export default RulesPopUpButton
