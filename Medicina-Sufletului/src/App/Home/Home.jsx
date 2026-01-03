import './Home.css';
import { useState } from 'react';

export default function Home() {
  // Stato per capire quale sezione mostrare
  const [section, setSection] = useState('module'); // di default Module

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
  					<div className="module-card" key={module.id}>
    					<img
      						src={module.image}
      						alt={module.title}
      						className="module-image"
    					/>
    						<h3>{module.title}</h3>
    						<p>{module.description}</p>
  					</div>
				))}
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
    title: "Modulo 1",
    description: "Rugăciunea de conectare",
    image: "/images/module-images/home-page-images/rugaciuneaDeConectare-ezgif.com-webp-to-jpg-converter.jpg"
  },

  {
	id : 2,
	title: "Modulo 2",
	description: "Dezechilibru",
	image: "/images/module-images/Home Page Images/Dezecchilibru.webp"
  },

  {
	id : 3,
	title: "Modulo 3",
	description: "Resetarea Comunicarii",
	image: "/images/module-images/Home Page Images/Resetarea comunicarii.webp"
  },

  {
	id : 4,
	title: "Modulo 4",
	description: "Resetarea Zonei Afectate",
	image: "/images/module-images/Home Page Images/Resetarea zonei afectate.webp"
  },

  {
	id : 5,
	title: "Modulo 5",
	description: "Resetarea Varstei Biologice",
	image: "/images/module-images/Home Page Images/Resetarea varstei biologice.webp"
  },

  {
	id : 6,
	title: "Modulo 6",
	description: "Rugaciunea de Activare a Inteligentei a Zonei Afectate",
	image: "/images/module-images/Home Page Images/Rugaciunea de activare a inteligentei a zonei afectate.webp"
  },

  {
	id : 7,
	title: "Modulo 7",
	description: "Resetarea Matricei",
	image: "/images/module-images/Home Page Images/Resetarea matricei.webp"
  },

  {
	id : 8,
	title: "Modulo 8",
	description: "Curatarea Amprentei Preluate",
	image: "/images/module-images/Home Page Images/Curatarea amprentei preluate.webp"
  },

  {
	id : 9,
	title: "Modulo 9",
	description: "Spartuti in Corpul Eteric",
	image: "/images/module-images/Home Page Images/Spartuti in corpul electric.webp"
  },

  {
	id : 10,
	title: "Modulo 10",
	description: "Circuite Electrice",
	image: "/images/module-images/Home Page Images/Circuite electrice.webp"
  },

  {
	id : 11,
	title: "Modulo 11",
	description: "Spirit, Entitati, Duhuri",
	image: "/images/module-images/Home Page Images/Spirit, Entitati, Duhuri.webp"
  },

  {
	id : 12,
	title: "Modulo 12",
	description: "Activarea Scutului de Protectie",
	image: "/images/module-images/Home Page Images/Activarea scutului de protectie.webp"
  },

  {
	id : 13,
	title: "Modulo 13",
	description: "Scutul Biologic",
	image: "/images/module-images/Home Page Images/Scut biologic.webp"
  },

  {
	id : 14,
	title: "Modulo 14",
	description: "Rugaciunea de Multumire",
	image: "/images/module-images/Home Page Images/Rugaciunea de multumire.webp"
  }


];

