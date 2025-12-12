import Menu from "../Menu";
import "./header.css"

export default function Header(){
    return (
            <header id="header">
                <div>
                    <a href="/">
                        <img className="moonlit-logo" src="public\icon\Pink_Yellow_Star_Y2k_Style_Streetwear_Logo_Mugs_Stickers_Circle_3.png" alt="" />
                    </a>
                </div>
                <Menu />     
            </header>
    )
}