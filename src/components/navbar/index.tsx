import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

import { useRouter } from 'next/router'
import styles from './navbar.module.scss'


const Navbar = () => {
  const router = useRouter()

  
  return (
    <div className={styles.navbar}>
      <nav>
        <Link href='/' className={router.pathname == '/' ? styles.active : ''}>
          <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
        </Link>
        <Link href='/about' className={`${styles.aboutLink} ${router.pathname == '/about' ? styles.active : ''}`}>
          <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
        </Link>
        <Link href='/contact' className={`${styles.contactLink} ${router.pathname == '/contact' ? styles.active : ''}`}>
          <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
        </Link>
      </nav>
      <ul>
        <li>
          <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/dai-oka-6933a2190/'>
            <FontAwesomeIcon icon={faLinkedin} color='4d4d4e' />
          </a>
        </li>
        <li>
          <a target='_blank' rel='noreferrer' href='https://github.com/daiokas'>
            <FontAwesomeIcon icon={faGithub} color='4d4d4e' />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar