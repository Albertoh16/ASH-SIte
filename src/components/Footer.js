import '../styles/FooterStyles.css'

function Footer() {
    return (
      <div className="footer">
        <div class="footerContainer">

          <div class="footerDivision">
            <h3 class="divisionTitle">Contacts</h3>
            <a href="mailto:albertohern1116@gmail.com" className='linkTxt'>Email</a>
            <h3 className='linkTxt'>Mobile Number: (786) 479-1686</h3>
          </div>

          <div class="footerDivision">
            <h3 class="divisionTitle">External Sites</h3>
            <a href="https://www.linkedin.com/in/albertoh16/" className='linkTxt'>LinkedIn</a>
            <a href="https://github.com/Albertoh16" className='linkTxt'>GitHub</a>
          </div>

          <div class="footerDivision">
            <h3 class="divisionTitle">Documents</h3>
            <a href="../assets/Alberto_S_Hernandez_Resume.pdf" className='linkTxt'>Resume</a>
            <a href="../assets/LetterOfReccomendation.pdf" className='linkTxt'>UKG Letter of Reccomendation</a>
          </div>

        </div>
      </div>
    )
  }
  
  export default Footer