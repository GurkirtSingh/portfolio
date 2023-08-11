'use client'
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css"

const handleResumeClick = () =>{
    window.open('/')
}
export default function Navbar(){
    return (<>
    <div className={styles.navframe}>
        <Image className={styles.navlogo} src="/images/Logo.jpg" width="182" height="41" alt="website logo"/>
        <div className={styles.navlinks}>
            <Link className={styles.navlink} href="/">Projects</Link>
            <Link className={styles.navlink} href="/">Education</Link>
            <Link className={styles.navlink} href="/">Contact</Link>
            <Link href="/resume.pdf">
                <button className={styles.resumeBtn}>Resume</button>
            </Link>
        </div>
    </div>
    </>)
}