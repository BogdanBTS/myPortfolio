import React from 'react'
import styles from "./NavbarLinks.module.css"

const NavbarLinks = ({href, label}) => {
  return (
    <li className={styles['navbar-links__list-item']}>
        <a className={styles['navbar-links__link']} href={href}>{label}</a>
    </li>
  )
}

export default NavbarLinks