import styles from "../../styles/Experience.module.scss";

const experience = [
    {
        role: 'Full Stack Developer in PMO office',
        company: 'Vodafone Group',
        type:'Full time',
        duration: '07/2019 - 08/2020',
        location:'Newbury, UK',
        tasks: [
        ]
    },
    {
        role: 'Frontend Developer',
        company: 'Otermans Institute',
        type:'Internship',
        duration: '07/2019 - 08/2020',
        location: 'London, UK',
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
                <p>{work.location}</p>
                <ul>
                    {
                        work.tasks.map(task => <li>{task}</li>)
                    }
                </ul>
            </div>)
        }

    </div>
}