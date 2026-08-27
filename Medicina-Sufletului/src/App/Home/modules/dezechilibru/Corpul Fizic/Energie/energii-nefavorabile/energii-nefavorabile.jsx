import React from "react";
import "./energii.nefavorabile.css";

export default function TabelulEnergiilorNefavorabile() {

    const righe = [
        {
            nome: 'Randul 1',
            colonnaA: [
                'Victima',
                'Coplesire',
                'Nerabdare',
                'Dezgust',
                'Dezinterest',
                'Dezordine',
                'Lene',
                'Bantuire',
                'Lipsa de iubire'
            ],

            colonnaB: [
                'Neicredere',
                'Nervozitate',
                'Ignorare',
                'Agresivitate',
                'Linguseala',
                'Confuzie',
                'Santaj',
                'Energie de incapacitate',
                'Jena'
            ]
        },

        {
            nome: 'Randul 2',
            colonnaA: [
                'Gelozie',
                'Sadism',
                'Masochism',
                'Nehotarare',
                'Carcoteala',
                'Melancolie',
                'Dispretuire',
                'Mandrie',
                'Energie diabolica'
            ],

            colonnaB: [
                'Nemultumire',
                'Rigiditate',
                'Irascibilitate',
                'Atasament',
                'Perfidie',
                'Narcisism',
                'Acuzare',
                'Frica de suferinte',
                'Fuga de raspundere'
            ]
        },

        {
            nome: 'Randul 3',
            colonnaA: [
                'Ingrijorare',
                'Sabotaj',
                'Critica',
                'Rusine',
                'Ipocrizie',
                'Dominatie',
                'Inversunare',
                'Egoism',
                'Nepasare'
            ],

            colonnaB: [
                'Egomanie',
                'Instabilitate psihica',
                'Dorinta vs lipsa',
                'Viclenie',
                'Masturbare',
                'Claustofobie',
                'Desfranare',
                'Mizerie',
                'Malnutritie sufleteasca'
            ]
        },

        {
            nome: 'Randul 4',
            colonnaA: [
                'Incalcire',
                'Vampirism',
                'Distorsionare',
                'Sufocare',
                'Emotivitate',
                'Umilinta',
                'Stagnare',
                'Energie Otravitoare',
                'Dilatare'
            ],

            colonnaB: [
                'Razbunare',
                'Imprastiere',
                'Incrancenare',
                'Nesiguranta',
                'Epuizare',
                'Deznadejde',
                'Durere sufleteasca',
                'Toxicitate',
                'Nostalgie'
            ]
        },

        {
            nome: 'Randul 5',
            colonnaA: [
                'Timp comprimat',
                'Lacomie',
                'Indiferenta',
                'Inhibare',
                'Furie',
                'Neputinta',
                'Inferioritate',
                'Insesibilitate',
                'Teroare'
            ],

            colonnaB: [
                'Tristete',
                'Izolare',
                'Incapatanare',
                'Plumb',
                'Mercur',
                'Mitomanie',
                'Indecizie',
                'Intovertire',
                'Lipsa de curaj'
            ]
        },

        {
            nome: 'Randul 6',
            colonnaA: [
                'Timiditate',
                'Neacceptare',
                'Frica',
                'Suparare',
                'Amaraciune',
                'Manie',
                'Deshidratare sufleteasca',
                'Respingere',
                'Deficit de bucurie'
            ],

            colonnaB: [
                'Fobie obsesiva',
                'Barfa',
                'Obsesie',
                'Paranoia',
                'Ostilitate',
                'Frustrare',
                'Strangulare',
                'Grandomanie',
                'Violenta'
            ]
         },

         {
            nome: 'Randul 7',
            colonnaA: [
                'Energie de gheata',
                'Slabiciune',
                'Stres',
                'Creier spalat',
                'Manipulare',
                'Imbufnare',
                'Intimidare',
                'Neglijenta',
                'Incapacitate de comunicare'
            ],

            colonnaB: [
                'Megatomanie',
                'Apatie',
                'Intunecare',
                'Avaritie',
                'Rautate',
                'Energie distructiva',
                'Infidelitate',
                'Mahnire'
            ]
         },

         {
            nome: 'Randul 8',
            colonnaA: [
                'Abuz de sine',
                'Datorie',
                'Furt',
                'Energie care te innebuneste',
                'Instabilitate vegetativa',
                'Greutate',
                'Impulsivitate',
                'Energie de calcifiere',
                'Regret'
            ],

            colonnaB: [
                'Abandon',
                'Rivalitate',
                'Invidie',
                'Aroganta',
                'Limitare',
                'Enervare',
                'Dominare',
                'Inflexibilitate',
                'Scepticism'
            ]
         },

         {
            nome: 'Randul 9',
            colonnaA: [
                'Nepasare',
                'Conflict',
                'Posesiune',
                'Cruzime',
                'Nestatornicie',
                'Cinism',
                'Dezorientare',
                'Energie de uscaciune',
                'Repros'
            ],

            colonnaB: [
                'Dezaprobare',
                'Suspiciune',
                'Vinovatie',
                'Neajutoare',
                'Greata',
                'Revolta',
                'Dusmanie',
                'Ceata mentala',
                'Ezitare'
            ]
         },

         {
            nome: 'Randul 10',
            colonnaA: [
                'Lipsa de entuzuiasm',
                'Pesimism',
                'Violenta',
                'Dubiu',
                'Lipsa de respect',
                'Remuscare',
                'Iubire neprimita',
                'Lipsa de inganduinta',
                'Devalorizare'
            ],

            colonnaB: [
                'Supunere',
                'Minciuna',
                'Comoditate',
                'Micsorare',
                'Suspiciune',
                'Insistenta',
                'Suflet ranit',
                'Descurajare',
                'Tortura'
            ]
        },

        {
            nome: 'Randul 11',
            colonnaA: [
                'Dusmanie',
                'Vrajba',
                'Invidie',
                'Lehamite',
                'Inlantuire',
                'Hartuire',
                'Impotrivire',
                'Dezamagire',
                'Deochi'
            ],

            colonnaB: [
                'Piatra de moara',
                'Plans',
                'Risipa',
                'Inima rupta',
                'Hartuire',
                'Tulburare',
                'Sacrificiu',
                'Cearta',
                'Inflamatie'
            ]
        },

        {
            nome: 'Randul 12',
            colonnaA: [
                'Intimidare',
                'Cedarea puterii',
                'Devitalizare',
                'Tortura'
            ],

            colonnaB: [
                'Superioritate',
                'Zgarcenie',
                'Inima grea',
                'Demoralizare'
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
                        <tr key= {index}>
                            <td className="rand-cell">
                                {riga.nome}
                            </td>

                            <td className="energy-cell">
                                <div className="energy-list">
                                    {riga.colonnaA.map((energy, index) => (
                                        <div className="energy-item" key={index}>
                                            <span>{energy}</span>

                                            <button className="play-button" onAuxClickCapture={() => playEnergy(energy)}>
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

                                                <button className="play-button" onClick={() => playEnergy(energy)}>
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
    )

}