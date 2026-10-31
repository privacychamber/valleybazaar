"use client";

import React, { useState } from "react";
import { LifeBuoy, Send, MessageSquare } from "lucide-react";
import { useDemo } from "@/context/DemoContext";

export default function SellerSupportPage() {
  const { showNotification } = useDemo();
  const [ticketSubject, setTicketSubject] = useState("");
  const [ticketBody, setTicketBody] = useState("");

  const handleTicket = (e: React.FormEvent) => {
    e.preventDefault();
    showNotification("Support ticket lodged with Valley Bazaar seller desk.");
    setTicketSubject("");
    setTicketBody("");
  };

  return (
    <div className="space-y-6 text-xs">
      <div>
        <h1 className="font-serif text-2xl font-bold text-[#123D32]">Artisan Seller Help Desk</h1>
        <p className="text-neutral-500 mt-0.5">Assistance with GI verification, courier delays, or settlements.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <form onSubmit={handleTicket} className="md:col-span-7 bg-white p-6 rounded-2xl border border-[#E5DED2] space-y-4">
          <h2 className="font-serif text-base font-bold text-[#123D32]">Create New Support Case</h2>
          <div>
            <label className="block font-semibold text-neutral-700 mb-1">Subject</label>
            <input
              type="text"
              required
              placeholder="e.g. Courier delay due to snow on Jalori Pass"
              value={ticketSubject}
              onChange={(e) => setTicketSubject(e.target.value)}
              className="w-full bg-[#F7F3EB] rounded-xl px-3.5 py-2 border border-[#E5DED2] focus:outline-none focus:border-[#123D32]"
            />
          </div>
          <div>
            <label className="block font-semibold text-neutral-700 mb-1">Details</label>
            <textarea
              rows={4}
              required
              placeholder="Describe the issue with order or store configuration..."
              value={ticketBody}
              onChange={(e) => setTicketBody(e.target.value)}
              className="w-full bg-[#F7F3EB] rounded-xl px-3.5 py-2 border border-[#E5DED2] focus:outline-none focus:border-[#123D32]"
            />
          </div>
          <button
            type="submit"
            className="bg-[#123D32] hover:bg-[#0B2923] text-white px-5 py-2.5 rounded-xl font-bold transition-colors flex items-center gap-2"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Submit Ticket</span>
          </button>
        </form>

        <div className="md:col-span-5 bg-[#eff5ec] p-6 rounded-2xl border border-[#DDE6D8] space-y-3">
          <h3 className="font-serif text-base font-bold text-[#123D32]">Valley Coordinator Direct Line</h3>
          <p className="text-neutral-600 leading-relaxed">
            Every cooperative and producer is assigned a dedicated mountain coordinator in Shimla and Dharamsala.
          </p>
          <p className="font-semibold text-[#123D32]">Phone: +91 177 280 4401</p>
          <p className="text-neutral-500 text-[11px]">Mon to Sat • 9:00 AM to 6:00 PM</p>
        </div>
      </div>
    </div>
  );
}

