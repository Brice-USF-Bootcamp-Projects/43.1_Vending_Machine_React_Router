// src/app/snacks/[snack]/page.jsx 


"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

const SnackPage = () => {
  const { snack } = useParams(); // Get snack name from the URL

  // Define snack details
  const snacks = {
    coke: { name: "Coke", description: "A refreshing soft drink!", image: "/images/coke.png" },
    lays: { name: "Lays Chips", description: "Crispy and delicious potato chips!", image: "/images/lays.png" },
    snickers: { name: "Snickers", description: "A satisfying chocolate bar!", image: "/images/snickers.png" }
  };

  const snackData = snacks[snack] || { name: "Unknown Snack", description: "This snack is not available!", image: "/images/unknown.png" };

  return (
    <div className="text-center p-6">
      <h1 className="text-3xl font-bold">{snackData.name}</h1>
      <p className="text-lg mt-2">{snackData.description}</p>
      <img src={snackData.image} alt={snackData.name} className="mx-auto my-4 w-40 h-40 object-contain" />
      <Link href="/" className="text-blue-500 hover:underline mt-4 block">
        Go Back to Vending Machine
      </Link>
    </div>
  );
};

export default SnackPage;


