// Write your code here.
import './index.css'

const FaqItem = props => {
  const {faqDetails, isPlusClicked, onClickFaq} = props
  const {id, questionText, answerText} = faqDetails

  const onClickingFaq = () => {
    onClickFaq(id)
  }

  const image = isPlusClicked
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
  const alt = isPlusClicked ? 'minus' : 'plus'

  return (
    <li className="faq">
      <div className="quest">
        <h1>{questionText}</h1>
        <button type="button" className="butt" onClick={onClickingFaq}>
          <img src={image} alt={alt} />
        </button>
      </div>
      {isPlusClicked && <p className="ans">{answerText}</p>}
    </li>
  )
}

export default FaqItem
