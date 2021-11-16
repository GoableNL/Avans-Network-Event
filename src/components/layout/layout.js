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

            <meta name={'description'} content={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. '} />
            <meta name={'author'} content={'Jonas ter Horst'} />
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