import React from 'react'
React
import { FingerPrintIcon, ShoppingCartIcon, ServerIcon, CodeBracketIcon} from '@heroicons/react/24/outline'
const features = [
  {
    name: 'Bought Products',
    description:
      'LD Computer Store Rwanda Limited is a Full-Service Technology Services Provider also called the Top IT Consulting Company in Kigali, Rwanda.',
    icon: ShoppingCartIcon,
  },
  {
    name: 'Code Support',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: CodeBracketIcon,
  },
  {
    name: 'IT Support',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: ServerIcon,
  },
  {
    name: 'Advanced Security',
    description:
      'We Maintain Your Computer With Secure Means and Replace with Proper Accessories ',
    icon: FingerPrintIcon,
  },
]

export default function Services() {
  return (
  <>
  <div className="title"></div>
    <div className="bg-white sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">SERVICES</h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            LD SHOP
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            LD is Mostly Happy To Serve You Better Electronics Appliances With Best Quality From Dubai , and Also Allow And Provide Support In IT
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      {/*  */}

    </div>
    <div className="title"></div>
    </>
  )
}

