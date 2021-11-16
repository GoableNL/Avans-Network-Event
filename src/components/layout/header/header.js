import style from "./style.module.scss";
import { CalendarIcon } from "@heroicons/react/outline";

const Header = () =>
(
    <header className={style.header}>
        <div className={'container'}>
            <div className={style.wrapper}>
                <h1 className={style.title}>
                    Ane.
                </h1>

                <div className={'button'} onClick={() => document.getElementById('program').scrollIntoView()}>
                    <CalendarIcon height={20} />

                    <div className={'spacer-horizontal-small'} />

                    <span>
                        8 December
                    </span>
                </div>
            </div>
        </div>
    </header>
);

export default Header;