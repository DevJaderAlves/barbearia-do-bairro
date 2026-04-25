import estilo from './Sobre.module.css';
import Image from 'next/image';
import Banner from '../../../../public/barbershop.jpg';

export default function Sobre() {
  return (
    <section id='sobre' className={estilo.container_principal}>
      <div className={estilo.container}>
        <div className={estilo.image_container}>
          <Image className={estilo.image} src={Banner} alt='Banner'/>
        </div>
        <div className={estilo.texto_container}>
          <h2 className={estilo.titulo}>
          <span>Experiência</span> e <span>Estilo</span> no Seu Corte de Cabelo
          </h2>
          <p className={estilo.descricao}>
            Transformamos cada corte em uma experiência única, valorizando seu estilo e personalidade.
            Nossos barbeiros são especialistas em tendências clássicas e modernas.
            Venha conhecer um ambiente agradável e um atendimento de qualidade!
          </p>
          <div className={estilo.estatistica}>
            <div className={estilo.container_satisfacao}>
              <p className={estilo.satisfacao}>100%</p>
              <p className={estilo.experiencia}>Satisfação Garantida</p>
            </div>
            <div className={estilo.container_satisfacao}>
              <p className={estilo.satisfacao}>10+</p>
              <p className={estilo.experiencia}>Anos de Experiência</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

  