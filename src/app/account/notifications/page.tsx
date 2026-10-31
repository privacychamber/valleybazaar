import React from "react";
import { Bell, Sparkles, Truck, CheckCircle2 } from "lucide-react";

export default function AccountNotificationsPage() {
  const notifications = [
    {
      id: "n1",
      title: "Sub-order Dispatched from Naggar Hub",
      time: "2 hours ago",
      desc: "Beas Valley Weavers Cooperative has packed and dispatched your Kullu Shawl via Delhivery Surface.",
      icon: Truck,
    },
    {
      id: "n2",
      title: "First Flush Kangra Tea In Stock",
      time: "Yesterday",
      desc: "Palampur estate reserve April harvest is now available for limited reservation.",
      icon: Sparkles,
    },
    {
      id: "n3",
      title: "Welcome to Valley Bazaar",
      time: "3 days ago",
      desc: "Your customer account was registered. Thank you for supporting Himachal local economy.",
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-2xl font-bold text-[#123D32]">Notifications</h2>
        <p className="text-xs text-neutral-500 mt-1">Updates on your mountain orders and seasonal releases.</p>
      </div>

      <div className="divide-y divide-neutral-100 text-xs">
        {notifications.map((n) => {
          const Icon = n.icon;
          return (
            <div key={n.id} className="py-4 first:pt-0 last:pb-0 flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-full bg-[#eff5ec] text-[#123D32] flex items-center justify-center shrink-0 mt-0.5">
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="font-bold text-[#17241F]">{n.title}</p>
                  <span className="text-[10px] text-neutral-400">{n.time}</span>
                </div>
                <p className="text-neutral-600 mt-1 leading-relaxed">{n.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

