import './footer.css';
export  function Footer(){
return (
<footer className="footer-class">
   <p className="description">Made by  -  @sharath-io</p>
   <ul className ="footer-items">
            <li className="footer-list">
               <a className="footer-list-link" href="https://github.com/sharath-io" target="_blank" rel="noopener noreferrer"><i className="fa fa-github social-link"></i></a>
            </li>
            <li className="footer-list">
               <a className="footer-list-link" href="https://www.linkedin.com/in/sharath-io/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin  social-link"></i></a>
            </li>
            <li className="footer-list">
               <a className="footer-list-link" href="https://twitter.com/sharath_io" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter  social-link"></i></a>
            </li>
   </ul>
</footer>
)
}