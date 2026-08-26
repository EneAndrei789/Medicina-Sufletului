import React from 'react';
import './energii-favorabile.css';

export default function TabelulEnergiilorFavorabile() {

  const coloanaA = [
    'Pace',
    'Iubire',
    'Credință',
    'Nădejde',
    'Curaj',
    'Entuziasm',
    'Perseverență',
    'Prosperitate',
    'Statornicie'
  ];

  const coloanaB = [
    'Claritate',
    'Prezență',
    'Înțelegere',
    'Generozitate',
    'Comunicare ușoară',
    'Succes',
    'Motivație',
    'Consecvență',
    'Deschidere către creativitate'
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
          <tr>

            {/* Prima colonna */}
            <td className="rand-cell">
              <span>Rândul 1</span>
            </td>

            {/* Coloana A */}
            <td className="energy-cell">
              <div className="energy-list">

                {coloanaA.map((energy, index) => (
                  <div
                    className="energy-item"
                    key={index}
                  >
                    <span>{energy}</span>

                    <button
                      className="play-button"
                      onClick={() => playEnergy(energy)}
                      aria-label={`Redă ${energy}`}
                    >
                      ▶
                    </button>
                  </div>
                ))}

              </div>
            </td>

            {/* Coloana B */}
            <td className="energy-cell">
              <div className="energy-list">

                {coloanaB.map((energy, index) => (
                  <div
                    className="energy-item"
                    key={index}
                  >
                    <span>{energy}</span>

                    <button
                      className="play-button"
                      onClick={() => playEnergy(energy)}
                      aria-label={`Redă ${energy}`}
                    >
                      ▶
                    </button>
                  </div>
                ))}

              </div>
            </td>

          </tr>
        </tbody>

      </table>

    </div>
  );
}
