import React from "react";

export default function CustomersIcons() {
  return (
    <div>
      <ul className=" grid grid-cols-2 gap-5 xl:grid-cols-3">
        <li className=" flex h-[200px] flex-col items-center justify-center bg-backgroundColorSecondary px-5 py-4">
          <div className="text-center">
            <h3 className="mb-2 text-4xl font-bold text-subtitleColor">5+</h3>
            <p className="mb-1 text-lg font-medium text-white">Years</p>
            <p className="text-sm text-themeDarkshade">Building & Innovating</p>
          </div>
        </li>
        <li className="flex h-[200px] flex-col items-center justify-center bg-backgroundColorSecondary px-5 py-4">
          <div className="text-center">
            <h3 className="mb-2 text-4xl font-bold text-subtitleColor">6+</h3>
            <p className="mb-1 text-lg font-medium text-white">AI Tools</p>
            <p className="text-sm text-themeDarkshade">
              Researched & Integrated
            </p>
          </div>
        </li>
        <li className="flex h-[200px] flex-col items-center justify-center bg-backgroundColorSecondary px-5 py-4">
          <div className="text-center">
            <h3 className="mb-2 text-4xl font-bold text-subtitleColor">20+</h3>
            <p className="mb-1 text-lg font-medium text-white">Projects</p>
            <p className="text-sm text-themeDarkshade">Delivered & Launched</p>
          </div>
        </li>
        <li className="flex h-[200px] flex-col items-center justify-center bg-backgroundColorSecondary px-5 py-4">
          <div className="text-center">
            <h3 className="mb-2 text-4xl font-bold text-subtitleColor">20+</h3>
            <p className="mb-1 text-lg font-medium text-white">Technologies</p>
            <p className="text-sm text-themeDarkshade">Mastered & Applied</p>
          </div>
        </li>
        <li className="flex h-[200px] flex-col items-center justify-center bg-backgroundColorSecondary px-5 py-4">
          <div className="text-center">
            <h3 className="mb-2 text-4xl font-bold text-subtitleColor">2</h3>
            <p className="mb-1 text-lg font-medium text-white">Ventures</p>
            <p className="text-sm text-themeDarkshade">Founded & Leading</p>
          </div>
        </li>
        <li className="flex h-[200px] flex-col items-center justify-center bg-backgroundColorSecondary px-5 py-4">
          <div className="text-center">
            <h3 className="mb-2 text-4xl font-bold text-subtitleColor">∞</h3>
            <p className="mb-1 text-lg font-medium text-white">Learning</p>
            <p className="text-sm text-themeDarkshade">Continuous Growth</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
