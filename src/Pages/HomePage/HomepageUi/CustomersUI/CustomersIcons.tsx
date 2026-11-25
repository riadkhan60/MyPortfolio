import React from "react";

const numbers = [
  { value: "800+", label: "Businesses", note: "Signed up for our first AI tool" },
  { value: "150+", label: "Paying shops", note: "Kept paying for over a year" },
  { value: "6", label: "Products", note: "In the Qbexel ecosystem" },
  { value: "4", label: "Live products", note: "Used by real shops today" },
  {
    value: "4",
    label: "Programs & grants",
    note: "NVIDIA Inception, NSU Startups Next, ElevenLabs, Anthropic",
  },
  { value: "2024", label: "Qbexel founded", note: "September, in Dhaka" },
];

export default function CustomersIcons() {
  return (
    <div>
      <ul className=" grid grid-cols-2 gap-5 xl:grid-cols-3">
        {numbers.map((item) => (
          <li
            key={item.label}
            className="flex h-[200px] flex-col items-center justify-center bg-backgroundColorSecondary px-5 py-4"
          >
            <div className="text-center">
              <h3 className="mb-2 text-4xl font-bold text-subtitleColor">
                {item.value}
              </h3>
              <p className="mb-1 text-lg font-medium text-white">
                {item.label}
              </p>
              <p className="text-sm text-themeDarkshade">{item.note}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
