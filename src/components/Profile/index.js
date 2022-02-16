import React from 'react'

import avatar from '../../assets/img/avatar.jpeg'
import github from '../../assets/icon/github.svg'
import linkedin from '../../assets/icon/linkedin.svg'

import styles from './styles.css'

const Profile = () => (
  <div className={styles.body}>
    <img className={styles.avatar} src={avatar} alt="avatar" />
    <h1 className={styles.name}>Thiago Feijó</h1>
    <h2 className={styles.role}>Senior React Developer</h2>
    <ul className={styles.ul}>
      <li className={styles.li}>
        <a href="https://github.com/thiagofeijor/" target="_black" aria-label="Github">
          <img className={styles.aIconLink} src={github} alt="Github link" />
        </a>
      </li>
      <li className={styles.li}>
        <a href="https://www.linkedin.com/in/thiagofeijor/" target="_black" aria-label="LinkedIn">
          <img className={styles.aIconLink} src={linkedin} alt="Linkedin link" />
        </a>
      </li>
    </ul>
  </div>
)

export default Profile
