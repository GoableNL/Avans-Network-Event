import style from "./style.module.scss";

const Partners = () =>
(
    <section className={style.partners}>
        <div className={'container'}>
            <div className={style.wrapper}>
                <img className={style.partner} src={'/image/partners/1.png'} alt={'Avans Hogeschool'} height={40} />
                <img className={style.partner} src={'/image/partners/2.png'} alt={'FC Den Bosch'} height={60} />
                <img className={style.partner} src={'/image/partners/3.jpg'} alt={'Regio Business'} height={40} />
                <img className={style.partner} src={'/image/partners/1.png'} alt={'Avans Hogeschool'} height={40} />
                <img className={style.partner} src={'/image/partners/2.png'} alt={'FC Den Bosch'} height={60} />
                <img className={style.partner} src={'/image/partners/3.jpg'} alt={'Regio Business'} height={40} />
            </div>
        </div>
    </section>
);

export default Partners;