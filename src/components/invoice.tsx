import React from "react";
import Spacer from "./spacer";
import Image from "next/image";

function Invoice() {
  const today = new Date().toDateString();
  return (
    <div className="text-left border w-screen p-8">
      {/* My address */}
      <p className="font-bold">37 Orpington St. Ashfield 2131</p>
      <p className="font-bold">Sydney Australia</p>
      <Spacer />
      {/* Client Address  ---- Date */}
      <div className="flex justify-between">
        <p>
          Jimali McKinnon <br />
          G02 / 80 Regent St. <br />
          Kogarah. NSW. 2217
        </p>
        <p>{today}</p>
      </div>
      <Spacer />
      {/* Invoice Number */}
      <p className="font-bold"> INVOICE DR0046</p>
      <Spacer />
      {/* Table details */}
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3">Service</th>
            <th className="px-6 py-3">Unit price</th>
            <th className="px-6 py-3">Hours</th>
            <th className="px-6 py-3">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-3">Cleaning Services Feb 17</td>
            <td className="px-6 py-3">40</td>
            <td className="px-6 py-3">3</td>
            <td className="px-6 py-3">120</td>
          </tr>
        </tbody>
      </table>
      <Spacer />
      {/* Custom Message */}
      <p>
        Please make the transfer of the $120 to my bank account with the
        following data:
      </p>
      <Spacer />

      {/* Bank details */}
      <div>
        <p>
          <span className="inline-block min-w-40">Name: </span> Juan Daniel Rios
          Ramirez
        </p>
        <p>
          <span className="inline-block min-w-40">Phone: </span> +61 420607905
        </p>
      </div>
      <Spacer />
      {/* Sign */}
      <p>Thanks,</p>
      <Spacer />
      <Image src="/JDRRSign.png" alt="sign" width={200} height={100} />
      <p>Juan Daniel Rios Ramirez</p>
      <p className="font-bold">CC 1024570528</p>
    </div>
  );
}

export default Invoice;
