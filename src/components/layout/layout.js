import Footer from "./footer/footer";
import Header from "./header/header";
import style from "./style.module.scss";
import Head from "next/head";

const Layout = ({ children }) =>
(
    <div className={style.layout}>
        <Head>
            <title>
                ANE. Woensdag 16 December om 16:30.
            </title>

            <meta name={'description'} content={'Welkom bij de aller eerste editie van het Avans Network Event! We gaan beginnen met een korte introductie, gevolgd door een speeddate. Hierin kunnen de studenten kort elke ondernemer spreken, hun verhaal aanhoren en vragen stellen. Hierop volgt een super gave netwerkborrel mede georganiseerd door Regio Business. We sluiten om 23:00 af na een hopelijk geslaagde avond vol nieuwe ideeën, kennis en motivatie.'} />
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