import './rugaciunea.css';
import { useState } from "react";


export default function Rugaciunea() {

  const [isOpen, setIsOpen] = useState(false);

const audioPath = "/Audio/rugaciunea-de-conectare.mp3"; 
  return (
    <div>
      <div className="title-rugaciunea-de-conectare">
        <h2>Rugăciunea de conectare</h2>
      </div>

       <button className='button-rugaciunea' onClick={() => setIsOpen(true)}>Audio</button>
      
      <p className='paragraph-rugaciunea-de-conectare'>Vom spune rugaciunea de incepere a sesiunii noastre. <br /> <br /> In numele Tatalui si al Fiului si al Sfantului Duh. Amin.

      Tatăl nostru Care ești în ceruri , <br /> <br />

sfințească-se numele Tău, vie împărăția Ta, facă-se voia Ta, precum în cer așa și pe Pământ. <br /> <br />

Pâinea noastră cea de toate zilele dă-ne-o nouă astăzi și ne iartă nouă greșelile noastre, precum și noi iertăm greșiților noștri. <br />

Și nu ne lăsa pe noi în ispită, ci ne izbăvește de cel rău. <br /> <br />

Că a Ta este împărăția și puterea și slava, a Tatălui și a Fiului și a Sfântului Duh. Amin. <br /> <br />

Doamne, Iisuse Hristoase, Dumnezeul nostru trimite asupra noastră puterea Ta pentru a primi ajutor.
Că Tu ești mare și puternic și Ție slava și închinăciune înălțăm, Tatălui și Fiului și Sfântului Duh, acum și pururea și în vecii vecilor. Amin. <br /> <br />

Facem semnul Sfintei Cruci pe toate degetele și pe podul palmei. <br /> <br />

(Facem un exercițiu EFT (Emotional Freedom Technic), mergând cu bătăi pe capetele de meridiane.
Începem cu o serie de trei bătăi pe latura palmei, după care urmează: început sprânceană, coada ochilor, sub ochi, sub nas, sub gură, sub claviculă, sub braț și pe creștetul capului.) <br /> <br />

Mă conectez la Puterea Divină pentru a primi ajutor. (de trei ori) <br /> <br />

Ne conectăm la Puterea Divină pentru a primi ajutor. (de trei ori) <br /> <br />

Sunt conectat(ă) la Puterea Divină.  <br /> <br />

Sunt conectat(ă) la Puterea Divină. <br /> <br />

Sunt conectat(ă) la Puterea Divină, în minte, corp și spirit. <br /> <br />

Amin!</p>

    {/* MODAL AUDIO */}

    {isOpen && (
      <div className='modal-overlay' onClick={() => setIsOpen(false)}>
        <div className='modal-content' onClick={e => e.stopPropagation()}>
          <h3>Rugaciunea de conectare</h3>
          <audio controls>
            <source src={audioPath} type="audio/mpeg" />
          </audio>
          </div>
      </div>
    )}
    </div>
  );
}