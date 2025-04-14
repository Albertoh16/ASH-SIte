import '../styles/FooterStyles.css'

import resume from '../assets/Alberto_S_Hernandez_Resume.pdf'
import LetterOfRec from '../assets/ASH_UKG_LetterOfReccomendation.pdf'

function Footer() {
    return (
      <div className="footer">
        <div class="footerContainer">

          <div class="footerDivision">
            <h3 class="divisionTitle">Contacts</h3>
            <a href="mailto:albertohern1116@gmail.com" className='linkTxt' id='email'>albertohern1116@gmail.com</a>
            <h3 className='linkTxt'>Mobile Number: (786) 479-1686</h3>
          </div>

          <div class="footerDivision">
            <h3 class="divisionTitle">External Sites</h3>
            <a href="https://www.linkedin.com/in/albertoh16/" className='linkTxt' target="_blank">LinkedIn</a>
            <a href="https://github.com/Albertoh16" className='linkTxt' target="_blank">GitHub</a>
          </div>

          <div class="footerDivision">
            <h3 class="divisionTitle">Documents</h3>
            <a href={resume} className='linkTxt' download='Alberto_S_Hernandez_Resume.pdf'>Resume</a>
            <a href={LetterOfRec} className='linkTxt' download='ASH_UKG_LetterOfReccomendation.pdf'>UKG Letter of Reccomendation</a>
          </div>

        </div>
      </div>
    )
  }
  
  export default Footer