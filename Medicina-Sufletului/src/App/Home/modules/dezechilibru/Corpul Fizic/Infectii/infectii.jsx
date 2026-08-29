import './infectii.css';

export default function Infectie({}) {

  return (
    <div className="infectii-container">

      <h2>Infectie</h2>

      <div className="infectii-module-cards">

        <div className="infectii-main-cards">
          <h3>Virala</h3>
          <button className="play-button">▶</button>
        </div>

        <div className="infectii-main-cards">
          <h3>Bacteriana</h3>
          <button className="play-button">▶</button>
        </div>

        <div className="infectii-main-cards">
          <h3>Fungica</h3>
          <button className="play-button">▶</button>
        </div>

        <div className="infectii-main-cards">
          <h3>Mucegai</h3>
          <button className="play-button">▶</button>
        </div>

        <div className="infectii-main-cards">
          <h3>Parazitii</h3>
          <button className="play-button">▶</button>
        </div>

      </div>

    </div>
  );
}