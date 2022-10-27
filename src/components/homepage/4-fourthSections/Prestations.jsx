import Image from "next/image";
import styles from "./styles";
import Projets from "./projets";
import data from "./data";

const Prestation = () => {
  return (
    <section>
      <div className={`${styles.mb8}`}>
        <h2 className={`${styles.h2}`}>Mes prestations</h2>
        <div className={`${styles.flexCenter}`}>
          <hr className={`${styles.border}`} />
        </div>
      </div>
      {data.projects.map((project) => {
        // console.log(project);
        return (
          <div key={project._id}>
            <Projets
              image={<Image src={project.image} width={80} height={80} />}
              title={project.title}
              p1={project.p1}
              p2={project.p2}
              p3={project.p3}
              p4={project.p4}
            />
          </div>
        );
      })}
    </section>
  );
};

export default Prestation;
