import React, { Component } from "react";
import FeedbackOptions from "./feedbackOptions/FeedbackOptions ";
import Notification from "./notification/Notification";
import Section from "./section/Section";
import Statistics from "./statistics/Statistics";
import "./App.css";

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  getOptions = () => {
    console.log(Object.keys(this.state));
    return Object.keys(this.state);
  };

  onLeaveFeedback = (e) => {
    const name = e.target.name;
    this.setState((prevState) => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return this.countTotalFeedback()
      ? Math.round((good * 100) / this.countTotalFeedback())
      : 0;
  };

  render() {
    return (
      <>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            options={this.getOptions()}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title={"Statistics"}>
          {!!this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
