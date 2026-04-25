import Image from "next/image";
import Adilson from "../../../../public/satisfeitos/Adilson.png";
import Carlos from "../../../../public/satisfeitos/Carlos.png";
import Fabiano from "../../../../public/satisfeitos/Fabiano.png";
import Marcelo from "../../../../public/satisfeitos/Marcelo.png";
import Rodrigo from "../../../../public/satisfeitos/Rodrigo.png";
import Gonçalves from "../../../../public/satisfeitos/Gonçalves.png";
import Maicon from "../../../../public/satisfeitos/Maicon.png";
import Elisandro from "../../../../public/satisfeitos/Elisandro.png";
import estilo from "./Depoimentos.module.css";

export default function Depoimentos() {

  return (
    <>
      <section className={estilo.container}>
        <h1 className={estilo.titulo}>DEPOIMENTOS</h1>
        <p className={estilo.paragrafo}>Confira o que falaram alguns dos nossos clientes e veja porque somos a melhor barbearia da região.</p>
        <div className={estilo.grid}>
          <div className={estilo.card}>
            <Image src={Adilson} alt="Foto do cliente Adilson" className={estilo.foto} />
            <h3 className={estilo.nomes}>Adilson Silva</h3>
            <p>Otima a melhor é a melhor.</p>
            <div className={estilo.estrelas}>⭐⭐⭐⭐⭐</div>
          </div>
          <div className={estilo.card}>
            <Image src={Marcelo} alt="Foto do cliente Marcelo" className={estilo.foto} />
            <h3 className={estilo.nomes}>Michel</h3>
            <p>Excelente profissional</p>
            <div className={estilo.estrelas}>⭐⭐⭐⭐⭐</div>
          </div>
          <div className={estilo.card}>
            <Image src={Fabiano} alt="Foto do cliente Fabiano" className={estilo.foto} />
            <h3 className={estilo.nomes}>Fabiano Carpes</h3>
            <p>Atendimento topppp DMAIS 👏👏</p>
            <div className={estilo.estrelas}>⭐⭐⭐⭐⭐</div>
          </div>
          <div className={estilo.card}>
            <Image src={Rodrigo} alt="Foto do cliente Rodrigo" className={estilo.foto} />
            <h3 className={estilo.nomes}>Marcio Souza Machado</h3>
            <p>Maravilhoso bom demais</p>
            <div className={estilo.estrelas}>⭐⭐⭐⭐⭐</div>
          </div>
          <div className={estilo.card}>
            <Image src={Carlos} alt="Foto do cliente Carlos" className={estilo.foto} />
            <h3 className={estilo.nomes}>Carlos Areias</h3>
            <p>Um ótimo atendimento</p>
            <div className={estilo.estrelas}>⭐⭐⭐⭐⭐</div>
          </div>
          <div className={estilo.card}>
            <Image src={Gonçalves} alt="Foto do cliente Gonçalves" className={estilo.foto} />
            <h3 className={estilo.nomes}>Paulo Ribeiro</h3>
            <p>Atendimento top 👏👍</p>
            <div className={estilo.estrelas}>⭐⭐⭐⭐⭐</div>
          </div>
          <div className={estilo.card}>
            <Image src={Maicon} alt="Foto do cliente Maicon" className={estilo.foto} />
            <h3 className={estilo.nomes}>Maicon</h3>
            <p>Top dos top atendimento muito completo</p>
            <div className={estilo.estrelas}>⭐⭐⭐⭐⭐</div>
          </div>
          <div className={estilo.card}>
            <Image src={Elisandro} alt="Foto do cliente Elisandro" className={estilo.foto} />
            <h3 className={estilo.nomes}>Elisandro Moraes</h3>
            <p>Ótimo atendimento!
            Super recomendo.</p>
            <div className={estilo.estrelas}>⭐⭐⭐⭐⭐</div>
          </div>
        </div>
      </section>
    </>
  );
}