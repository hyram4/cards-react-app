import qr from './image-qr-code.png';
import './Card.css';

 export default function Card() {
  return (
   <div className="container">
      <div className="all">
       <div className="one">
        <img src={qr} className="qr-code" alt="code" />
       </div>
       <div className="two">
        <h2>Improve your front-end skils by building projects</h2>
         <p className="paragraph">Scan the qr code to visit the frontend Mentor and take your coding skils to the next level</p>
        </div>
      </div>
   </div>
  );
}

