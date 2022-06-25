
import { Alert } from 'react-bootstrap';
import './App.css';
import Cars from './Compenents/Cars';
import voirures from'./assets/images/image1.jpg';
function App() {
  const ca = [
    {
      id:Math.random(),
      brand:"Ranaut",
      price:"2000",
    },
    {
      id:Math.random(),
      brand:"Tesla",
      price:"2000",
    },
    {
      id:Math.random(),
      brand:"Audi",
      price:"2000",
    },
    {
      id:Math.random(),
      brand:"BMW",
      price:"2000",
    },
  ];
  const str ="Hello props";
  const handlePrice =(name,price)=>{
    
    alert(`this ${name} car costs ${price}`);

  };
  return (
    
    <div>
      <img src={voirures}/>
      <Cars Kreheb ={ca} chaine ={str} handlePrice ={handlePrice}/>
    </div>
  )
}

export default App;
