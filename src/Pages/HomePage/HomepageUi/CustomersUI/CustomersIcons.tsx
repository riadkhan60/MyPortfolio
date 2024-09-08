import React from "react";

export default function CustomersIcons() {
  return (
    <div>
      <ul className=" flex flex-col gap-5  lg:grid lg:grid-cols-2 xl:grid-cols-3">
        <li className=" flex h-[200px] items-center justify-center bg-backgroundColorSecondary px-5 py-4">
          <a href="https://www.birdsvalley.net/ " target="_blank">
            <img
              className="w-[200px] "
              width={200}
              src="/companies/Birds.png"
              alt=""
            />
          </a>
        </li>
        <li className="flex h-[200px] items-center justify-center bg-backgroundColorSecondary px-5 py-4">
          <a href="https://www.perfectcomputerbd.com/" target="_blank">
            <img
              className="w-[200px]"
              width={200}
              src="/companies/Perfect.png"
              alt=""
            />
          </a>
        </li>
        <li className="flex h-[200px] items-center justify-center bg-backgroundColorSecondary px-5 py-4">
          <a href="https://qbexel.com/" target="_blank">
            <img
              className="w-[200px]"
              width={200}
              src="/companies/LogoDark.png"
              alt=""
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
