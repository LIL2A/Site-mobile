import Menu from "@/components/menu";
import Link from "next/link";
import { IoMdMail } from "react-icons/io";

const Sobre = () => {
  return (
    <div className="Sobre">
     
      <Menu />
      <div className="SobreContent">

        <div className="SobreCursos">
          <h2>Cursos e Especializações</h2>
          <p>Projetos Ágeis com Scrum</p>
          <p>Java - JDK e JRE</p>
          <p>MYSQL (Workbench)</p>
          <p>Com Dominío Digital - SOFTEX</p>
        </div>

        <div className="SobreIdiomas">
          <h2>Idiomas</h2>
          <p>INGLÊS - AVANÇADO</p>
          <p>Curso UPTIME</p>
          <p>Concluído em 2021.1</p>
        </div>
        
        <Link href={'mailto: dinmarilia@outlook.com'}> <IoMdMail /> Entre em Contato</Link>
      </div>
    </div>
  )
}

export default Sobre;