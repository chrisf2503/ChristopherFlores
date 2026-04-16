import socialStyle from '../../CSS/social.module.css'
import LinkedIn from '../../assets/LinkedIn.png'
import Github from '../../assets/github.png'
function Social(){
    //Change links to hyper links later
    return (
        <div className={socialStyle.social}>
            <div className={socialStyle.img1}>
                <img className={socialStyle.linkedIn} alt="LinkedIn" src={LinkedIn}/>
                <div className={socialStyle.subtitle}>LinkedIn</div>
            </div>
            <div className={socialStyle.img2}>
                <img className={socialStyle.Github} alt="Github" src={Github} />
                <div className={socialStyle.subtitle}>GitHub</div>
            </div>
        </div>
    )
}
export default Social;