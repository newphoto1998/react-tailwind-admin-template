import { Container } from "@/components/shared/main/Container"
import { useState } from "react"

interface FaqItem {
  question: string
  answer: string
}

const faqData: FaqItem[] = [
  {
    question: "Is this template completely free to use?",
    answer: "Yes, this template is completely free to use.",
  },
  {
    question: "Can I use it in a commercial project?",
    answer: "Yes, this template is licensed under MIT license.",
  },
  {
    question: "What is your refund policy? ",
    answer: "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
  },
  {
    question: "Do you offer technical support? ",
    answer: "No, we don't offer technical support for free downloads. Please purchase a support plan to get 6 months of support.",
  },
]

export default function Faq() {
  return (
    <Container>
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqData.map((item, index) => (
          <FaqItem key={index} item={item} />
        ))}
      </div>
    </Container>
  )
}

function FaqItem({ item }: { item: FaqItem }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mb-5">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none bg-gray-200 dark:bg-gray-800 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
          {item.question}
        </p>
        <div className="flex items-center justify-center w-8 h-8 border rounded-full border-gray-300 dark:border-gray-600">
          <svg
            viewBox="0 0 24 24"
            className={`w-3 text-gray-600 dark:text-gray-400 transform transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="p-4 pt-4">
          <p className="text-gray-600 dark:text-gray-400">{item.answer}</p>
        </div>
      )}
    </div>
  )
}
