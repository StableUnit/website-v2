import React, { useState, useRef } from 'react';
import './FAQ.css';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "What is Stableunit?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
    },
    {
      question: "What is USD Pro?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris viverra veniam sit amet lacus cursus. Fusce dapibus tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo."
    },
    {
      question: "How can I get USD Pro?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Sed posuere consectetur est at lobortis."
    },
    {
      question: "How USD Pro earn Yield?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur. Sed posuere consectetur est at lobortis. Fusce dapibus tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vestibulum id ligula porta felis euismod semper."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    };
  };

  const handleTouchEnd = (e: React.TouchEvent, index: number) => {
    if (!touchStartRef.current) {
      toggleItem(index);
      return;
    }

    const touchEnd = {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY
    };

    const deltaX = Math.abs(touchEnd.x - touchStartRef.current.x);
    const deltaY = Math.abs(touchEnd.y - touchStartRef.current.y);

    if (deltaX < 10 && deltaY < 10) {
      e.preventDefault();
      e.stopPropagation();
      toggleItem(index);
    }

    touchStartRef.current = null;
  };

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Frequently asked questions.</h2>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <div 
                className="faq-question"
                onClick={() => toggleItem(index)}
                onTouchStart={handleTouchStart}
                onTouchEnd={(e) => handleTouchEnd(e, index)}
              >
                <span>{item.question}</span>
                <span className={`faq-icon ${openItems.includes(index) ? 'open' : ''}`}>
                  +
                </span>
              </div>
              <div className={`faq-answer ${openItems.includes(index) ? 'open' : ''}`}>
                <div className="faq-answer-content">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;