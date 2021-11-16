import { BadgeCheckIcon, CheckIcon, ClockIcon, LocationMarkerIcon } from "@heroicons/react/outline";
import style from "./style.module.scss";

const data =
[
    {
        title: 'Introductie',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. ',
        time: '14:00',
        location: 'FC Den Bosch',
        type: 'Speeddates'
    },
    {
        title: 'Speeddate ondernemers',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. ',
        time: '14:15',
        location: 'FC Den Bosch',
        type: 'Speeddates'
    },
    {
        title: 'Afsluitig',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. ',
        time: '16:00',
        location: 'FC Den Bosch',
        type: 'Speeddates'
    },
    {
        title: 'Welkomstdrankje',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. ',
        time: '17:00',
        location: 'FC Den Bosch',
        type: 'Netwerkborrel'
    },
    {
        title: 'BOB Connect',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. ',
        time: '18:00',
        location: 'FC Den Bosch',
        type: 'Netwerkborrel'
    },
    {
        title: 'Culinaire verrasing',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. ',
        time: '19:00',
        location: 'FC Den Bosch',
        type: 'Netwerkborrel'
    },
    {
        title: 'BOB Soul',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. ',
        time: '20:00',
        location: 'FC Den Bosch',
        type: 'Netwerkborrel'
    },
    {
        title: 'Einde',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. ',
        time: '23:00',
        location: 'FC Den Bosch',
        type: 'Netwerkborrel'
    }
]

const Program = () =>
(
    <section className={style.program}>
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

            <div className={'row small-2 medium-3'}>
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