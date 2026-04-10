import { useEffect, useState } from 'react';
import myimg from '../assets/chrisflores.jpg'
import Navbar from "./components/navbar";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { work_list } from './components/experienceList';
import { programmingLang } from './components/lists';
import homeStyle from '../CSS/home.module.css';
import introStyle from '../CSS/intro.module.css';
import skillsetStyle from '../CSS/skillset.module.css';
import workexperienceStyle from '../CSS/workexperience.module.css';

function Home (){
    const [index, setIndex] = useState(0);
    const [mobileSkillIndex, setMobileSkillIndex] = useState(0);
    const currentExperience = work_list[index];
    const currentMobileSkill = programmingLang[mobileSkillIndex];

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex + 1) % work_list.length);
    };

    const handlePrev = () => {
        setIndex((prevIndex) => (prevIndex - 1 + work_list.length) % work_list.length);
    };

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

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            setMobileSkillIndex((prevIndex) => (prevIndex + 1) % programmingLang.length);
        }, 2200);

        return () => window.clearInterval(intervalId);
    }, []);

    return (
        <>  
        
            <div className={homeStyle.start}>
                <Navbar/>
                <div className={introStyle.intro}>
                    <div className={introStyle.picture}>
                        <img src = {myimg} alt="" className={introStyle.pictureChild} />
                    </div>
                    <div className={introStyle.description}>
                        <div className={introStyle.name}>Christopher Flores</div>
                        <div className={introStyle.subtitle}>Aspiring Software Developer, BS Computer Science</div>
                        <div className={introStyle.text}>
                            Software Developer focused on building responsive and modern web applications using React and JavaScript. Currently maintaining and improving the Mazarte Dance Company website, with an emphasis on performance, usability, and clean design. Computer Science student at Hunter College (Daedalus Scholar, Class of 2026). 
                        </div>
                    </div>
                </div>
            </div>
            <div className={skillsetStyle.skillSet}>
                <div className="Title">Technical Skills</div>
                <Motion.ul className={skillsetStyle.list}
                initial="hidden"
                animate="visible"
                variants={skillListVariants}>
                    {
                        programmingLang.map(lang => (
                            <Motion.li key={lang.id} className={skillsetStyle.c} variants={skillItemVariants}>
                                <Motion.div className={skillsetStyle.photo}>
                                    <Motion.img src={lang.img} alt="" className={skillsetStyle.icon}/>
                                </Motion.div>
                                <Motion.p className={skillsetStyle.label}>{lang.name}</Motion.p>
                            </Motion.li>
                        ))
                    }
                </Motion.ul>
                <div className={skillsetStyle.mobileSkillShowcase}>
                    <AnimatePresence mode="wait">
                        <Motion.div
                            key={currentMobileSkill.id}
                            className={skillsetStyle.mobileSkillCard}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                            <div className={skillsetStyle.photo}>
                                <img src={currentMobileSkill.img} alt={currentMobileSkill.name} className={skillsetStyle.mobileIcon}/>
                            </div>
                            <p className={skillsetStyle.mobileLabel}>{currentMobileSkill.name}</p>
                        </Motion.div>
                    </AnimatePresence>
                </div>
            </div>
            <div className={workexperienceStyle.workExperienceContainer}>
                <div className={workexperienceStyle.work_experience}>

                    <div className={workexperienceStyle.workimage}>
                        <img src={currentExperience.img} alt={currentExperience.title} className={workexperienceStyle.workimg}/>
                    </div>
                    <div className={workexperienceStyle.work_details}>
                        <div className={workexperienceStyle.title}>{currentExperience.title}</div>
                        <div>{currentExperience.employeer} {currentExperience.address}</div>
                        <div className={workexperienceStyle.timeline}>
                            {`${currentExperience.startDate} - ${currentExperience.endDate}`}
                        </div>
                        <div className={workexperienceStyle.responsibility}>
                            <div className={workexperienceStyle.details}>
                                <ul className={workexperienceStyle.list}>
                                    {currentExperience.discription.length > 0 ? (
                                        currentExperience.discription.map((item, itemIndex) => (
                                            <li key={itemIndex} className={workexperienceStyle.experience}>{item}</li>
                                        ))
                                    ) : (
                                        <li className={workexperienceStyle.experience}>
                                            Experience details coming soon.
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={workexperienceStyle.button_container}>
                    <button type="button" className = {workexperienceStyle.buttons}onClick={handlePrev}>Previous</button>
                    <button type="button" className = {workexperienceStyle.buttons} onClick={handleNext}>Next</button>
                </div>
            </div>
        </>
    );
}
export default Home;
