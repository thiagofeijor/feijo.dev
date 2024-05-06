import React from 'react'

import avatar from '../../assets/img/avatar.jpeg'
import GithubIcon from '../../assets/icon/github.svg'
import LinkedinIcon from '../../assets/icon/linkedin.svg'

const Profile = () => (
  <div>
    <img src={avatar} alt="avatar" />
    <h1>Thiago Feijó</h1>
    <h2>Senior React Developer</h2>
    <ul>
      <li>
        <a href="https://github.com/thiagofeijor/" target="_black" aria-label="Github">
          <GithubIcon alt="Github link" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/thiagofeijor/" target="_black" aria-label="LinkedIn">
          <LinkedinIcon alt="Linkedin link" />
        </a>
      </li>
    </ul>
  </div>
)

export default Profile
