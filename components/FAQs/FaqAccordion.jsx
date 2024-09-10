import { useState } from 'react';

const FaqAccordion = () => {
  const faqData = [
    {
      question: 'What is the total cost of attendance at this college?',
      answer: 'Next.js is a React framework for building server-side rendered and statically generated websites.'
    },
    {
      question: 'Are there any scholarship opportunities available to students?',
      answer: 'Tailwind CSS is a utility-first CSS framework for rapidly building custom designs without writing CSS from scratch.'
    },
    {
      question: 'How many seats are available per branch at this college?',
      answer: 'You can install both Next.js and Tailwind CSS using npm or yarn. Check the official documentation for more details.'
    },
    {
      question: 'How is the distribution of seats among different branches decided?',
      answer: 'You can install both Next.js and Tailwind CSS using npm or yarn. Check the official documentation for more details.'
    },
    {
      question: 'Is it possible to change your branch after admission if there are seats available?',
      answer: 'You can install both Next.js and Tailwind CSS using npm or yarn. Check the official documentation for more details.'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="max-w-2xl p-4   mx-auto">
      {faqData.map((item, index) => (
        <div
          key={index}
          className="border-gradient border-2  m-2 p-8 rounded-md py-4 transition duration-500 ease-in-out  bg-gray-200"
        >
          <button
            className="flex items-center justify-between w-full focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            <span className="font-medium font-semibold text-xl text-gray-600  ">{item.question}</span>
            <svg
              className={`${
                activeIndex === index ? 'transform rotate-180' : ''
              } w-5 h-5 font-bold     `}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M6.293 6.293a1 1 0 0 1 1.414 0L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div
            className={`${
              activeIndex === index ? 'block' : 'hidden'
            } mt-4 text-gray-700`}
          >
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
