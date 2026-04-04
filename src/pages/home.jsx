import Navbar from "./components/navbar";
import homeStyle from '../CSS/home.module.css'
import introStyle from '../CSS/intro.module.css'
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
            <div className="skillset">
                <div className="Title">Technical Skills</div>
                <div className="list">
                        
                </div>
            </div>
        </>
    );
}
export default Home;
