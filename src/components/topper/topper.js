import { ArrowCircleDownIcon, CalendarIcon, ClockIcon, LocationMarkerIcon, PlusCircleIcon } from "@heroicons/react/outline";
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

                    <div className={style.points}>
                        <div className={style.point}>
                            <CalendarIcon height={20} />

                            <div className={'spacer-horizontal-small'} />

                            <span className={style.title}>
                                8 December
                            </span>
                        </div>

                        <div className={style.point}>
                            <ClockIcon height={20} />

                            <div className={'spacer-horizontal-small'} />

                            <span className={style.title}>
                                14:00
                            </span>
                        </div>

                        <a target={'_blank'} href={`https://www.google.nl/maps/place/Victorialaan+21,+5213+JG+'s-Hertogenbosch/@51.7014353,5.3266584,17z/data=!3m1!4b1!4m5!3m4!1s0x47c6efb2f45f3091:0xb760be8eeb2b553a!8m2!3d51.701432!4d5.3288471`}>
                            <div className={style.point}>
                                <LocationMarkerIcon height={20} />

                                <div className={'spacer-horizontal-small'} />

                                <span className={style.title}>
                                    FC Den Bosch
                                </span>
                            </div>
                        </a>
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