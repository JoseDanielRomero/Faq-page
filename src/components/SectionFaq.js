import '../stylesheets/SectionFaq.css'
import iconArrow from '../images/icon-arrow-down.svg'

function SectionFaq() {

  return (
    <section className='single-faq-container'>
      <div className='question-box'>
        <h4 className='question-text'>How many team members can I invite?</h4>
        <img src={iconArrow} className='icon-arrow'/>
      </div>
      <p className='answer-text'>You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.</p>
      <hr></hr>
    </section>
  )
}

export default SectionFaq;