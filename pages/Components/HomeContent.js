import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Blossom from './Media/blossom.png'

export default function HomeContent() {

    const web_info = "🚀 I'm 16 years old. I am now obsessed with 🎃 Javascript and work with it for most of my coding time. 📌 Currently I got into a whole new world called 🐍 Python and have been in love with it."

    return (
        <div className={styles.container}>
            <div className="container">
                <Image src={Blossom} alt="Teddy Bear Icon" draggable="false"/>
                <h1>bunleaps</h1>
                <p>{web_info}</p>
                <br />
                <Link href="#">
                    <a>Hit me! 💬</a>
                </Link>
            </div>
        </div>
    )
}