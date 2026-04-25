import estilo from './Rodape.module.css';
import { FaInstagram, FaFacebookF} from 'react-icons/fa';
import Link from 'next/link';
import Image from "next/image";
import Logo from '../../../../public/logo.png';

export default function Rodape() {
  return (
    <footer className={estilo.footer}>
      <div className={estilo.container_principal}>
          <div className={estilo.logo}>
              <Image src={Logo} alt="Logo do Barber"/>
          </div>

          <nav className={estilo.nav}>
            <Link className={estilo.link}href="/">Home</Link>
            <Link className={estilo.link}href="#sobre">Sobre</Link>
            <Link className={estilo.link}href="#precos">Preços</Link>
            <Link className={estilo.link}href="#equipe">Equipe</Link>
          </nav>

          <div className={estilo.redes}>
            <Link className={estilo.redes_link}href="https://www.instagram.com/jader.alves.7330/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} />
            </Link>
            <Link className={estilo.redes_link}href="https://www.facebook.com/jader.alves.7330" target="_blank" rel="noopener noreferrer">
              <FaFacebookF size={20} />
            </Link>
          </div>

      </div>


      <div className={estilo.direitos}>
          <p>© 2025 Barbearia. Todos os direitos reservados.</p>
          <Link className={estilo.direitos_link}href="#">Política de Privacidade</Link>
          <Link className={estilo.direitos_link}href="#">Termos de Serviço</Link>
      </div>

    </footer>
  );
}
