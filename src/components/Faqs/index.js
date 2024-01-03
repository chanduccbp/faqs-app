// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {plusClickedIds: []}

  onClickFaq = id => {
    const {plusClickedIds} = this.state
    if (plusClickedIds.includes(id)) {
      const newArray = plusClickedIds.filter(eachId => eachId !== id)
      this.setState({plusClickedIds: newArray})
    } else {
      const newArray = [...plusClickedIds, id]
      this.setState({plusClickedIds: newArray})
    }
  }

  render() {
    const {plusClickedIds} = this.state
    const {faqsList} = this.props

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="card-head">FAQs</h1>
          <ul className="list">
            {faqsList.map(eachFaq => (
              <FaqItem
                faqDetails={eachFaq}
                key={eachFaq.id}
                isPlusClicked={plusClickedIds.includes(eachFaq.id)}
                onClickFaq={this.onClickFaq}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
