"use client";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export default function AccordionDemo() {
  const data = [
    { title: "Is it accessible", content: "Yes, it is accessible" },
    { title: "Is it static", content: "Yes, it is static" },
    { title: "Is it fast", content: "Yes, it is fast" },
  ];

  return (
    <div className="max-w-lg mx-auto ">
      <Accordion.Root type="single" collapsible  className="w-full focus-within:ring-1 focus-within:ring-teal-400 bg-gray-100 rounded-md shadow-lg m-20 p-6">
        {data.map((item: any, index) => (
          <Accordion.Item key={index} value={`item-${index}`}>
            <Accordion.Header>
              <Accordion.Trigger className="flex justify-between items-center w-full h-8 group data-[state=open]:border-b-2">
                <h3 className="text-gray-800 font-semibold text-base">
                  {item.title}
                </h3>
                <ChevronDownIcon className="group-data-[state=open]:rotate-180 transition-all duration-300 ease-in-out" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="data-[state=open]:bg-gray-200 rounded-md px-2 mt-2">
              <p className="text-sm text-gray-600 py-4">
                {item.content}
              </p>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
}
