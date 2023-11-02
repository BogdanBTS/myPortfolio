import React from 'react'
import styles from "./NavbarLinks.module.css"

const NavbarLinks = ({ href, label, active, onClick }) => {
  return (
    <li className={styles['menu-links__list-item']}>
      <a className={`${styles['menu-links__link']} ${active ? 'active' : ''}`} href={href} onClick={onClick}>{label}</a>
    </li>
  )
}

export default NavbarLinks