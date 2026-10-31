import React from "react";
import Link from "next/link";
import { StorefrontHeader } from "@/components/layout/StorefrontHeader";
import { StorefrontFooter } from "@/components/layout/StorefrontFooter";

export default function OurStoryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3EB]">
      <StorefrontHeader />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-16 w-full">
        <span className="text-xs font-bold uppercase tracking-widest text-[#8B7E66]">Heritage & Origins</span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#123D32] mt-2">
          From the Mountain Trails to a Connected Future
        </h1>
        <p className="mt-4 text-sm sm:text-base text-neutral-700 leading-relaxed font-light">
          Centuries of mountain wisdom, sheep transhumance across roaring glacial passes, and generations of loom craft should never be lost to mass industrial uniformity.
        </p>

        <div className="my-10 space-y-6 text-xs sm:text-sm text-neutral-700 leading-relaxed">
          <p>
            The valleys of Himachal Pradesh are home to some of the world’s most refined culinary and textile traditions: the delicate double-sided embroidery of the Chamba Rumal, the golden orthodox flushes of the Kangra tea slopes, the nutrient-dense wild seabuckthorn berries harvested in cold Spiti, and the soft Merino wool shawls of Kullu.
          </p>
          <p>
            Yet for decades, mountain producers were constrained by geography. Tourist season was brief; middlemen captured the bulk of product margins; and counterfeit machine-made goods eroded trust in authentic handlooms.
          </p>
          <p>
            Valley Bazaar was established to restore dignity, ownership, and reach to every mountain producer. By using modern digital infrastructure, we connect conscious consumers across India with the authentic hands shaping these goods.
          </p>
        </div>
      </main>

      <StorefrontFooter />
    </div>
  );
}

