import React from 'react'
import styles from './Rodape.module.css'


const Rodape = () => {
  const dataHoje = () => {
    const data = new Date();
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }


  return (
    <div className={styles.rodape}>
      
      <div className={styles.dataCorrente}>
        Data Atual: {dataHoje()}
      </div>

        <div className={styles.icones}>
            <img className={styles.svg} src='facebook.svg'/>
            <img className={styles.svg} src='instagram.svg'/>
            <img className={styles.svg} src='twitter.svg'/>
        </div>
        
    </div>
    )
  }

export default Rodape;
