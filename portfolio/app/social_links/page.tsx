'use client'
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css"

export default function SocialLinks(){
    return (<>
        <div style={{
            width: "300px",
            height: "50px",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center"
        }}>
            <Link href="https://github.com/GurkirtSingh">
                <Image src="/images/github-mark.png" alt="github black logo" width="50" height="50"/>
            </Link>
            <Link href="https://linkedin.com/in/gurkirtsingh143">
                <Image className={styles.linkedInLink} src="/images/LI-In-Bug.png" alt="linkedIn logo" width="59" height="50"/>
            </Link>
            <Link href="https://www.instagram.com/gurkirtsingh143/">
                <Image className={styles.instagramLink} src="/images/Instagram_Glyph_Black.png" alt="Instagram logo" width="50" height="50"/>
            </Link>
        </div>
    </>)
}