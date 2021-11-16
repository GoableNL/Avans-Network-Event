import Footer from "./footer/footer";
import Header from "./header/header";
import style from "./style.module.scss";
import Head from "next/head";

const Layout = ({ children }) =>
(
    <div className={style.layout}>
        <Head>
            <title>
                ANE. Woensdag 8 december om 16:30.
            </title>
        </Head>
        <>
            <Header />

            <main className={style.content}>
                {children}
            </main>

            <Footer />
        </>
    </div>
);

export default Layout;