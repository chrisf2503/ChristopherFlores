import aboutStyle from '../CSS/about.module.css'
import Navbar from "./components/navbar";
import img1 from '../assets/background.png'
import img2 from '../assets/chrisflores2.png'
function aboutMe(){
    return (
        <>
            <body className={aboutStyle.body_container}>
                <div className={aboutStyle.background}>
                    <img src = {img1} className={aboutStyle.background_img}/>
                    <Navbar className=""/>
                </div>
                <div className={aboutStyle.aboutme_container}>
                    <div className={aboutStyle.photo_container}>
                        <img src = {img2} className={aboutStyle.myimg} alt="" />
                    </div>
                    <div className={aboutStyle.aboutme}>
                        <div className={aboutStyle.aboutme_title}>About me:</div>
                        <div className={aboutStyle.aboutme_text}>
                            I’m a Mexican American deeply connected to my culture and the arts. 
                            I have a passion for Ballet Folklórico, a traditional Mexican dance that tells 
                            powerful stories through movement, color, and rhythm. I’m driven by the goal of 
                            one day leading my own group—bringing fresh ideas to life while showcasing dances from the diverse 
                            regions of Mexico and honoring the beauty of our traditions.
                            <br/><br/>
                            I’m also a vihuela player in training, continuing to grow in my understanding of mariachi music and music theory. 
                            hrough both dance and music, I strive to celebrate and share the richness of my culture.
                        </div>
                    </div>

                </div>
                <div className={aboutStyle.mission_statement_container}>
                    <div className={aboutStyle.mission_statement}>Mission Statement:</div>
                    <div className={aboutStyle.statement_container}>
                        <div className={aboutStyle.statement}>
                            <span>{`I’m passionate about helping small businesses and individuals in 
                            low-income communities bring their ideas to life. Everyone deserves the opportunity to be seen, 
                            to grow, and to share what they have to offer.`}<br/>{``}<br/>{`My goal is to create affordable, 
                            meaningful websites that allow people to showcase their businesses, their talents, and their personal
                            portfolios with pride and confidence.`}<br/>{``}<br/>{`If this resonates with you, or if you’d like to 
                            explore ideas, plans, or possibilities, I’d love to connect — please visit my `}</span>
                            <span className={aboutStyle.contact_page}>contact page</span>
                            <span>.</span>
                        </div>
                    </div>
                </div>
            </body>
        </>
    )
}
export default aboutMe;