import Image from 'next/image'
import styles from "../../styles/Landing.module.scss"

const height = 40;
const width = 40;

export default function LandingPage() {
    const SocialLinks = () => {
        return <div className={styles.links}>
            <a href="mailto:adityamanikanthrao@gmail.com"
               aria-roledescription='Link'
               title="jason.praful@gmail.com"
               target='blank'>
                <Image
                    src="/Social/gmail.svg"
                    alt="jason.praful@gmail.com"
                    width={width}
                    height={height}
                />
            </a>
            <a href="https://github.com/JasonPraful"
               aria-roledescription='Link'
               title="jasonpraful"
               target='blank'>
                <Image
                    src="/Social/github.svg"
                    alt="JasonPraful"
                    width={width}
                    height={height}
                />
            </a>
            <a href="https://www.linkedin.com/in/jasonpraful/"
               title="Jason Praful Francis"
               target='blank'>
                <Image
                    src="/Social/linkedin.svg"
                    alt="Jason Praful"
                    width={width}
                    height={height}
                />
            </a>
            <a href="https://twitter.com/jasonpraful"
               title="@jasonpraful"
               target='blank'>
                <Image
                    src="/Social/twitter.svg"
                    alt="@jasonpraful"
                    width={width}
                    height={height}
                />
            </a>
            {/* <a href="https://discord.gg"
               title="freak2810#9756"
               target='blank'>
                <Image
                    src="/Social/discord.svg"
                    alt="freak2810#9756"
                    width={width}
                    height={height}
                />
            </a> */}
            <a href="https://www.instagram.com/_.jason._/"
               title="_.jason._"
               target='blank'>
                <Image
                    src="/Social/instagram.svg"
                    alt="_.jason._"
                    width={width}
                    height={height}
                />
            </a>

        </div>
    }

    return <section className={styles.container}>
        <h1>Aditya Manikanth Rao</h1>
        <h2>Full Stack Developer</h2>
        <SocialLinks/>
    </section>
}