import estilo from "./page.module.css";
import Topo from "./componentes/Topo/Topo";
import Banner from "./componentes/Banner/Banner";
import Sobre from "./componentes/Sobre/Sobre";
import Precos from "./componentes/Precos/Precos";
import Equipe from "./componentes/Equipe/Equipe";
import Destaque from "./componentes/Destaque/Destaque";
import Contatos from "./componentes/Contatos/Contatos";
import Rodape from "./componentes/Rodape/Rodape";
import FlutuaWhats from "./componentes/FlutuaWhats/FlutuaWhats";
import BannerCTA from "./componentes/BannerCTA/BannerCTA";
import Depoimentos from "./componentes/Depoimentos/Depoimentos";

export default function Home() {
  return (
    <div className={estilo.page}>
      <header>
        <Topo />
      </header>
      <main>
        <Banner />
        <Sobre />
        <Precos />
        <BannerCTA />
        <Equipe />
        <BannerCTA />
        <Destaque />
        <Depoimentos />
        <Contatos />
        <FlutuaWhats />
        <BannerCTA />
      </main>
      <footer>
        <Rodape />
      </footer>
    </div>
  );
}
