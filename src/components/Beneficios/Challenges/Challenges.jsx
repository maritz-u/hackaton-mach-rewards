import React, { useContext, useState } from 'react';
// import {Button} from '@material-ui/core';
import './Styles/Challenges.css';
import { ContextUser } from '../../../App.js';
import data from '../../../data/users.json';
import filterIcon from '../../../img/filter.svg';
import FilterChallenge from './FilterChallenge';


const Challenges = () => {

  const [user]= useContext(ContextUser);

  const [filter, setFilter] = useState(false);
  const [filterMark, setFilterMark] = useState([])

  let buttonFilter='';

  if (filterMark.length === 0) {
    buttonFilter = <div className=''>
      <button className='buttonFilter'>
        Todos los beneficios
    </button>
    </div>
  }
  else {
    buttonFilter = filterMark.map((data, index) => {
      return <div key={index} className=''>
        <button className='buttonFilter'>
          {data}
        </button>
      </div>
    })
  }
  return (
    <div className="challengeContainer">
      <section className="challengeIntro">
        <h2>Pequeños desafíos</h2>
        <p>
          Cumple con estos pequeños desafíos e irás acumulando puntos, los que
          podrás canjear por atractivos regalos en tiendas nacionales e
          internacionales.
          </p>
      </section>
      {/*Cards in slide */}
      <section className="cardContainers">
        {data[user].desafiosprincipales.map((data, index) => {
          return <div key={index} className="cardChallengePpal">
            <img src={data.foto} alt="" srcset="" />
            <div className="cardTextPpal">
              <p className="pointsPpal">{data.puntos}</p>
              <p className="cardSubtitlePpal">{data.titulo}</p>
              <p className="cardExplanationPpal">{data.Explicacion}</p>
            </div>
            <button className="btnDesafio">
              {data.textobton}
            </button>
          </div>
        })}
      </section>
      <section className="categories">
        <div className="categoriesIntro">
          <h2>Categorías</h2>
          <p>Paga con tu tarjeta MACH en cualquiera de estas tiendas y ganarás más puntos,
              cada categoría tiene puntajes diferentes.</p>
        </div>
        <div className='containerFiltersBenefit'>
          <div className='containerButtonsFilter'>
            {buttonFilter}
          </div>
          <img src={filterIcon} alt='filter' onClick={() => setFilter(!filter)} />
        </div>
      </section>
      <FilterChallenge filter={filter} setFilter={setFilter} filterMark={filterMark} setFilterMark={setFilterMark} />
      <section className="cardsCategories">
        {data[user].categoriasdesafios.map((data, index) => {
          if (filterMark.length === 0) {
            return <div key={index} className="challengeCard">
              <div className="challengeImage">
                <img src={data.foto} alt="" srcset="" />
              </div>
              <div className="challengeText">
                <p className="challengePoints"> {data.puntos}</p>
                <p className="challengeName"> {data.titulo}</p>
                <p className="challengeSumary">{data.descripcion}</p>
              </div>
            </div>
          }
          else {
            for (let i = 0; i < filterMark.length; i++) {
              if (data.categoria === filterMark[i]) {
                return <div key={index} className="challengeCard">
                  <div className="challengeImage">
                    <img src={data.foto} alt="" srcset="" />
                  </div>
                  <div className="challengeText">
                    <p className="challengePoints"> {data.puntos}</p>
                    <p className="challengeName"> {data.titulo}</p>
                    <p className="challengeSumary">{data.descripcion}</p>
                  </div>
                </div>
              }
            }
          }
        })}
      </section>
      <section className="machChallenge">
        <h2>#MACHallenge</h2>
        <p>
          Acepta los desafíos en redes sociales y participa de los sorteos que lanzamos semanalmente.
          Tenemos PREMIOS FABULOSOS para tí.
          </p>
      </section>
    </div>
  );
};

export default Challenges;