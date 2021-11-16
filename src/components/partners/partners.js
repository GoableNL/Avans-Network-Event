import style from "./style.module.scss";

const Partners = () =>
(
    <section className={style.partners}>
        <div className={'container'}>
            <div className={style.wrapper}>
                <img className={style.partner} src={'/image/partners/1.png'} height={40} />
                <img className={style.partner} src={'/image/partners/2.png'} height={80} />
                <img className={style.partner} src={'/image/partners/1.png'} height={40} />
                <img className={style.partner} src={'/image/partners/1.png'} height={40} />
                <img className={style.partner} src={'/image/partners/1.png'} height={40} />
            </div>
        </div>
    </section>
);

export default Partners;