"use client";

import * as React from "react";
import { CoverSection } from "@/components/wedding/sections/cover";
import { SaveTheDateSection } from "@/components/wedding/sections/save-the-date";
import { InvitationSection } from "@/components/wedding/sections/invitation";
import { GiftSection } from "@/components/wedding/sections/gift";
import { ClosingSection } from "@/components/wedding/sections/closing";

export default function Home() {
  const [opened, setOpened] = React.useState(false);

  const handleOpen = React.useCallback(() => {
    setOpened(true);
    requestAnimationFrame(() => {
      const el = document.getElementById("save-the-date");
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  return (
    <main className="flex min-h-[100svh] w-full flex-col bg-cream">
      <div className="mx-auto w-full max-w-[480px] bg-cream shadow-sm">
        {/* Before opening: show Cover (full screen).
            After opening: hide Cover and reveal the rest. */}
        {!opened ? (
          <CoverSection onOpen={handleOpen} />
        ) : (
          <>
            <SaveTheDateSection />
            <InvitationSection />
            <GiftSection />
            <ClosingSection />
          </>
        )}
      </div>
    </main>
  );
}
