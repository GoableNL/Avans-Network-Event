import style from "./style.module.scss";

const Article = () =>
(
    <section className={style.article}>
        <div className={'container'}>
            <div className={'row large-2'}>
                <div className={style.column}>
                    <img className={style.image} src={'/image/article.jpeg'} />
                </div>

                <div className={style.column}>
                    <div className={style.content}>
                        <h2>
                            Lorem ipsum
                        </h2>

                        <div className={'spacer-vertical-big'} />

                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Article;