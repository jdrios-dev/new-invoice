"use client";
import Invoice from "@/components/invoice";
import { usePDF } from "react-to-pdf";

export default function Home() {
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <div ref={targetRef} className="p-4">
        <Invoice />
      </div>
      <button onClick={() => toPDF()}>Download PDF</button>
    </main>
  );
}
