import './energie.css';
import { useState } from 'react';
import EnergiiFavorabile from './energii-favorabile/energii-favorabile';
import TabelulEnergiilorNefavorabile from './energii-nefavorabile/energii-nefavorabile';

export default function Energie({}) {

    const [section, setSection] = useState('main');

    if (section === 'energii-favorabile') {
        return (
            <EnergiiFavorabile></EnergiiFavorabile>
        );
    }

    if (section === 'energii-nefavorabile') {
      return (
        <TabelulEnergiilorNefavorabile></TabelulEnergiilorNefavorabile>
      )
    }

  return (
    <div className="energie-container">

      <h2>Energie</h2>

      <div className="energie-module-cards">

        <div className="energie-main-cards" 
        onClick={() => setSection('energii-favorabile')}
        >
            <h3>Energii Favorabile</h3>
        </div>

        <div className="energie-main-cards"
        onClick={() => setSection('energii-nefavorabile')}>
          <h3>Energii Nefavorabile</h3>
        </div>

      </div>

    </div>
  );
}