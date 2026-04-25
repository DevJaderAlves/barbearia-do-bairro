
import { FaWhatsapp } from 'react-icons/fa';
import estilo from './Contatos.module.css';
import Link from 'next/link';

export default function Contatos() {
  return (
    <section id="contato" className={estilo.container_principal}>
      <div className={estilo.conteudo}>
        <h2 className={estilo.titulo}>FAÇA SEU AGENDAMENTO</h2>
        <p className={estilo.paragrafo}>Agende seu horário e venha conhecer a melhor barbearia da região. Faça seu agendamento via WhatsApp.</p>      
          <div className={estilo.contato}>
          <Link 
            href="https://wa.me/5551993724928" 
            target="_blank" 
            rel="noopener noreferrer"
            className={estilo.link}>
            <FaWhatsapp size={30} className={estilo.icone} />
            <div>
              <strong>WhatsApp</strong>
              <p className={estilo.paragrafo}>(51)99372-4928</p>
            </div>
          </Link>
        </div>

      </div>

      <div className={estilo.imagemFundo}></div>

        <div className={estilo.container}>
        <div className={estilo.endereco}>
          <h2 className={estilo.subtitulo}>📍 Como Chegar</h2>
          <p className={estilo.enderecoInfo}>
            Rua Beco dos Soares, nº 918, Bairro São Lucas, Viamão - RS
          </p>
          <p className={estilo.mensagem}>Venha conferir nosso serviço de barbearia! ✂️💈</p>
        </div>
        </div>
        
      <div className={estilo.mapaContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=..."
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
