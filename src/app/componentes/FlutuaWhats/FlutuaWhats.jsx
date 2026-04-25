import Link from 'next/link';
import estilo from './FlutuaWhats.module.css';
import { FaWhatsapp } from 'react-icons/fa';

export default function FlutuaWhats() {
  return (
    <Link 
    href="https://wa.me/5551993724928"  
      className={estilo.whatsapp}
      target="_blank" 
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={40} />
    </Link>
  );
}
