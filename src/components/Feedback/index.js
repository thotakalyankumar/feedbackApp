import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    feedbackSelected: false,
  }

  onClickEmoji = () => this.setState({feedbackSelected: true})

  feedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="question-container">
        <h1 className="question">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emojis-list">
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button type="button" className="btn" onClick={this.onClickEmoji}>
                <img src={emoji.imageUrl} alt={emoji.name} className="emoji" />
                <br />
                <span className="emoji-name">{emoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  thankYouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thank-you-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="text">Thank You!</h1>
        <p className="description">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {feedbackSelected} = this.state

    return (
      <div className="bg-container">
        <div className="card-Container">
          {feedbackSelected ? this.thankYouScreen() : this.feedbackQuestion()}
        </div>
      </div>
    )
  }
}

export default Feedback
