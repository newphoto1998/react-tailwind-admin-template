import { Container }  from "@/components/shared/main/Container"

import userOneImg from "/images/user1.jpg"
import userTwoImg from "/images/user2.jpg"
import userThreeImg from "/images/user3.jpg"

interface AvatarProps {
  image: string
  name: string
  title: string
}

export default function Testimonials() {
  return (
    <Container>
        <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 dark:bg-gray-800 px-14 rounded-2xl py-14">
            <p className="text-2xl leading-normal text-gray-800 dark:text-gray-200">
              Share a real <Mark>testimonial</Mark>
              that hits some of your benefits from one of your popular customer.
            </p>

            <Avatar
              image={userOneImg}
              name="Sarah Steiner"
              title="VP Sales at Google"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 dark:bg-gray-800 px-14 rounded-2xl py-14">
            <p className="text-2xl leading-normal text-gray-800 dark:text-gray-200">
              Make sure you only pick the <Mark>right sentence</Mark>
              to keep it short and simple.
            </p>

            <Avatar
              image={userTwoImg}
              name="Dylan Ambrose"
              title="Lead marketer at Netflix"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 dark:bg-gray-800 px-14 rounded-2xl py-14 ">
            <p className="text-2xl leading-normal text-gray-800 dark:text-gray-200">
              This is an <Mark>awesome</Mark> landing page template I&apos;ve
              seen. I would use this for anything.
            </p>

            <Avatar
              image={userThreeImg}
              name="Gabrielle Winn"
              title="Co-founder of Acme Inc"
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

function Avatar({ image, name, title }: Readonly<AvatarProps>) {
  return (
      <div className="flex items-center mt-8 space-x-3">
        <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
          <img
            src={image}
            width="40"
            height="40"
            alt="Avatar"
            className="object-contain"
          />
        </div>
        <div>
          <div className="text-lg font-medium text-gray-800 dark:text-gray-200">{name}</div>
          <div className="text-gray-600 dark:text-gray-400">{title}</div>
        </div>
      </div>
    );
  }

function Mark({ children }: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 dark:text-indigo-200 bg-indigo-200 dark:bg-indigo-900 rounded-md ring-indigo-100 dark:ring-indigo-800 ring-4">
        {children}
      </mark>{" "}
    </>
  )
}
