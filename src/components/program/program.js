import { BadgeCheckIcon, CheckIcon, ClockIcon, LocationMarkerIcon } from "@heroicons/react/outline";
import style from "./style.module.scss";

const data =
[
    {
        title: 'Verzamelen',
        description: ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        time: '14:00',
        location: 'Stratenlaan 29',
        type: 'Speeddates'
    },
    {
        title: 'Verzamelen Ondernemers',
        description: ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        time: '14:30',
        location: 'Stratenlaan 29',
        type: 'Speeddates'
    },
    {
        title: 'Start Speeddates',
        description: ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        time: '14:45',
        location: 'Stratenlaan 29',
        type: 'Speeddates'
    },
    {
        title: 'Einde',
        description: ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        time: '16:00',
        location: 'Stratenlaan 29',
        type: 'Speeddates'
    },
]

const Program = () =>
(
    <section className={style.program} id={'program'}>
        <div className={'container'}>
            <div className={'row medium-2'}>
                <div>
                    <h2>
                        Programma
                    </h2>

                    <div className={'spacer-vertical-small'} />

                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                    </p>

                    <div className={'spacer-vertical-large'} />
                </div>
            </div>

            <div className={'row small-2 medium-4'}>
                {data.map((element, index) => 
                    (
                        <div key={index}>
                            <div className={style.item}>
                                <h3 className={style.title}>
                                    {index + 1}. {element.title}
                                </h3>

                                <div className={'spacer-vertical'} />

                                <p className={style.description}>
                                    {element.description}
                                </p>
        
                                <div className={'spacer-vertical'} />

                                <div className={style.point}>
                                    <BadgeCheckIcon height={20} />
        
                                    <div className={'spacer-horizontal-small'} />
        
                                    <span className={style.title}>
                                        {element.type}
                                    </span>
                                </div>

                                <div className={'spacer-vertical-small'} />
        
                                <div className={style.point}>
                                    <ClockIcon height={20} />
        
                                    <div className={'spacer-horizontal-small'} />
        
                                    <span className={style.title}>
                                        {element.time}
                                    </span>
                                </div>
        
                                <div className={'spacer-vertical-small'} />
        
                                <div className={style.point}>
                                    <LocationMarkerIcon height={20} />
        
                                    <div className={'spacer-horizontal-small'} />
        
                                    <span className={style.title}>
                                        {element.location}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    </section>
);

export default Program;