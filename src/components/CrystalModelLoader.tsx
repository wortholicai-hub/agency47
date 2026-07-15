"use client";

import dynamic from "next/dynamic";

const CrystalModel = dynamic(() => import("@/components/CrystalModel"), {
  ssr: false,
});

export default function CrystalModelLoader() {
  return <CrystalModel />;
}
