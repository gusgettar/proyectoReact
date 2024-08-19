import 'bootstrap/dist/css/bootstrap.min.css'
import Informacion from './components/Informacion';
import Contador from './components/Contador';
function App() {
  const anio = 2024
  //Aqui agrego la logica de un componente
  return <>
  <section className='container my-5'>
    <h1 className='text-center'>Practica inicial de React</h1>
  {/*Aqui voy a agregar un componente */}
  <Informacion comision="c102i" anioActual={anio} />

  </section>
  <Contador></Contador>
  </>
}

export default App;
