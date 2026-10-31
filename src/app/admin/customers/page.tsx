"use client";

import React from "react";
import { Users, MapPin, Mail, ShoppingBag } from "lucide-react";

export default function AdminCustomersPage() {
  const customers = [
    {
      id: "cust-1",
      name: "Rohan Malhotra",
      email: "rohan.malhotra@sample.in",
      location: "Shimla, HP",
      totalOrders: 3,
      totalSpent: 8940,
      joined: "Aug 2025",
    },
    {
      id: "cust-2",
      name: "Pooja Varma",
      email: "pooja.varma@demo.sample",
      location: "Chandigarh",
      totalOrders: 2,
      totalSpent: 4280,
      joined: "Sep 2025",
    },
    {
      id: "cust-3",
      name: "Megha Singhal (Acme Corp)",
      email: "megha@acme.example",
      location: "Gurugram, NCR",
      totalOrders: 1,
      totalSpent: 18500,
      joined: "Oct 2026",
    },
  ];

  return (
    <div className="space-y-6 text-xs">
      <div>
        <h1 className="font-serif text-2xl font-bold text-[#123D32]">Registered Customers</h1>
        <p className="text-neutral-500 mt-0.5">Directory of conscious consumers supporting Himachali makers.</p>
      </div>

      <div className="border border-[#E5DED2] rounded-2xl overflow-hidden bg-white shadow-xs">
        <table className="w-full text-left">
          <thead className="bg-[#F7F3EB] border-b border-[#E5DED2] text-neutral-500 uppercase tracking-wider text-[10px]">
            <tr>
              <th className="py-3 px-4">Customer</th>
              <th className="py-3 px-4">Location</th>
              <th className="py-3 px-4">Orders Placed</th>
              <th className="py-3 px-4">Lifetime Spent</th>
              <th className="py-3 px-4">Member Since</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {customers.map((c) => (
              <tr key={c.id} className="hover:bg-neutral-50">
                <td className="py-3.5 px-4 font-bold text-[#17241F]">
                  <p>{c.name}</p>
                  <p className="text-[10px] text-neutral-400 font-normal">{c.email}</p>
                </td>
                <td className="py-3.5 px-4 text-neutral-600">{c.location}</td>
                <td className="py-3.5 px-4 font-semibold text-neutral-700">{c.totalOrders}</td>
                <td className="py-3.5 px-4 font-bold text-[#123D32]">₹{c.totalSpent.toLocaleString("en-IN")}</td>
                <td className="py-3.5 px-4 text-neutral-500 font-mono">{c.joined}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

