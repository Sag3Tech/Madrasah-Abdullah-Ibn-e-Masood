import React from "react";

import { Header } from "@/components/header";

const page = () => {
  return (
    <main>
      <Header />

      <div className="h-screen flex items-center justify-center relative bg-[url(/hero2.jpg)] bg-cover bg-no-repeat">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 w-[600px] bg-white rounded-2xl shadow-2xl p-8 flex flex-col gap-12">
          <h1 className="text-4xl font-bold text-center">
            Donation Details
          </h1>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <h2 className="text-lg text-black font-semibold">Bank:</h2>
              <p className="text-base text-black/70 font-medium">Allied Bank</p>
            </div>

            <div className="flex items-center gap-2">
              <h2 className="text-lg text-black font-semibold">Name:</h2>
              <p className="text-base text-black/70 font-medium">
                MADRASA ABDULLAH BIN MASOOD
              </p>
            </div>

            <div className="flex items-center gap-2">
              <h2 className="text-lg text-black font-semibold">
                Account Number:
              </h2>
              <p className="text-base text-black/70 font-medium">
                PK60ABPA0010011794630011
              </p>
            </div>

            <div className="flex items-center gap-2">
              <h2 className="text-lg text-black font-semibold">Branch:</h2>
              <p className="text-base text-black/70 font-medium">
                Buffer Zone Branch, Karachi Pakistan
              </p>
            </div>

            <div className="flex items-center gap-2">
              <h2 className="text-lg text-black font-semibold">Branch Code:</h2>
              <p className="text-base text-black/70 font-medium">0140719</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-green-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 مدرسہ عبداللہ بن مسعود. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
};

export default page;
