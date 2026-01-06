import './Home.css';
import { useState } from 'react';

export default function Home() {
  // Stato per capire quale sezione mostrare
  const [section, setSection] = useState('module'); // di default Module

  const [selectedModule, setSelectedModule] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

// Funzione per aprire/chiudere il modal
  const openModal = (module) => {
    setSelectedModule(module);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedModule(null);
  };

  return (
    <div className='home-container'>

		{/* Sidebar */}

      <aside className='sidebar'>
        <h3 className='sidebar-title'>Balance & Harmony 3</h3>
        <hr/>

        <div className="sidebar-section">
          <p 
            className={section === 'module' ? 'active-link' : ''} 
            onClick={() => setSection('module')}>
            Module
          </p>
        </div>

		

        <div className="sidebar-section">
          <p 
            className={section === 'account' ? 'active-link' : ''} 
            onClick={() => setSection('account')}>
            Account
          </p>
        </div>
      </aside>

		{/* Home Content */}

      <main className='home-content'>
        <div className='content-inner'>

			{/* Module Grid */}

          {section === 'module' && (
  			<div className="module-grid">
    			{moduleImages.map((module) => (
  					<div className="module-card"
						 key={module.id}
						 onClick={() => openModal(module)}
						 style={{cursor: 'pointer'}}>
    					<img
      						src={module.image}
      						className="module-image"
    					/>
    						<h3
							style={{
								fontSize: '18px',
							}}>
							{module.title}</h3>

    						<p style={{
							fontSize: '14px',
  							textAlign: 'left',
							
							}}>
							{module.description}</p>
  					</div>
				))}
  			</div>
		  	)}

			{/* MODAL OPEN */}

			{isModalOpen && selectedModule && (
  <div 
    className="modal-overlay" 
    onClick={closeModal} // chiude cliccando fuori
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    }}
  >
    <div 
      className="modal-content"
      onClick={(e) => e.stopPropagation()} // impedisce chiusura cliccando dentro
      style={{
        background: '#fff',
        borderRadius: '12px',
        padding: '30px',
        maxWidth: '600px',
        width: '90%',
        textAlign: 'center',
        maxHeight: '80%',
        overflowY: 'auto',
      }}
    >
      <button 
        onClick={closeModal} 
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          fontSize: '18px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        ✖
      </button>

      <h2>{selectedModule.title}</h2>
      <img 
        src={selectedModule.image} 
        alt={selectedModule.title} 
        style={{ maxWidth: '100%', margin: '20px 0' }}
      />
      <p>{selectedModule.modalContent}</p>

      {/* Qui puoi aggiungere altri contenuti specifici del modulo */}
    </div>
  </div>
)}

	

			{/* Account Section */}

          {section === 'account' && <h1>Contenuto Account</h1>}
        </div>
      </main>
    </div>
  );
}


export const moduleImages = [ 
  {
    id: 1,
    title: "Rugăciunea de conectare",
    description: "Rugaciunea de conectare este o forma de energie de vibratie inalta care ne ajuta sa accesam subconstientul",
    image: "/images/module-images/Home Page Images/Rugaciunea de conectare.jpg",
    modalContent: "Rugaciunea de conectare este ..."
  },

  {
	id : 2,
	title: "Dezechilibru",
	description: "Dezechilibrele sunt forme de energie reziduala, nefavorabila, care afecteaza corpul fizic mental si emotional",
	image: "/images/module-images/Home Page Images/Dezecchilibru.webp",
  modalContent: "Dezechilibrele sunt forme de energie reziduala..."
  },

  {
	id : 3,
	title: "Resetarea Comunicarii",
	description: "Anumite dezechilibre din corp se datoreaza deficientei de comunicare intre doua parti distincte din corpul nostru.Acesta comunicare poate fi afectata de energii si informatii nefavorabile, infectiii,deplasari de matrice, traume fizice si multe alte cauze .Aceste cauze pot fi gasite si eliminate si astfel se poate restabili comunicarea optima intre partile corpului nostru.",
	image: "/images/module-images/Home Page Images/Resetarea comunicarii.webp"
  },

  {
	id : 4,
	title: "Resetarea Zonei Afectate",
	description: "Pentru a reseta o zona adectata este nevoie sa gasim cauzele care au determinat acest lucru, sa le eliminam, dupa care putem reseta zona afectata. ",
	image: "/images/module-images/Home Page Images/Resetarea zonei afectate.webp"
  },

  {
	id : 5,
	title: "Resetarea Varstei Biologice",
	description: "Corpul nostru are o varsta cronologica si o varsta biologica. Acestea pot difere. In cazul in care varsta biologica depaseste varsta cronologica, trebuie fasite cauzele care au generat imbatranirea prematura. Aceste cauze se pot elimina si astfel putem reseta varsta biologica. Resetarea varstei biologice duce la regenerarea corpului fizic. Nu-i asa ca este minunat sa intinerim?",
	image: "/images/module-images/Home Page Images/Resetarea varstei biologice.webp"
  },

  {
	id : 6,
	title: "Rugaciunea de Activare a Inteligentei a Zonei Afectate",
	description: "Fiecare celula din corpul nostru are o inteligenta proprie. In cazul in care aceassta este afectata, se produc dezechilibre. Dupa eliminarea cauzelor care au afectat-o, inteligenta celulei poate fi resetata si activata.",
	image: "/images/module-images/Home Page Images/Rugaciunea de activare a inteligentei a zonei afectate.webp"
  },

  {
	id : 7,
	title: "Resetarea Matricei",
	description: "Corpul nostru are o Matrice informationala care guverneaza corpul fizic. Aceatsa Matrice detine informatia de sustinere a procesului de vindecare, regenerrarea si mentinere a starii de sanatate. MAtricea poate fi afectata de nenumarate cauze. Dupa eliminarea cauzelor, ea poate fi resetaata.",
	image: "/images/module-images/Home Page Images/Resetarea matricei.webp"
  },

  {
	id : 8,
	title: "Curatarea Amprentei Preluate",
	description: "Contactul cu o alta eprsoana poate duce la un tranfer neintentionat de energie sau informatii. Acest lucru se intampla deosebit de usor in momente de vulnerabilitate - cum ar fi epuizarea, tristeta, nelinistea, solicitarile excesive, lipsa somnului etc. O astfel de amprenta transferata poate provoca dezechilibre inconstiente. Daca acestea persista, ele pot afecta corpul fizic. Cu toate acestea, aceasta amprenta energetica poate fi usor curatata.",
	image: "/images/module-images/Home Page Images/Curatarea amprentei preluate.webp"
  },

  {
	id : 9,
	title: "Spartuti in Corpul Eteric",
	description: "In afara de corpul fizic, noi, oamenii dispunem si de un corp eteric. Acesta are rolul de a mentine energia vitala in corpul fizic, ca un scut. Sparturile in corpul eteric duc la pierderea de energie vitala din corp, fiindu-l aproape imposibil sa finalizeze procesul de autovindecare si buna functionare. Aceste sparturi se pot manifesta si sub forma de oboseala cronica,. Cel mai des ele aoar in urma interventiilor chirurgicale, dar si a traumelor fizice. O alta cauza a aparitiei acestor sparturi in corpul eteric pot fi infectiile cu virusi, bacterii, mucegai etc. In cazul in care vindecarea intarzie sa apara, va recomand sa verificati daca exista vreo spartura in corpul eteric.",
	image: "/images/module-images/Home Page Images/Spartuti in corpul electric.webp"
  },

  {
	id : 10,
	title: "Circuite Electrice",
	description: "Corpul nostru dispune de o imensa retea electrica. Va imaginati ce uzina luminoasa e in interiorul nostru? Ca orice retea, ea poate intimpina dificultati. O intrerupere de circuit electric sau un scurtcircuit pot genera dezechilibre. Si un exces dau un deficit de electricitate pot afecta buna functionalitate a corpului.",
	image: "/images/module-images/Home Page Images/Circuite electrice.webp"
  },

  {
	id : 11,
	title: "Spirit, Entitati, Duhuri",
	description: "Spiritul este acea suflare divina pe care Dumnezeu a suflat-o peste noi. Acesta poate fi detasat partial daca sunt anumiti factori care pot determina acest lucru. Caand murim, el iese din corp total. Duhurile si entitatile sunt forme de energie care calatoresc si pot afecta corpul nostru sau ura astfel generand dezechilibre.",
	image: "/images/module-images/Home Page Images/Spirit, Entitati, Duhuri.webp"
  },

  {
	id : 12,
	title: "Activarea Scutului de Protectie",
	description: "Pentru o mai buna protectie va recomand sa activati un scut de protectie divina. Aceasta este o forma de energie de inalta vibratie care va lasa doar lumina divina sa ajunga la tine si orice energie de joasa vibratie sa ramana la distanta ",
	image: "/images/module-images/Home Page Images/Activarea scutului de protectie.webp"
  },

  {
	id : 13,
	title: "Scutul Biologic",
	description: "Fiecare parte distincta din corpul nostru are un scut biologic. Acesta are rolul de a nu permite factorilor  externi sa deterioreze aceasta parte. Acest scut poate fi afectat. In aceasta situatie, testam kinesiologicc cat la suta a fost afectat acest scut, gasim cauzele, le eliminam si vom reactiva acest scut biologic cu rugaciunea urmatoare:",
  image: "/images/module-images/Home Page Images/Scutul biologic.webp"
  },

  {
	id : 14,
	title: "Rugaciunea de Multumire",
	description: "Rugaciunea de multumire este exprimarea gratitudinii fatta de ajutorul primit de la Dumnezeu.",
	image: "/images/module-images/Home Page Images/Rugaciunea de multumire.webp"
  }


];

