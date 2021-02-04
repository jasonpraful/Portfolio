import styles from "../../styles/Education.module.scss";

const education = [
    {
        name: 'Cloud Engineering with Google Cloud Specialization',
        from: 'Google Cloud',
    },
    {
        name: 'Deep Learning Engineer',
        from: 'Edureka',
    },
    {
        name: 'Full-Stack React Developer',
        from: 'LinkedIn',
    },
    {
        name: 'Cloud Learning Architect',
        from: 'AWS',
    },
]

export default function CertificationsList() {
    return <div className={styles.educationList}>
        {
            education.map(study => <div className={styles.place}>
                <h1>{study.name}</h1>
                <h3>{study.from}</h3>
                {/* <p className={styles.marks}>{study.marks}</p> */}
            </div>)
        }

    </div>
}