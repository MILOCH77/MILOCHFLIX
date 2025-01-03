import React from 'react';
import './footer.css';

function Footer() {
  return (
    <div className='footer'>
      <a href="https://www.miloch.net/">
        <img className='img' src="https://miloch.net/wp-content/uploads/2024/10/cropped-logo2-250x83.png" alt="Logo Miloch.net" />
      </a>
      <p>
        CRIADO POR FRANKLIN MILOCH como atividade do Curso Praticando React: Challenge AluraFlix - 
        {' '}
        <a href="https://www.alura.com.br/">
          Alura
        </a>
      </p>
    </div>
  );
}

export default Footer;
