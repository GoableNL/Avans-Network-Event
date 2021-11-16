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
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
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