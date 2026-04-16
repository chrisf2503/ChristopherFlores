import socialStyle from '../../CSS/social.module.css'
import LinkedIn from '../../assets/LinkedIn.png'
import Github from '../../assets/github.png'
function Social(){
    //Change links to hyper links later
    return (
        <div className={socialStyle.social}>
            <div className={socialStyle.img1}>
                <img className={socialStyle.linkedIn} alt="LinkedIn" src={LinkedIn}/>
                <a href = 'https://linkedin.com/in/christopher-flores-48b4801b2' target="_blank" className={socialStyle.subtitle}>LinkedIn</a>
            </div>
            <div className={socialStyle.img2}>
                <img className={socialStyle.Github} alt="Github" src={Github} />
                <a href = 'https://github.com/chrisf2503' target="_blank"   className={socialStyle.subtitle}>GitHub</a>
            </div>
        </div>
    )
}
export default Social;