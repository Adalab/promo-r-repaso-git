import '../styles/App.scss';

import data from '../data/adalabers.json';
import { useState } from 'react';

function App() {
  // VARIABLES ESTADO

  const [allAdalabers, setAllAdalabers] = useState(data.results);

  const [newAdalaber, setNewAdalaber] = useState({
    name: '',
    counselor: '',
    speciality: '',
  });

  const [counselorFilter, setCounselorFilter] = useState('');

  // USEEFFECT

  // FUNCIONES HANDLER

  const handleChangeInput = (ev) => {
    setNewAdalaber({
      /*
      // Esto es lo que haría el spread operator:
      name: newAdalaber.name,
      counselor: newAdalaber.counselor,
      speciality: newAdalaber.speciality,
      */
      ...newAdalaber,
      [ev.target.name]: ev.target.value,
    });
  };

  const holaPerris = () => {
    console.log('perris Adalabers');
  };

  const handleClickNewAdalaber = (ev) => {
    /*
    // Forma 1 de añadir objetos a un array en una variable estado
    allAdalabers.push(newAdalaber);

    setAllAdalabers([...allAdalabers]);
    */
    /*
    // Forma 2 de añadir objetos a un array en una variable estado
    const allAdalabersClone = [...allAdalabers];

    allAdalabersClone.push(newAdalaber);
    */
    // Forma 3 de añadir objetos a un array en una variable estado
    const allAdalabersClone = [...allAdalabers, newAdalaber];

    setAllAdalabers(allAdalabersClone);
    /*
    // Forma 4 de añadir objetos a un array en una variable estado

    setAllAdalabers([...allAdalabers, newAdalaber]);
    */

    setNewAdalaber({
      name: '',
      counselor: '',
      speciality: '',
    });
  };

  const handleSummit = (ev) => {
    ev.preventDefault();
  };

  const handleChangeCounselorFilter = (ev) => {
    setCounselorFilter(ev.target.value);
  };

  // FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR HTML

  const renderList = (list) => {
    return list.map((eachAdalaber, index) => (
      <tr key={index}>
        {/* Caca */}
        <td>{eachAdalaber.name}</td>
        <td>{eachAdalaber.counselor}</td>
        <td>{eachAdalaber.speciality}</td>
      </tr>
    ));
  };

  const filteredAdalabers = allAdalabers.filter((eachAdalaber) => {
    if (counselorFilter === '') {
      return true;
    } else {
      return eachAdalaber.counselor === counselorFilter;
    }
  });

  /*
  // Otra forma de hacer el filtro (en una línea, menos claro)
  const filteredAdalabers = allAdalabers.filter((eachAdalaber) => counselorFilter === '' || eachAdalaber.counselor === counselorFilter);

  */

  // HTML EN EL RETURN

  return (
    <div className='App page'>
      <header className='header'>
        <h1 className='title--big'>Adalabers</h1>
      </header>

      <main>
        <form className='filters'>
          <label className='filters__text' htmlFor='counselor'>
            Escoge una tutora:
            <select
              onChange={handleChangeCounselorFilter}
              value={counselorFilter}
              className='form__input-text'
              name='counselor'
              id='counselor'
            >
              <option value=''>Todos</option>
              <option value='Yanelis'>Yanelis</option>
              <option value='Dayana'>Dayana</option>
              <option value='Iván'>Iván</option>
              <option value='Miguel'>Miguel</option>
            </select>
          </label>
          <label className='filters__text' htmlFor='counselor'>
            Escoge una alumna
            <select
              // onChange={handleChangeCounselorFilter}
              // value={counselorFilter}
              className='form__input-text'
              name='counselor'
              id='counselor'
            >
              <option value=''>Todes</option>
              <option value='Yanelis'> maripuri querida</option>
              <option value='Dayana'>maricarmen querida</option>
              <option value='Iván'>x</option>
              <option value='Miguel'>maria</option>
            </select>
          </label>
        </form>
        <p>Hola mis perris Maricarmenes os quiero mucho a todas </p>
        <section className='data'>
          <table className='table'>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Tutora</th>
                <th>Especialidad</th>
              </tr>
            </thead>

            <tbody>{renderList(filteredAdalabers)}</tbody>
          </table>
        </section>
        <section className='add'>
          <h2 className='add_title tittle--big'>Añadir una Adalaber</h2>
          <form onSubmit={handleSummit}>
            <label className='add__label' htmlFor='newName'>
              Nombre:
              <input
                onChange={handleChangeInput}
                value={newAdalaber.name}
                type='text'
                className='form__input-text'
                name='name'
                id='newName'
              />
            </label>
            <label className='add__label' htmlFor='newCounselor'>
              Tutora:
              <input
                onChange={handleChangeInput}
                value={newAdalaber.counselor}
                type='text'
                className='form__input-text'
                name='counselor'
                id='newCounselor'
              />
            </label>
            <label className='add__label' htmlFor='newSpeciality'>
              Especialidad:
              <input
                onChange={handleChangeInput}
                value={newAdalaber.speciality}
                type='text'
                className='form__input-text'
                name='speciality'
                id='newSpeciality'
              />
            </label>
            <label className='add__label'>
              <button onClick={handleClickNewAdalaber} className='form__btn'>
                Añadir una nueva Adalaber
              </button>
            </label>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
