import Footer from "./footer/footer";
import Header from "./header/header";
import style from "./style.module.scss";

const Layout = ({ children }) =>
(
    <div className={style.layout}>
        <Header />

        <main className={style.content}>
            {children}
        </main>

        <Footer />
    </div>
);

export default Layout;