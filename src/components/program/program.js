import { BadgeCheckIcon, CheckIcon, ClockIcon, LocationMarkerIcon } from "@heroicons/react/outline";
import style from "./style.module.scss";

const data =
[
    {
        title: 'Verzamelen',
        description: '...',
        time: '14:00',
        location: 'Stratenlaan 29',
        type: 'Speeddates'
    },
    {
        title: 'Verzamelen Ondernemers',
        description: '...',
        time: '14:30',
        location: 'Stratenlaan 29',
        type: 'Speeddates'
    },
    {
        title: 'Start Speeddates',
        description: '...',
        time: '14:45',
        location: 'Stratenlaan 29',
        type: 'Speeddates'
    },
    {
        title: 'Einde',
        description: '...',
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
                        Het programma
                    </h2>

                    <div className={'spacer-vertical-small'} />

                    <p>
                        Tijdens de speeddate krijgen de leerlingen de kans om kort de ondernemers te spreken en te ondervragen. Na een bepaalde tijd draai je door.
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