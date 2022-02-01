import './Nft.css';
import image1 from './image-equilibrium.jpg';
import image2 from './image-avatar.png';
import image3 from './icon-view.svg';
import image4 from './icon-ethereum.svg';
import image5 from './icon-clock.svg';

export default function Nft(){
    return(
        <div className="container-nft">
         <div className="main-nft">
            <img src={image1} className="image-one"/>
            <div className="one">
                <h2 id="heading">Equilibrium #3429</h2>
                <p id="p">Our equilibrium collection promotes balance and calm.</p>
            </div>
            <div className="two-nft">
               <div className="two-left">
                 <img src={image4} className="etherium"/>
                  <h5 id="i-heading">0.041ETH</h5>
               </div>
               <div className="two-right">
                   <img src={image5} className="clock"/>
                    <p>3 days left</p>
               </div>
            </div>
            <div className="three">
                <img src={image2} className="Avatar"/>
                <p>creation of <span className="span">Jules Wyvern</span></p>
            </div>
         </div>
        </div>
    );
}