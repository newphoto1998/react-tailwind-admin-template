import Faq from "@/components/home/Faq"
import { Container } from "@/components/shared/main/Container"
import { SectionTitle } from "@/components/shared/main/SectionTitle"
import { useState } from "react"
import { useEffect } from "react"

interface PricingPlan {
  name: string
  price: {
    monthly: number
    yearly: number
  }
  description: string
  features: string[]
  isFeatured?: boolean
}

export default function Pricing() {

  useEffect(() => {
    document.title = "Pricing | WindReact"
  }, [])

  const [isYearly, setIsYearly] = useState(false)

  const plans: PricingPlan[] = [
    {
      name: "Basic",
      price: {
        monthly: 29,
        yearly: 290,
      },
      description: "Perfect for startups and small businesses",
      features: [
        "Up to 5 team members",
        "Basic analytics",
        "24/7 Email support",
        "API Access",
      ],
    },
    {
      name: "Pro",
      price: {
        monthly: 99,
        yearly: 990,
      },
      description: "Best for growing companies",
      features: [
        "Up to 20 team members",
        "Advanced analytics",
        "24/7 Priority support",
        "API Access",
        "Custom integrations",
        "Advanced security",
      ],
      isFeatured: true,
    },
    {
      name: "Enterprise",
      price: {
        monthly: 299,
        yearly: 2990,
      },
      description: "For large-scale enterprises",
      features: [
        "Unlimited team members",
        "Advanced analytics & reporting",
        "24/7 Phone support",
        "Unlimited API Access",
        "Custom integrations",
        "Enterprise security",
        "Custom contracts",
      ],
    },
  ]

  return (
    <div className="max-w-screen-xl mx-auto">
      <Container>
        <div className="flex flex-col items-center">
            <SectionTitle
              align="center"
              preTitle="Pricing"
              title="Choose the perfect plan for your needs"
            >
              Simple, transparent pricing that grows with you. Try any plan free for 30 days.
            </SectionTitle>

            {/* Billing Toggle */}
            <div className="flex items-center mt-8 space-x-4">
              <span className={`text-lg ${!isYearly ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>
                Monthly
              </span>
              <button
                type="button"
                className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-300 dark:bg-gray-700 transition-colors duration-200 ease-in-out focus:outline-none"
                role="switch"
                aria-checked={isYearly}
                onClick={() => setIsYearly(!isYearly)}
              >
                <span
                  aria-hidden="true"
                  className={`${
                    isYearly ? 'translate-x-5' : 'translate-x-0'
                  } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
                />
              </button>
              <span className={`text-lg ${isYearly ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>
                Yearly <span className="text-indigo-600 dark:text-indigo-400">(Save 20%)</span>
              </span>
            </div>

            {/* Pricing Cards */}
            <div className="grid gap-8 mt-12 lg:grid-cols-3">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`flex flex-col p-8 ${
                    plan.isFeatured
                      ? 'bg-indigo-600 dark:bg-indigo-900 text-white rounded-2xl lg:scale-110'
                      : 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl'
                  }`}
                >
                  <h3 className={`text-2xl font-semibold ${plan.isFeatured ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                    {plan.name}
                  </h3>
                  <p className={`mt-4 text-sm ${plan.isFeatured ? 'text-indigo-100' : 'text-gray-600 dark:text-gray-400'}`}>
                    {plan.description}
                  </p>
                  <div className="my-8">
                    <span className={`text-5xl font-bold ${plan.isFeatured ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                      ${isYearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    <span className={plan.isFeatured ? 'text-indigo-100' : 'text-gray-600 dark:text-gray-400'}>
                      /{isYearly ? 'year' : 'month'}
                    </span>
                  </div>
                  <ul className="flex-1 space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <svg
                          className={`w-5 h-5 mr-2 ${plan.isFeatured ? 'text-indigo-100' : 'text-indigo-600 dark:text-indigo-400'}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className={plan.isFeatured ? 'text-indigo-100' : 'text-gray-600 dark:text-gray-400'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`mt-8 px-6 py-3 text-center text-lg font-medium rounded-lg transition-colors ${
                      plan.isFeatured
                        ? 'bg-white text-indigo-600 hover:bg-gray-100'
                        : 'bg-indigo-600 dark:bg-indigo-500 text-white hover:bg-indigo-700 dark:hover:bg-indigo-600'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>

            {/* FAQ Section */}
            <div className="mt-20">
              <SectionTitle
                preTitle=""
                title="Frequently asked questions"
                align="center"
              >
                Have a question that's not answered here? Contact our support team.
              </SectionTitle>
            </div>

            {/* FAQ */}
            <Faq />
          </div>
        </Container>
    </div>
  )
}