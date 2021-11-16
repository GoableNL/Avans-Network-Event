import { ArrowCircleDownIcon } from "@heroicons/react/outline";
import style from "./style.module.scss";

const Topper = () =>
(
    <section className={style.topper}>
        <div className={'container'}>
            <div className={'row no-gap large-2'}>
                <div className={style.column}>
                    <h1 className={style.title}>
                        Avans <br />
                        Network <br />
                        Event.
                    </h1>

                    <div className={'spacer-vertical-big'} />

                    <p>
                        Welkom bij de aller eerste editie van het Avans Network Event! We gaan beginnen met een korte introductie, gevolgd door een speeddate. Hierin kunnen de studenten kort elke ondernemer spreken, hun verhaal aanhoren en vragen stellen. Hierop volgt een super gave netwerkborrel mede georganiseerd door Regio Business. We sluiten om 23:00 af na een hopelijk geslaagde avond vol nieuwe ideeën, kennis en motivatie.
                    </p>

                    <div className={'spacer-vertical-big'} />

                    <div className={'button'}>
                        <ArrowCircleDownIcon height={20} />

                        <div className={'spacer-horizontal-small'} />

                        <span>
                            Lees meer
                        </span>
                    </div>
                </div>

                <div className={style.column}>
                    <img src={'/image/topper.png'} width={'100%'} />
                </div>
            </div>
        </div>
    </section>
);

export default Topper;