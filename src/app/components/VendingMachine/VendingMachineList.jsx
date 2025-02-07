// src/app/components/VendingMachine/VendingMachineList.jsx

"use client";

import Link from "next/link";

const VendingMachineList = () => {
  return (
    <div className="text-center p-6">
      <h1 className="text-3xl font-bold">Welcome to the Vending Machine!</h1>
      <p className="text-lg mt-2">Choose a snack:</p>
      <ul className="mt-4 space-y-2">
        <li>
          <Link href="/snacks/coke" className="text-blue-500 hover:underline text-xl">
            Coke
          </Link>
        </li>
        <li>
          <Link href="/snacks/lays" className="text-blue-500 hover:underline text-xl">
            Lays Chips
          </Link>
        </li>
        <li>
          <Link href="/snacks/snickers" className="text-blue-500 hover:underline text-xl">
            Snickers
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default VendingMachineList;

