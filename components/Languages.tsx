import React from "react";
import { FaPython } from "react-icons/fa";

export default function Languages() {
  const amount = 12;
  return (
    <div className="grid grid-cols-4 gap-4">
      {Array.from({ length: amount }).map((_, index) => (
        <Boxes key={index} />
      ))}
    </div>
  );
}

const Boxes = () => {
  return (
    <div className="w-full h-full max-h-32 p-4 shadow-md rounded-lg border flex items-center justify-center">
      <FaPython size={24} />
    </div>
  );
};
