import "./FaqFooter.css";

const FaqFooter = () => {
  const faqs = [
    {
      question: "What are Aligners?",
      answer:
        "Aligners are clear, removable orthodontic devices that gradually straighten teeth.",
    },
    {
      question: "How do Aligners work?",
      answer:
        "They apply gentle pressure to move teeth into proper alignment over time.",
    },
    {
      question: "Can any dentist do irregular teeth treatment?",
      answer:
        "No, it requires specialized training and certification in orthodontic aligners.",
    },
    {
      question: "Are there any restriction on eating or drinking?",
      answer:
        "You should remove aligners while eating or drinking anything other than water.",
    },
    {
      question: "How long does the treatment take?",
      answer:
        "Treatment typically ranges from 6 to 18 months depending on individual cases.",
    },
  ];

  return (
    <footer className="footer">
      <div className="container">
        {/* FAQ Section */}
        <div className="faq-section">
          <h2 className="faq-title">Got Questions? We've got answers</h2>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={index} className="faq-item">
                <summary className="faq-question">
                  {faq.question}
                  <span className="faq-icon">+</span>
                </summary>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Footer Bottom Section */}
      </div>
      <div>
        <div className="footer-bottom">
          {/* Quick Links */}
          <div className="footer-column">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#scan">Book a Free Scan</a>
              </li>
              <li>
                <a href="#how-it-works">How it Works</a>
              </li>
              <li>
                <a href="#range">Range of Aligners</a>
              </li>
              <li>
                <a href="#compare">Aligners vs Braces</a>
              </li>
              <li>
                <a href="#faqs">FAQs</a>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="footer-column">
            <h3 className="footer-heading">Get in Touch Now!</h3>
            <div className="contact-info">
              <p>
                📞 <a href="tel:01168228250">011-6822-8250</a>
              </p>
              <p>
                ✉️ <a href="mailto:support@whistle.in">support@whistle.in</a>
              </p>
            </div>
          </div>

          {/* Follow us on */}
          <div className="footer-column">
            <h3 className="footer-heading">Follow us on</h3>
            <div className="social-links">
              <a href="#facebook" className="social-link facebook">
                <svg
                  className="social-icon"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                >
                  <path
                    fill="currentColor"
                    d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
                  />
                </svg>
                Facebook
              </a>
              <a href="#twitter" className="social-link twitter">
                <svg
                  className="social-icon"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                >
                  <path
                    fill="currentColor"
                    d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.52 8.52 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
                  />
                </svg>
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FaqFooter;
