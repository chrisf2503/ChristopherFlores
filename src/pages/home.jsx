import Navbar from "./components/navbar";
import homeStyle from '../CSS/home.module.css';
import introStyle from '../CSS/intro.module.css';
import skillsetStyle from '../CSS/skillset.module.css';
import workexperienceStyle from '../CSS/workexperience.module.css';


function Home (){
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
                    {/* All to be replaced ones we know how to implement lists */}

                <div className="list">
                    List of programming languages
                </div>
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
