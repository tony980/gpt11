import React from 'react';
import '../css/Gpt.css';

const Gpt3 = () => {
  return (
    <section className="gpt3-section">
      <div className="main-card-container">
        <div className="what-is-section">
           <div className="heading-container">
  
  <h3 className="heading-text"> <div className="heading-line"></div><br/>What is GPT-3</h3>
</div>

          <div className="description">
            <p>
              GPT-3, or Generative Pretrained Transformer 3, is an advanced language model developed by OpenAI.
              It can generate human-like text based on given prompts, making it capable of answering questions,
              writing essays, creating poetry, and even generating code.
            </p>
          </div>
        </div>

        <div className="possibilities-section">
          <h2 className="possibilities-text">
            The possibilities are
            <br />
            <span className="highlighted"> beyond </span>your imagination
          </h2>
          <div className="explore-link-container">
            <a href="#explore" className="explore-link"><br/>Explore The Library</a>
          </div>
        </div>

        <div className="features-container">
          <div className="feature">
            <div className="feature-line"></div>
            <h4 className="feature-title">Chatbots</h4>
            <p className="feature-description">
              GPT-3 can be used to create advanced chatbots capable of understanding and responding to complex queries,
              simulating human-like conversations across multiple domains.
            </p>
          </div>

          <div className="feature">
            <div className="feature-line"></div>
            <h4 className="feature-title">Knowledgebase</h4>
            <p className="feature-description">
              GPT-3 can be integrated with knowledgebase systems to provide dynamic, real-time answers from a wide array of
              information sources.
            </p>
          </div>

          <div className="feature">
            <div className="feature-line"></div>
            <h4 className="feature-title">Education</h4>
            <p className="feature-description">
              GPT-3 can assist in education by providing personalized learning experiences, creating learning materials,
              and generating quizzes or educational content.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gpt3;
