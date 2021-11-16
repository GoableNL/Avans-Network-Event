import { ArrowCircleUpIcon } from "@heroicons/react/outline";
import style from "./style.module.scss";

const CallToAction = () =>
(
    <section className={style.callToAction}>
        <div className={'container'}>
            <div className={style.wrapper}>
                <h2 className={style.title}>
                    Lorem ipsum dolor
                </h2>

                <div className={'spacer-vertical-big'} />

                <p className={style.description}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.
                </p>

                <div className={'spacer-vertical-big'} />

                <div className={`${style.button} button`}>
                    <ArrowCircleUpIcon height={20} />

                    <div className={'spacer-horizontal-small'} />

                    <span>
                        Lees meer
                    </span>
                </div>
            </div>
        </div>
    </section>
);

export default CallToAction;