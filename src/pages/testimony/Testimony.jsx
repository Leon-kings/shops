import React from 'react'
React;
const Testimony = () => {
  return (
    <div>
        <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <img
            alt=""
            src="https://tailwindui.com/plus/img/logos/workcation-logo-indigo-600.svg"
            className="mx-auto h-12"
          />
          <figure className="mt-10">
            <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
              <p>
                “We thank LD Solutions for the wonderful job in helping us develop our program. Everyone was professional, excellent and hard working”
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                alt=""
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBXP2aVSrSo0SREvW2j66JA2LfVK6pYkIf5g&s"
                className="mx-auto size-16"
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">Leon</div>
                <svg
                  width={3}
                  height={3}
                  viewBox="0 0 2 2"
                  aria-hidden="true"
                  className="fill-gray-900"
                >
                  <circle r={1} cx={1} cy={1} />
                </svg>
                <div className="text-gray-600">CEO of LD</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </div>
  )
}

export default Testimony