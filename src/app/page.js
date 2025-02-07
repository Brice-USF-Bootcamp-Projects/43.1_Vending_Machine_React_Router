// src/app/page.js

import VendingMachineList from "./components/VendingMachine/VendingMachineList";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Vending Machine App</h1>
      <VendingMachineList />
    </div>
  );
}
