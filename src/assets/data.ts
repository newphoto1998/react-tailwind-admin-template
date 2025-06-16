import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid"

import benefitOneImg from "/images/hero3.webp"
import benefitTwoImg from "/images/hero2.webp"

const benefitOne = {
  title: "Highlight your benefits",
  desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Understand your customers",
      desc: "Then explain the first point breifly in one or two lines.",
      icon: FaceSmileIcon as React.ComponentType,
    },
    {
      title: "Improve acquisition",
      desc: "Here you can add the next benefit point.",
      icon: ChartBarSquareIcon as React.ComponentType,
    },
    {
      title: "Drive customer retention",
      desc: "This will be your last bullet point in this section.",
      icon: CursorArrowRaysIcon as React.ComponentType,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "WindReact is designed as a mobile first responsive template.",
      icon: DevicePhoneMobileIcon as React.ComponentType,
    },
    {
      title: "Powered by React 19 & Tailwind CSS 4.0",
      desc: "This template is powered by latest technologies and tools.",
      icon: AdjustmentsHorizontalIcon as React.ComponentType,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: SunIcon as React.ComponentType,
    },
  ],
};


export {benefitOne, benefitTwo}
