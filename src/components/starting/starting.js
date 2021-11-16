import { AnimatePresence, motion } from "framer-motion";
import style from "./style.module.scss";

const Starting = ({ active }) =>
(
    <AnimatePresence>
        {active &&
            (
                <motion.div  className={style.starting} exit={{ opacity: 0 }} transition={{ ease: "easeOut" }} >
                    <motion.div className={style.round} animate={{ width: '100%', height: '100vh', borderRadius: 0 }} transition={{ ease: 'easeOut', delay: 1,  }}>
                        <motion.h1 className={style.title} initial={{ transform: 'scale(1)' }} animate={{ transform: 'scale(0)' }} transition={{ ease: 'easeOut', delay: 1,  }}>
                            Ane.
                        </motion.h1>
                    </motion.div>
                </motion.div>
            )
        }
    </AnimatePresence>
);

export default Starting;