import { ArrowCircleDownIcon, CalendarIcon, ClockIcon, LocationMarkerIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import style from "./style.module.scss";

gsap.registerPlugin(ScrollTrigger);

const Topper = () =>
{
    /*let imageRef = useRef();

    useEffect(() =>
        {
            gsap.to(imageRef, 
                {
                    scale: 1.2,
                    rotate: 8,
                    ease: 'power4',
                    scrollTrigger: 
                    {
                        trigger: imageRef,
                        start: "top top+=200",
                        end: "top top-=100",
                        scrub: true
                    }
                }
            );
        }, []
    );*/

    return (
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
                            Welkom bij de aller eerste editie van het Avans Network Event!
                            We gaan beginnen met een korte introductie, gevold door de speeddates.
                            Helaas kunnen we de borrel niet door laten gaan vanwegen de coronamaatregelen.
                            Het programma is daarom iets aangepast! Maar dat maakt ons niet minder enthousiast!
                            We sluiten daarom na de speeddate af met een gezamelijk woordje.
                        </p>

                        <div className={'spacer-vertical-big'} />

                        <div className={'button'} onClick={() => document.getElementById('program').scrollIntoView()}>
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
                                    16 December
                                </span>
                            </div>

                            <div className={style.point}>
                                <ClockIcon height={20} />

                                <div className={'spacer-horizontal-small'} />

                                <span className={style.title}>
                                    13:30
                                </span>
                            </div>

                            <a href={`https://www.google.nl/maps/place/Statenlaan+29,+5223+LA+'s-Hertogenbosch/@51.6897816,5.2872429,17z/data=!3m1!4b1!4m5!3m4!1s0x47c6ee8994db424f:0x3127608d085576fc!8m2!3d51.6897783!4d5.2894316`}>
                                <div className={style.point}>
                                    <LocationMarkerIcon height={20} />

                                    <div className={'spacer-horizontal-small'} />

                                    <span className={style.title}>
                                        Statenlaan 29
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className={style.column}>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Topper;