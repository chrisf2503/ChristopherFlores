import Navbar from "./components/navbar";
import { motion } from "framer-motion";

import {programmingLang} from './components/lists'
import homeStyle from '../CSS/home.module.css';
import introStyle from '../CSS/intro.module.css';
import skillsetStyle from '../CSS/skillset.module.css';
import workexperienceStyle from '../CSS/workexperience.module.css';

function Home (){
    const skillListVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.12,
                delayChildren: 0.15,
            },
        },
    };
    const skillItemVariants = {
        hidden: { x: -50, opacity: 0, scale: 0.95 },
        visible: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: { duration: 0.45, ease: "easeOut" },
        },
    };

    return (
        <>  
        
            <div className={homeStyle.start}>
                <Navbar/>
                <div className={introStyle.intro}>
                    <div className={introStyle.picture}>
                        <img alt="" className={introStyle.pictureChild} />
                    </div>
                    <div className={introStyle.description}>
                        <div className={introStyle.name}>Christopher Flores</div>
                        <div className={introStyle.subtitle}>Aspiring Software Developer, BS Computer Science</div>
                        <div className={introStyle.text}>|* stuff here *|</div>
                    </div>
                </div>
            </div>
            <div className={skillsetStyle.skillSet}>
                <div className="Title">Technical Skills</div>
                <motion.ul className={skillsetStyle.list}
                initial="hidden"
                animate="visible"
                variants={skillListVariants}>
                    {
                        programmingLang.map(lang => (
                            <motion.li key={lang.id} className={skillsetStyle.c} variants={skillItemVariants}>
                                <motion.div className={skillsetStyle.photo}>
                                    <motion.img src={lang.img} alt="" className={skillsetStyle.icon}/>
                                </motion.div>
                                <motion.p className={skillsetStyle.label}>{lang.name}</motion.p>
                            </motion.li>
                        ))
                    }
                </motion.ul>
                {/* <div className={skillsetStyle.list}>
                    {
                        programmingLang.map(lang => (
                            <div key= {lang.id} className={skillsetStyle.c}>
                                <div className={skillsetStyle.photo}>
                                    <img src={lang.img} alt="" className={skillsetStyle.icon}/>
                                </div>
                                <p className={skillsetStyle.label}>{lang.name}</p>
                            </div>
                        ))
                    }
                </div> */}
            </div>
            <div className={workexperienceStyle.work_experience}>
                <div className={workexperienceStyle.workimage}>
                    <img src="" alt="" className={workexperienceStyle.workimg}/>
                </div>
                <div className={workexperienceStyle.work_details}>
                    {/* All to be replaced ones we know how to implement lists */}
                    <div className={workexperienceStyle.title}>Title</div>
                    <div className={workexperienceStyle.timeline}>{`Start - End`}</div>
                    <div className={workexperienceStyle.responsibility}>
                        <div className={workexperienceStyle.details}>
                            <ul className={workexperienceStyle.list}>
                                <li className={workexperienceStyle.experience}>item1</li>
                                <li className={workexperienceStyle.experience}>item2</li>
                                <li className={workexperienceStyle.experience}>item3</li>
                                <li className={workexperienceStyle.experience}>item4</li>
                                <li className={workexperienceStyle.experience}>item5</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Home;
