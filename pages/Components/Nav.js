import styles from '../../styles/Home.module.css'
import Link from 'next/link'

export default function Nav() {

  const web_name = "<bunleaps/>"

  return (
    <div className={styles.Home}>
        <nav className="navbar container">
          <div className="container-fluid">
            {/* web name */}
            <Link href="/">
            <a className="navbar-brand">{web_name}</a>
            </Link>

            {/* nav items */}
            <ul className="nav">
              <li className="nav-item">
                <Link href="/gallery">
                    <a className="nav-link">Gallery</a>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
    </div>
  )
}
