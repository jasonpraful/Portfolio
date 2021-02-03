import Image from "next/image";
import styles from "../../styles/Technologies.module.scss";

const height = 50;
const width = 50;

const technologies = [
  {
    src: "/react.svg",
    alt: "ReactJS",
  },
  {
    src: "/vue.svg",
    alt: "VueJS",
  },
  {
    src: "/angular.svg",
    alt: "AngularJS",
  },
  {
    src: "/javascript.svg",
    alt: "JS",
  },
  {
    src: "/typescript.svg",
    alt: "TypeScript",
  },
  {
    src: "/redux.svg",
    alt: "Redux",
  },
  {
    src: "/nodejs.svg",
    alt: "Node.JS",
  },
  {
    src: "/express.svg",
    alt: "ExpressJS",
  },
  {
    src: "/mongodb.svg",
    alt: "MongoDB",
  },
  {
    src: "/mysql.svg",
    alt: "MySQL",
  },
  {
    src: "/firebase.svg",
    alt: "Firebase",
  },
  {
    src: "/rn.svg",
    alt: "React Native",
  },
  {
    src: "/swift.png",
    alt: "Swift",
  },
  {
    src: "/java.svg",
    alt: "Java",
  },
  {
    src: "/python.svg",
    alt: "Python",
  },
  {
    src: "/tensorflow.svg",
    alt: "Tensorflow",
  },
  {
    src: "/keras.svg",
    alt: "Keras",
  },
  {
    src: "/opencv.svg",
    alt: "OpenCV",
  },
  {
    src: "/c.svg",
    alt: "C++",
  },
  {
    src: "/docker.svg",
    alt: "Docker",
  },
  {
    src: "/jenkins.svg",
    alt: "Jenkins",
  },
  {
    src: "/terraform.svg",
    alt: "Terraform",
  },
  {
    src: "/kubernetes_new.png",
    alt: "Kubernetes",
  },
  {
    src: "/git.svg",
    alt: "Git",
  },
];

export default function TechnologiesList() {
  return (
    <div className={styles.technologyList}>
      {technologies.map((tech, index) => (
        <div key={index}>
          <Image
            src={tech.src}
            alt={tech.alt}
            height={height}
            width={width}
            className={styles.image}
            quality={100}
          />
          <p>{tech.alt}</p>
        </div>
      ))}
    </div>
  );
}
