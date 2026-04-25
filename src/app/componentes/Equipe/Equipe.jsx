import estilo from './Equipe.module.css';

export default function Equipe() {
  return (
    <section id="equipe" className={estilo.container}>
      <h2 className={estilo.titulo}>EQUIPE</h2>
      <p className={estilo.descricao}>Nossa equipe é formada por especialistas que garantem qualidade e inovação em cada corte.</p>
      <div className={estilo.galeria}>
        <image src="/Ricardinho.jpg" alt="Imagem do espaço 1" />
        <image src="/Paulo Souza.jpg" alt="Imagem do espaço 2" />
        <image src="/Macedo.jpg" alt="Imagem do espaço 3" />
        <image src="/Henrique.jpg" alt="Imagem do espaço 4" />
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
        <image src="/cliente1.jpg" alt="Imagem do espaço 1" />
        <image src="/cliente2.jpg" alt="Imagem do espaço 2" />
        <image src="/cliente3.jpg" alt="Imagem do espaço 3" />
        <image src="/cliente4.jpg" alt="Imagem do espaço 4" />
        <image src="/cliente5.jpg" alt="Imagem do espaço 5" />
        <image src="/cliente6.jpg" alt="Imagem do espaço 6" />
        <image src="/cliente7.jpg" alt="Imagem do espaço 7" />
        <image src="/cliente8.jpg" alt="Imagem do espaço 8" />
        <image src="/cliente9.jpg" alt="Imagem do espaço 9" />
        <image src="/cliente10.jpg" alt="Imagem do espaço 10" />
        <image src="/cliente11.jpg" alt="Imagem do espaço 11" />
        <image src="/cliente12.jpg" alt="Imagem do espaço 12" />
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
