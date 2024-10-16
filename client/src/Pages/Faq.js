import React, { useState } from 'react';
import '../Component/css/Faq.css';
import faq from "../Component/Images/faq.jpg"
import Header from '../Component/Header';
import Footer from '../Component/Footer';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What services does MPC Real Estate provide?",
      answer: "We provide a wide range of real estate services, including property buying, selling, leasing, and consultancy."
    },
    {
      question: "How can I contact MPC Real Estate?",
      answer: "You can contact us through our phone number (123) 456-7890, email at info@mpcrealestate.com, or visit our office."
    },
    {
      question: "Do you offer property management services?",
      answer: "Yes, we provide property management services to help you maintain and manage your property efficiently."
    },
    {
      question: "Can I schedule a property visit?",
      answer: "Absolutely! You can schedule a property visit by contacting us directly or booking a time through our website."
    },
    {
      question: "What are the payment options for properties?",
      answer: "We offer various payment options including cash payments, bank loans, and installment plans based on client needs."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle active FAQ
  };

  return (
    <>
   
    <Header />
 
    <div className="faq-container">
     
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {faq.question}
            </div>
            <div className="faq-answer" style={{ display: activeIndex === index ? 'block' : 'none' }}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default FAQ;
