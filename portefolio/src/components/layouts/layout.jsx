import { Navbar } from "./navbar"
import Footer from "./footer";

let styles = {
    main: "min-h-screen"
}

const Layout = ({children}) => {
    return (
        <>
            <Navbar />
            <main className={styles.main}>{children}</main>
            <Footer />
        </>
    )
}

export default Layout;