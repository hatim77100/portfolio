import Image from 'next/image'

let styles = {
  title: "uppercase underline text-center py-10",
  template: "grid grid-cols-2",
  templateItem1: "grid grid-cols-2",
  templateItem2: "grid grid-cols-2",
};

const Content = () => {
  return (
    <>
      <h1 className={styles.title}>Hello content</h1>
      <div className={styles.template}>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ad
            maiores ab et eaque dolorum sunt maxime molestias veniam
            consectetur.
          </p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ad
            maiores ab et eaque dolorum sunt maxime molestias veniam
            consectetur.
          </p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ad
            maiores ab et eaque dolorum sunt maxime molestias veniam
            consectetur.
          </p>
        </div>
      </div>
    </>
  );
};

export default Content;
