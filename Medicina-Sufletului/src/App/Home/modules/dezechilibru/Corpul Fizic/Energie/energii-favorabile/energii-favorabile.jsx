import React from 'react';
import './energii-favorabile.css';

export default function TabelulEnergiilorFavorabile() {

 const righe = [
  {
    nome: 'Rândul 1',

    colonnaA: [
      'Pace',
      'Iubire',
      'Credință',
      'Nădejde',
      'Curaj',
      'Entuziasm',
      'Perseverență',
      'Prosperitate',
      'Statornicie'
    ],

    colonnaB: [
      'Claritate',
      'Prezență',
      'Înțelegere',
      'Generozitate',
      'Comunicare ușoară',
      'Succes',
      'Motivație',
      'Consecvență',
      'Deschidere către creativitate'
    ]
  },

  {
    nome: 'Rândul 2',

    colonnaA: [
      'Blândețe',
      'Bunătate',
      'Fertilitate',
      'Împăcare',
      'Spațiu necesar vindecării',
      'Voință',
      'Recăpătarea puterii',
      'Prospețime'
    ],

    colonnaB: [
        'Smerenie',
        'Inaltare',
        'Sfintenie',
        'Izbavire',
        'Incredere',
        'Ancorare in realitate',
        'Staruinta in bine'
    ]
  },

  {
    nome: 'Rândul 3',

    colonnaA: [
      'Echilibru',
      'Acceptare',
      'Respect',
      'Stabilitate',
      'Intelepciune'
    ],

    colonnaB: [
     'Regenerare',
     'Statornicie',
     'Procesare',
     'Detasare',
     'Intentie'
    ]
  },

  {
    nome: 'Randul 4',
    colonnaA: [
        'Recunostinta',
        'Iertare',
        'Frumusete',
        'Puritate',
        'Ancorare'
    ],

    colonnaB: [
        'Stapanire de sine',
        'Cumpatare',
        'Adevar',
        'Fortificare',
        'Creativitate'
    ]
  },

  {
    nome: 'Randul 5',
    colonnaA: [
        'Fermitate',
        'Ordonare',
        'Vitalitate',
        'Rabdare',
        'Inspiratie'
    ],

    colonnaB: [
        'Maleabilitate',
        'Liniste',
        'Desavarsire',
        'Intelepciune',
        'Determinare'
    ]
  },

  {
    nome: 'Randul 6',
    colonnaA: [
        'Prospetime',
        'Descalcinare',
        'Deblocare',
        'Cunoaștere',
        'Trezvie'
    ],

    colonnaB: [
        'Hotărâre',
        'Relaxare',
        'Incredere',
        'Stop factorilor de stres',
        'Sanatate'
    ]
  },

  {
    nome: 'Randul 7',
    colonnaA: [
        'Flexibilitate',
        'Renastere',
        'Calmare',
        'Armonie',
        'Adaptare usuoara'
    ],

    colonnaB: [
        'Reactivare',
        'Limpezire',
        'Lumina',
        'Staruinta in bine',
        'Capacitate'
    ]
  },

  {
    nome:'Randul 8',
    colonnaA: [
        'Creativitate',
        'Concentrare',
        'Siguranta',
        'Amabilitate',
        'Hotarare'
    ],

    colonnaB: [
        'Putere',
        'Corectitudine',
        'Curatenie',
        'Mangaiere',
        'Purificare'
    ]
  },

  {
    nome: 'Randul 9',
    colonnaA: [
        'Securizarea zonei afectate',
        'Ocrotire',
        'Protectie',
        'Iubirea aproapelui',
        'Activarea apetitului'
    ],

    colonnaB: [
        'Curatenie',
        'Detasare',
        'Apropiere',
        'Ingaduinta',
        'Invingatori'
    ]
  },

  {
    nome: 'Randul 10',
    colonnaA: [
        'Alimentare corecta'
    ],

    colonnaB: [
        'Entuziasm'
    ]
  }


];

  const playEnergy = (energy) => {
    console.log('Play:', energy);

    // Qui in futuro puoi mettere la riproduzione audio
  };

  return (
    <div className="tabel-energiilor-container">

      <table className="tabel-energiilor">

        <thead>
          <tr>
            <th></th>
            <th>Coloana A</th>
            <th>Coloana B</th>
          </tr>
        </thead>

        <tbody>
  {righe.map((riga, index) => (
    <tr key={index}>

      <td className="rand-cell">
        {riga.nome}
      </td>

      <td className="energy-cell">
        <div className="energy-list">

          {riga.colonnaA.map((energy, index) => (
            <div className="energy-item" key={index}>

              <span>{energy}</span>

              <button
                className="play-button"
                onClick={() => playEnergy(energy)}
              >
                ▶
              </button>

            </div>
          ))}

        </div>
      </td>

      <td className="energy-cell">
        <div className="energy-list">

          {riga.colonnaB.map((energy, index) => (
            <div className="energy-item" key={index}>

              <span>{energy}</span>

              <button
                className="play-button"
                onClick={() => playEnergy(energy)}
              >
                ▶
              </button>

            </div>
          ))}

        </div>
      </td>

    </tr>
  ))}
</tbody>


      </table>

    </div>
  );
}
