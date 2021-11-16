import { AnimatePresence, motion } from "framer-motion";
import style from "./style.module.scss";

const Starting = ({ active }) =>
(
    <AnimatePresence>
        {active &&
            (
                <motion.div  className={style.starting} exit={{ opacity: 0 }} transition={{ ease: "easeOut" }} >
                    <motion.div className={style.round} animate={{ width: '100%', height: '100vh', borderRadius: 0 }} transition={{ ease: 'easeOut', delay: 1,  }}>
                        <h1 className={style.title}>
                            Ane.
                        </h1>
                    </motion.div>
                </motion.div>
            )
        }
    </AnimatePresence>
);

export default Starting;