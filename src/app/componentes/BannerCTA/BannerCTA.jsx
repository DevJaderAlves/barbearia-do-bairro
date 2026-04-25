import Link from 'next/link';
import estilo from './BannerCTA.module.css';

export default function BannerCTA() {
  return (
    <section className={estilo.container}>
      <h2 className={estilo.subtitulo}>AGENDE SEU HORÁRIO AGORA!</h2>
      <p className={estilo.paragrafo}>Garanta seu atendimento com os melhores profissionais da região.</p>
      <Link href="https://wa.me/5551993724928" target="_blank" rel="noopener noreferrer" className={estilo.botao}>
        FAÇA UM AGENDAMENTO
      </Link>
    </section>
  );
}
