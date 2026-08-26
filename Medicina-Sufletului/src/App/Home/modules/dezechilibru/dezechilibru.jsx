import './dezechilibru.css'
import {useState} from 'react'

import CorpulFizic from './Corpul Fizic/corpul-fizic'

// export default function Dezechilibru() {
//   return (
//     <div className='dezechilibru-container'>
//       <h2 >Dezechilibru</h2>
//         <div className='dezechilibru-module-cards'>
//           <div className='dezechillibru-main-cards'><h3>Corpul Fizic</h3></div>
//           <div className='dezechillibru-main-cards'><h3>Matricea Informationala</h3></div>
//           <div className='dezechillibru-main-cards'><h3>Campul Energetic</h3></div>
//         </div>
//     </div>
//   )
// }

// 

export default function Dezechilibru() {
  const [section, setSection] = useState('main');

  if (section === 'corpul-fizic') {
    return (
      <CorpulFizic
        onBack={() => setSection('main')}
      />
    );
  }

  return (
    <div className="dezechilibru-container">
      <h2>Dezechilibru</h2>

      <div className="dezechilibru-module-cards">

        <div
          className="dezechillibru-main-cards"
          onClick={() => setSection('corpul-fizic')}
        >
          <h3>Corpul Fizic</h3>
        </div>

        <div className="dezechillibru-main-cards">
          <h3>Matricea Informationala</h3>
        </div>

        <div className="dezechillibru-main-cards">
          <h3>Campul Energetic</h3>
        </div>

      </div>
    </div>
  );
}
