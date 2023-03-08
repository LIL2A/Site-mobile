/* eslint-disable @next/next/no-img-element */
import Menu from "@/components/menu"
import Image from "next/image";

const App = () => {

  return (
    <div className="App">
      <Menu />
      <div className="AppContent">
        <div className="Me">
          <Image src={"/MariliaBranco.jpeg"} height={200} width={200} alt="minha foto" />
          <h1>Marília Branco</h1>
        </div>
        <p>
          Formada em Estética e Cosmética, no momento passando por uma transição de carreira.
          Atualmente cursando 3° período de Análise e Desenvolvimento de Sistemas, com grandes expectativas para o
          mercado de trabalho.
        </p>
      </div>
    </div>
  )
}

export default App;
