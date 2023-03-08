/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { IoIosClose, IoIosMenu, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io'

const Menu = () => {
  const [menu, setMenu] = useState(false)

  return (
    <div className="Menu">
      {
        (menu)
          ?
          <div className="MenuContent">
            <div className="MenuNav">
              <Image src="./logo.svg" alt="minha logo" id="Logo" width={265} height={95}/>
              <div className="Separator"/>
              <Link href={"/"}>HOME</Link>
              <div className="Separator"/>
              <Link href={"/sobre"}>SOBRE</Link>
            </div>
            <div className="MenuSocial">
              <Link href={"https://www.linkedin.com/in/mar%C3%ADlia-branco-582975193/"}> <IoLogoLinkedin /> </Link>
              <Link href={"https://github.com/LIL2A"}> <IoLogoGithub /> </Link>
            </div>
          </div>
          : ""
      }
      <button onClick={() => setMenu(!menu)} className="MenuBtn" name="Menu Button">
        {
          (menu)
            ? <IoIosClose />
            : <IoIosMenu />
        }
      </button>
    </div>
  )
}

export default Menu