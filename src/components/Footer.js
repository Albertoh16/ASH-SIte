import resume from '../assets/Alberto_S_Hernandez_Resume.pdf'
import LetterOfRec from '../assets/ASH_UKG_LetterOfReccomendation.pdf'
import '../index.css';

function Footer() {
    return (
      // Main Footer Container
      <div className='h-[200px] w-[100%] relative bg-mainThree min-w-[320px] mt-auto border-t-4 border-black justify-center items-center hidden lg:flex'>
        <div className="flex justify-center h-[90%] w-[90%] text-center
        2xl:w-[50%]
        ">
            {/* Footer Division */}
            <div className="w-[33%] h-[80%]
            ">
              
              {/* Division Title */}
              <div className="text-2xl text-white underline font-bold mb-[10px] mt-[10px]">Contacts</div>

              {/* Email */}
              <a href="mailto:albertohern1116@gmail.com" className='text-white text-[18px] underline'>albertohern1116@gmail.com</a>
              
              {/* Phone Number */}
              <div className='text-white text-[18px] mt-[5px]'>Mobile Number:<br />(786) 479-1686 </div>

            </div>

            <div className="w-[33%] h-[80%] mx-[5%]
            ">

              {/* Division Title */}
              <div className="text-2xl text-white underline font-bold mb-[10px] mt-[10px]">External Sites</div>

              <a href="https://www.linkedin.com/in/albertoh16/" target="_blank" className='text-white text-[18px] underline block'>LinkedIn</a>

              <a href="https://github.com/Albertoh16" target="_blank" className='text-white text-[18px] underline mt-[5px] block'>GitHub</a>

            </div>

            <div className="w-[33%] h-[80%]
            ">

              {/* Division Title */}
              <div className="text-2xl text-white underline font-bold mb-[10px] mt-[10px]">Documents</div>

              <a href={resume} download='Alberto_S_Hernandez_Resume.pdf' className='text-white text-[18px] underline block'>Resume</a>

              <a href={LetterOfRec} download='ASH_UKG_LetterOfReccomendation.pdf' className='text-white text-[18px] underline mt-[5px] block'>UKG Letter of Reccomendation</a>
          
            </div>
        </div>
      </div>
    )
  }
  
  export default Footer