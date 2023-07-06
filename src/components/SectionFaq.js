import '../stylesheets/SectionFaq.css'
import iconArrow from '../images/icon-arrow-down.svg'
import { useContext } from 'react';
import { DatabaseContext } from '../App';

function SectionFaq() {

  const {database} = useContext(DatabaseContext);
  const {setDatabase} = useContext(DatabaseContext)

  return (
    <>
      {database.map(info => {

        const handleClickQuestion = () => {
          const copyDataBase = [...database]

          const findId = copyDataBase.findIndex((element) => element.id === info.id);

          if (copyDataBase[findId].isSelected == false) {
            copyDataBase[findId].isSelected = true
          } else {
            copyDataBase[findId].isSelected = false
          }

          for (let i=0; i<copyDataBase.length; i++) {
            if (!(findId === i)) {
              copyDataBase[i].isSelected = false
            }
          }

          setDatabase(copyDataBase)
        }

        const handleClassAnswer = () => {
          const copyDataBase = [...database]
          const findId = copyDataBase.findIndex((element) => element.id === info.id);

          if (copyDataBase[findId].isSelected == true) {
            return 'answer-text'
          } else {
            return 'off'
          }
        }

        const handleClassQuestion = () => {
          const copyDataBase = [...database]
          const findId = copyDataBase.findIndex((element) => element.id === info.id);

          if (copyDataBase[findId].isSelected == true) {
            return 'question-text active'
          } else {
            return 'question-text'
          }
        }

        const handleClassIcon = () => {
          const copyDataBase = [...database]
          const findId = copyDataBase.findIndex((element) => element.id === info.id);

          if (copyDataBase[findId].isSelected == true) {
            return 'icon-arrow active'
          } else {
            return 'icon-arrow'
          }
        }

        return (
          <section className='single-faq-container'>
            <div className='question-box' onClick={handleClickQuestion}>
              <h4 className={handleClassQuestion()}>{info.question}</h4>
              <img src={iconArrow} className={handleClassIcon()}/>
            </div>
            <p className={handleClassAnswer()}>{info.answer}</p>
            <hr></hr>
          </section>
        )
      })}
    </>
  )
}

export default SectionFaq;