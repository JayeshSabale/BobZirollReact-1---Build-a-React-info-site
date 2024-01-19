import React from 'react'

import git from "./Icons/GitHub_Icon.svg"
import face from "./Icons/Facebook_Icon.svg"
import twitter from "./Icons/Twitter_Icon.svg"
import insta from "./Icons/Instagram_Icon.svg"

function Footer() {
  return (
    <div className='footer--container'>
        <img src={twitter} alt=''/>
        <img src={face} alt=''/>
        <img src={insta} alt=''/>
        <img src={git} alt=''/>
    </div>
  )
}

export default Footer