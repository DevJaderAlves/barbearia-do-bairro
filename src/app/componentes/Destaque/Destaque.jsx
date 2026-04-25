import estilo from './Destaque.module.css';

export default function Destaque() {
  return (
    <>
      <section id='destaque' className={estilo.destaque}>
        <h1 className={estilo.titulo}>A MELHOR BARBEARIA DA REGIÃO BEM PERTINHO DE VOCÊ!</h1>
      </section>
    </>
  );
}
