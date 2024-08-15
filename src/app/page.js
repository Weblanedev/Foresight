"use client";
import CoreFeatures from "@/components/CoreFeatures";
import CoreFeaturesTwo from "@/components/CoreFeaturesTwo";
import HeroSection from "@/components/HeroSection";
import QualityFeatures from "@/components/QualityFeatures";
import Work from "@/components/Work";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-48">
      <HeroSection />
      <QualityFeatures />
      <CoreFeaturesTwo />
      <Work />
      <CoreFeatures />
    </div>
  );
}
