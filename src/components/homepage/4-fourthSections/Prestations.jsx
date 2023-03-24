import Image from "next/image";
import { styles } from "./styles";
import { stylesMd } from "./styles";
import { stylesLg } from "./styles";
import Projets from "./projets";
import data from "./data";

const Prestation = () => {
  return (
    <section>
      <div
        className={`${styles.mb8}`}
        data-aos="zoom-in"
        data-aos-offset="50"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="false"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <h2 className={`${styles.h2} ${styles.fontAlkalami}`}>Prestations</h2>
        <div className={`${styles.flexCenter}`}>
          <hr
            className={`${styles.border} ${stylesMd.width} ${stylesLg.width}`}
          />
        </div>
      </div>
      <div className={stylesMd.grid}>
        {data.projects.map((project) => {
          // console.log(project);
          return (
            <div key={project._id}>
              <Projets
                image={<Image src={project.image} width={80} height={80} alt={project.title} />}
                title={project.title}
                p1={project.p1}
                p2={project.p2}
                p3={project.p3}
                p4={project.p4}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Prestation;
