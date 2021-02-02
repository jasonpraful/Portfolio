import styles from "../../styles/Experience.module.scss";

const experience = [
    {
        role: 'Full Stack Developer in PMO office',
        company: 'Vodafone Group',
        type:'Full time',
        duration: '07/2019 - 08/2020',
        tasks: [
        ]
    },
    {
        role: 'Junior Software Developer',
        company: 'MockTheta, Inc.',
        type:'Internship',
        duration: '08/2019 - 07/2020 (1 year)',
        tasks: [
        ]
    },
]

export default function ExperienceList() {
    return <div className={styles.experienceList}>
        {
            experience.map(work => <div className={styles.place}>
                <h1>{work.role}</h1>
                <h3>{work.company}</h3>
                <p>{work.duration}</p>
                <p>{work.type}</p>
                <ul>
                    {
                        work.tasks.map(task => <li>{task}</li>)
                    }
                </ul>
            </div>)
        }

    </div>
}