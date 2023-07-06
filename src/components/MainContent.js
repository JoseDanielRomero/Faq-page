import '../stylesheets/MainContent.css'
import illustrationBox from '../images/illustration-box-desktop.svg'
import SectionFaq from './SectionFaq';

function MainContent() {
  return (
    <main>
      <article className='image-side'>
        <div className='img-woman' />
        <img className='img-box' src={illustrationBox} />
      </article>
      <article className='text-side'>
        <div className='text-box'>
          <h1 className='main-title'>FAQ</h1>
          <SectionFaq />
        </div>
      </article>
    </main>
  )
}

export default MainContent;