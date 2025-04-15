import resume from '../assets/Alberto_S_Hernandez_Resume.pdf'
import LetterOfRec from '../assets/ASH_UKG_LetterOfReccomendation.pdf'
import '../index.css';

function Footer() {
    return (
      // Main Footer Container
      <div className="hidden h-[90%] w-[90%] mt-[1%] ml-[5%] text-center
      lg:flex lg:justify-center
      ">
          {/* Footer Division */}
          <div class="w-[33%] h-[80%] mt-[18px] ml-[5%]">
            
            {/* Division Title */}
            <div class="text-2xl text-white underline font-bold mb-[10px] mt-[10px]">Contacts</div>

            {/* Email */}
            <a href="mailto:albertohern1116@gmail.com" className='text-white text-[18px] underline'>albertohern1116@gmail.com</a>
            
            {/* Phone Number */}
            <div className='text-white text-[18px] mt-[5px]'>Mobile Number:<br />(786) 479-1686 </div>
          </div>

          <div class="w-[33%] h-[80%] mt-[18px] ml-[5%] mr-[5%] ">

            {/* Division Title */}
            <div class="text-2xl text-white underline font-bold mb-[10px] mt-[10px]">External Sites</div>

            <a href="https://www.linkedin.com/in/albertoh16/" target="_blank" className='text-white text-[18px] underline block'>LinkedIn</a>
            <a href="https://github.com/Albertoh16" target="_blank" className='text-white text-[18px] underline mt-[5px] block'>GitHub</a>
          </div>

          <div class="w-[33%] h-[80%] mt-[18px] mr-[5%]">

            {/* Division Title */}
            <div class="text-2xl text-white underline font-bold mb-[10px] mt-[10px]">Documents</div>

            <a href={resume} download='Alberto_S_Hernandez_Resume.pdf' className='text-white text-[18px] underline block'>Resume</a>
            <a href={LetterOfRec} download='ASH_UKG_LetterOfReccomendation.pdf' className='text-white text-[18px] underline mt-[5px] block'>UKG Letter of Reccomendation</a>
          </div>

      </div>
    )
  }
  
  export default Footer