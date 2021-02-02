import styles from "../../styles/Education.module.scss";

const education = [
    {
        class: 'B.Eng in Computer Systems Engineering',
        college: 'Brunel University London',
        city: '(London, UK)',
        duration: '09/2017 - Present',
        marks: 'First Class (Expected)'
    },
    {
        class: 'XII (A-Levels Equivalent)',
        college: 'SJPUC',
        city: '(Bangalore, IN)',
        duration: '06/2015 - 05/2017',
        marks: '96.5%'
    },
    {
        class: 'X (GCSE Equivalent)',
        college: 'Clarence High School',
        city: '(Bangalore, IN)',
        duration: '05/2015',
        marks: '9.7 CGPA'
    }
]

export default function EducationList() {
    return <div className={styles.educationList}>
        {
            education.map(study => <div className={styles.place}>
                <h1>{study.class}</h1>
                <h3>{study.college} <span>{study.city}</span></h3>
                <p>{study.duration}</p>
                {/* <p className={styles.marks}>{study.marks}</p> */}
            </div>)
        }

    </div>
}