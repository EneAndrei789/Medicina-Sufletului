// 

import './corpul-fizic.css';
import { useState } from 'react';

import Energie from './Energie/energie';


export default function CorpulFizic({ onBack }) {
    const [section, setSection] = useState('main');

    if (section === 'energie') {
        return (
            <Energie></Energie>
        );
    }

  return (
    <div className="corpul-fizic-container">

      <h2>Corpul Fizic</h2>

      <div className="corpul-fizic-module-cards">

        <div className="corpul-fizic-main-cards" 
        onClick={() => setSection('energie')}>
            <h3>Energie</h3>
        </div>

        <div className="corpul-fizic-main-cards">
          <h3>Infectii</h3>
        </div>

        <div className="corpul-fizic-main-cards">
          <h3>Informatii</h3>
        </div>

      </div>

    </div>
  );
}
