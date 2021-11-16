import style from "./style.module.scss";

const Footer = () =>
(
    <footer className={style.footer}>
        <div className={'container'}>
            <div className={style.wrapper}>
                <p>
                    Copyright &copy; 2021
                </p>

                <p className={style.author}>
                    Created by <a target={'_blank'} href={'https://www.goable.nl'}>Goable</a>
                </p>
            </div>
        </div>
    </footer>
);

export default Footer;