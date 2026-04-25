import estilo from './Equipe.module.css';

export default function Equipe() {
  return (
    <section id="equipe" className={estilo.container}>
      <h2 className={estilo.titulo}>EQUIPE</h2>
      <p className={estilo.descricao}>Nossa equipe é formada por especialistas que garantem qualidade e inovação em cada corte.</p>
      <div className={estilo.galeria}>
        <img src="/Ricardinho.jpg" alt="Imagem do espaço 1" />
        <img src="/Paulo Souza.jpg" alt="Imagem do espaço 2" />
        <img src="/Macedo.jpg" alt="Imagem do espaço 3" />
        <img src="/Henrique.jpg" alt="Imagem do espaço 4" />
      </div>

      <div className={estilo.infoContainer}>
        <div className={estilo.card}>
          <h3 className={estilo.subtitulo}>EXCELENTE ATENDIMENTO</h3>
          <p className={estilo.paragrafo}>Os profissionais são altamente treinados para proporcionar uma experiência única, combinando técnica e simpatia.</p>
        </div>
        <div className={estilo.card}>
          <h3 className={estilo.subtitulo}>QUALIFICAÇÃO CONTÍNUA</h3>
          <p className={estilo.paragrafo}>Estamos sempre atualizados com as últimas tendências e técnicas para garantir um serviço moderno e de alta qualidade.</p>
        </div>
      </div>

      <h2 className={estilo.container_imagens}>A ARTE DA TESOURA EM AÇÃO</h2>
      <div className={estilo.galeria}>
        <img src="/cliente1.jpg" alt="Imagem do espaço 1" />
        <img src="/cliente2.jpg" alt="Imagem do espaço 2" />
        <img src="/cliente3.jpg" alt="Imagem do espaço 3" />
        <img src="/cliente4.jpg" alt="Imagem do espaço 4" />
        <img src="/cliente5.jpg" alt="Imagem do espaço 5" />
        <img src="/cliente6.jpg" alt="Imagem do espaço 6" />
        <img src="/cliente7.jpg" alt="Imagem do espaço 7" />
        <img src="/cliente8.jpg" alt="Imagem do espaço 8" />
        <img src="/cliente9.jpg" alt="Imagem do espaço 9" />
        <img src="/cliente10.jpg" alt="Imagem do espaço 10" />
        <img src="/cliente11.jpg" alt="Imagem do espaço 11" />
        <img src="/cliente12.jpg" alt="Imagem do espaço 12" />
      </div>

      <div className={estilo.extraInfoContainer}>
        <div className={estilo.extraCard}>
          <h3 className={estilo.sub_titulo}>AMBIENTE CLIMATIZADO</h3>
          <p className={estilo.seg_paragrafo}>O salão é climatizado para oferecer conforto nos dias mais quentes.</p>
        </div>
        <div className={estilo.extraCard}>
          <h3 className={estilo.sub_titulo}>ESTÉTICA TRADICIONAL</h3>
          <p className={estilo.seg_paragrafo}>Nosso espaço possui um visual tradicional e aconchegante com estilo que remete ao final dos anos 20.</p>
        </div>
      </div>
    </section>
  );
}
