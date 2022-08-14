import {Navbar, Footer} from "../../components";
import '../../styles/project.css';
import './home.css';
import { categories as data } from "../../backend/db/categories";
import {Link} from "react-router-dom";

export function Home(){
    return (
        <>
        <Navbar/>
        <section id="home-section">
            <div className="categories" id="explore-categories">
                Quiz categories
            <div className="card-container">
            {
            data.map(data =>(
              <div className="card"  key ={data.id}>
                <div className="card-image fit">
                    <img src={data.image} alt={data.categoryName} />
                </div>
                <div className="card-heading">
                    {data.categoryName}
                </div>
                <div className="card-description">
                    {data.description}
                </div>
                <div className="card-button">
                    <Link to="/rules">
                      <button className="card-buy">Attempt Quiz</button>
                    </Link>
                </div>
               </div>
             ))
            }
            </div>
            </div>
        
        </section>
        <Footer/>
        </>
    )
}