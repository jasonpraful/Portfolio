import styles from "../../styles/Education.module.scss";
import CertificationsList from "./CertificationsList";


export default function CertificationsPage() {
    return <section className={styles.education}>
        <div className={styles.heading}>
            Certifications
        </div>
        <CertificationsList/>
    </section>
}