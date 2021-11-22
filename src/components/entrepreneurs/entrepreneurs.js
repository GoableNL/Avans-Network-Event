import { ClockIcon, OfficeBuildingIcon } from "@heroicons/react/outline";
import style from "./style.module.scss";

const data =
[
    {
        name: 'Ray Klaassens',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies.'
    },
    {
        name: 'Jonas ter Horst',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies.'
    },
    {
        name: 'Jonas ter Horst',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies.'
    },
    {
        name: 'Jonas ter Horst',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies.'
    },
    {
        name: 'Jonas ter Horst',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies.'
    }
];

const Entrepreneurs = () =>
(
    <section className={style.entrepreneurs} id={'entrepreneurs'}>
        <div className={'container'}>
            <div className={'row medium-2'}>
                <div>
                    <h2>
                    Ondernemers
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
                            <div className={style.entrepreneur}>
                                <img className={style.image} src={'/image/entrepreneur.jpg'} />
        
                                <div className={style.body}>
                                    <h3 className={style.title}>
                                        {index + 1}. {element.name}
                                    </h3>
        
                                    <div className={'spacer-vertical-small'} />
        
                                    <p className={style.description}>
                                        {element.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    </section>
);

export default Entrepreneurs;