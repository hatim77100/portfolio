import Link from "next/link";

const Error404 = () => {
  return (
    <>
      <h1>Erreur cool</h1>
      <Link href="/">
        <button>Accuei</button>
      </Link>
    </>
  );
};

export default Error404;
