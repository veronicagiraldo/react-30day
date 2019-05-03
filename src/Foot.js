import React from 'react';
import './foot.css';

const Foot = () => {

return(
<footer class="page-footer">
          <div class="container"> 
                <h5 class="white-text"></h5>
                <p>Thank you for checking out my 30 day challenge on JavaScript. I hope you enjoyed it, if you want to find out more about me please check out some of my links below <i class="fas fa-arrow-down"></i></p>
                <ul>
                  {/* <li><a class="grey-text text-lighten-3"><i class="fas fa-female"></i><i class="fas fa-coffee"></i><i class="fas fa-cat"></i></a></li> */}
                  <li><a class="grey-text text-lighten-3" href="https://www.linkedin.com/in/veronicagiraldo"><i class="fab fa-linkedin"></i></a></li>
                  <li><a class="grey-text text-lighten-3" href="https://github.com/veronicagiraldo"><i class="fab fa-github"></i></a></li>
                  <li><a class="grey-text text-lighten-3" href="vgiraldo.veronica@gmail.com"><i class="fas fa-envelope"></i></a></li>
                  <li><a class="grey-text text-lighten-3" href="http://veronicagiraldoportfolio.com/">Website</a></li>
                </ul>
              </div>
          <div class="footer-copyright">
            <div class="container">
            © 2019 Veronica Giraldo
            <a class="grey-text text-lighten-4 right" href="#"></a>
            </div>
          </div>
        </footer>
)
}

export default Foot;