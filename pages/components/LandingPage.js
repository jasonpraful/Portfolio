import Image from 'next/image'
import styles from "../../styles/Landing.module.scss"

const height = 40;
const width = 40;

export default function LandingPage() {
    const SocialLinks = () => {
        return <div className={styles.links}>
            <a href="mailto:info@jasonpraful.co.uk"
               aria-roledescription='Link'
               title="info@jasonpraful.co.uk"
               target='blank'>
                <Image
                    src="/gmail.svg"
                    alt="info@jasonpraful.co.uk"
                    width={width}
                    height={height}
                    quality={100}
                />
            </a>
            <a href="https://github.com/JasonPraful"
               aria-roledescription='Link'
               title="jasonpraful"
               target='blank'>
                <Image
                    src="/github.png"
                    alt="JasonPraful"
                    width={width}
                    height={height}
                    quality={100}

                />
            </a>
            <a href="https://www.linkedin.com/in/jasonpraful/"
               title="Jason Praful Francis"
               target='blank'>
                <Image
                    src="/linkedin.png"
                    alt="Jason Praful"
                    width={width}
                    height={height}
                    quality={100}

                />
            </a>
            <a href="https://twitter.com/jasonpraful"
               title="@jasonpraful"
               target='blank'>
                <Image
                    src="/twitter.png"
                    alt="@jasonpraful"
                    width={width}
                    height={height}
                    quality={100}
                />
            </a>
            {/* <a href="https://discord.gg"
               title="freak2810#9756"
               target='blank'>
                <Image
                    src="/discord.svg"
                    alt="freak2810#9756"
                    width={width}
                    height={height}
                />
            </a> */}
            <a href="https://www.instagram.com/_.jason._/"
               title="_.jason._"
               target='blank'>
                <Image
                    src="/instagram.png"
                    alt="_.jason._"
                    width={width}
                    quality={100}
                    height={height}
                />
            </a>

        </div>
    }

    return <section className={styles.container}>
        <h1>Jason Praful</h1>
        <h2>Full Stack Developer | ML Engineer | Cloud Specialist</h2>
        <SocialLinks/>
        <br/>
        <br/>
        <a href="https://jasonpraful.co.uk/resume.pdf" title="PDF Resume" target="_blank"><h3 style={{fontSize: 2+'rem'}}>Download PDF Resume</h3></a>
    </section>
}