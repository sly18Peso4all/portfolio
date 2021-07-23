// import Button from "../Buttons/Button";
// import { ImGithub } from "react-icons/im";
// import { Link } from "react-router-dom";
// import card_data from "../../Data/card_data";

// const Cards = () => {
//   return (
//     <div className="cards">
//       <h4 className="cards-header">Other Noteworthy Projects</h4>
//       <div className="card">
//         {card_data.map((card) => (
//           <div className="card-container" key={card.id}>
//             <div className="card-img">
//               <img src={card.image} alt={card.title} />
//             </div>
//             <div className="card-info">
//               <h4 className="card-title">{card.title}</h4>
//               <p className="card-desc">{card.description}</p>
//               <div className="card-link">
//                 <Link to="/">
//                   <ImGithub size={25} style={{ color: "#f1f1f1" }} />
//                 </Link>
//               </div>

//               <Button text={"VIEW PROJECT"} type={"one"} url={"hello"} />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Cards;
