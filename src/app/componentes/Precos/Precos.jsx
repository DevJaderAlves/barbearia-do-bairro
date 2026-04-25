import estilo from './Precos.module.css';
import Image from 'next/image';
import Corte from '../../../../public/corte.png';
import Combo from '../../../../public/cortes1.png';
import Barba from '../../../../public/barba.png';
import Cortes from '../../../../public/cortes2.png';
import Luzes from '../../../../public/luzes.png';
import Nevou from '../../../../public/nevou.png';
import Sobrancelha from '../../../../public/sobrancelha.png';

export default function Precos() {
  return (
    <section id="precos" className={estilo.container}>
      <div className={estilo.grid}>
        <div className={estilo.card}>
          <Image className={estilo.icone} src={Corte} alt="corteAdulto" />
          <h3 className={estilo.subtitulo}>CORTE</h3>
          <p>Corte personalizado para realçar seu estilo. Máquina, tesoura ou navalha – você escolhe!</p>
          <span className={estilo.preco}>R$ 35,00</span>
        </div>

        <div className={estilo.card}>
          <Image className={estilo.icone} src={Combo} alt="corteCrianca" />
          <h3 className={estilo.subtitulo}>COMBO</h3>
          <p>Pacote completo para quem gosta de estar sempre impecável. Cabelo alinhado, barba desenhada e sobrancelha definida!</p>
          <span className={estilo.preco}>R$ 60,00</span>
        </div>

        <div className={estilo.card}>
          <Image className={estilo.icone} src={Barba} alt="apararBarba" />
          <h3 className={estilo.subtitulo}>BARBA</h3>
          <p>Deixe sua barba no formato perfeito! Do degradê ao alinhamento total, com acabamento de alta precisão.</p>
          <span className={estilo.preco}>R$ 20,00</span>
        </div>

        <div className={estilo.card}>
          <Image className={estilo.icone} src={Cortes} alt="fazerBarba" />
          <h3 className={estilo.subtitulo}>CORTE COM SOBRANCELHA</h3>
          <p>A combinação perfeita para realçar seu visual! Corte bem-feito e sobrancelha alinhada para um resultado impecável.</p>
          <span className={estilo.preco}>R$ 45,00</span>
        </div>
        <div className={estilo.card}>
          <Image className={estilo.icone} src={Luzes} alt="fazerBarba" />
          <h3 className={estilo.subtitulo}>LUZES</h3>
          <p>Dê um toque de modernidade ao seu visual com luzes bem trabalhadas. Ilumine seu estilo!</p>
          <span className={estilo.preco}>R$ 100,00</span>
        </div>
        <div className={estilo.card}>
          <Image className={estilo.icone} src={Nevou} alt="fazerBarba" />
          <h3 className={estilo.subtitulo}>PLATINADO</h3>
          <p>O famoso efeito Nevou para quem quer um cabelo platinado impecável e estiloso!</p>
          <span className={estilo.preco}>R$ 150,00</span>
        </div>
        <div className={estilo.card}>
          <Image className={estilo.icone} src={Sobrancelha} alt="fazerBarba" />
          <h3 className={estilo.subtitulo}>SOBRANCELHA</h3>
          <p>Sobrancelha alinhada faz toda a diferença! Ajuste no formato ideal para harmonizar seu rosto.</p>
          <span className={estilo.preco}>R$ 10,00</span>
        </div>
      </div>
    </section>
  );
}
