"use client";

import * as React from "react";
import {
  HangingMandala,
  OrnateFrame,
  WeddingRings,
  WatercolorFloral,
} from "../decorations";

/** Ornamental flourish image used above & below the date. */
function OrnamentImage({ className = "" }: { className?: string }) {
  return (
    <img
      src="/images/ornament-flourish.png"
      alt=""
      aria-hidden="true"
      className={className}
    />
  );
}

export function InvitationSection() {
  return (
    <section
      id="invitation"
      className="relative w-full overflow-hidden bg-cream px-5 py-16"
    >
      {/* side watercolor florals */}
      <div className="pointer-events-none absolute left-0 top-1/4 z-0 w-32 opacity-90">
        <WatercolorFloral variant="left" className="h-auto w-full" />
      </div>
      <div className="pointer-events-none absolute right-0 top-1/3 z-0 w-32 opacity-90">
        <WatercolorFloral variant="right" className="h-auto w-full" />
      </div>

      {/* top hanging ornament (left only) */}
      <div className="pointer-events-none absolute -top-1 left-2 z-10">
        <HangingMandala color="#e88a7d" size={60} />
      </div>

      <div className="relative z-10 mx-auto max-w-md">
        {/* intro line */}
        <p className="mb-8 text-center font-hand text-xl leading-snug text-maroon">
          Kami mengundang kamu untuk datang dalam acara pernikahan kami.
        </p>

        {/* couple frames */}
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col items-center">
            <OrnateFrame className="h-[230px] w-full">
              { }
              <img
                src="/images/groom.png"
                alt="Adhy"
                className="h-full w-full object-cover"
              />
            </OrnateFrame>
            <h3 className="mt-3 font-hand text-3xl font-bold text-maroon">Adhy</h3>
            <p className="mt-1 text-center font-hand text-base leading-tight text-navy">
              Putra dari bapak ...
              <br />
              dan ibu ...
            </p>
          </div>

          <div className="flex flex-col items-center">
            <OrnateFrame className="h-[230px] w-full" color="#c7a3c4">
              { }
              <img
                src="/images/bride.png"
                alt="Diska"
                className="h-full w-full object-cover"
              />
            </OrnateFrame>
            <h3 className="mt-3 font-hand text-3xl font-bold text-maroon">Diska</h3>
            <p className="mt-1 text-center font-hand text-base leading-tight text-navy">
              Putri dari bapak ...
              <br />
              dan ibu ...
            </p>
          </div>
        </div>

        {/* ampersand between names (decorative) */}
        <div className="pointer-events-none -mt-1 mb-2 text-center font-display text-4xl text-maroon">
          &amp;
        </div>

        {/* ornament above date */}
        <div className="my-8 flex justify-center">
          <OrnamentImage className="h-10 w-full max-w-[280px] object-contain" />
        </div>

        {/* date */}
        <p className="text-center font-hand text-2xl text-maroon">
          20 Desember 2026
        </p>

        {/* event times with wedding rings */}
        <div className="relative mt-8 grid grid-cols-2 items-center gap-4">
          <div className="text-center">
            <h4 className="font-hand text-2xl font-bold text-maroon">Akad</h4>
            <p className="mt-1 font-hand text-xl text-navy">08.00 WIB</p>
          </div>
          <div className="text-center">
            <h4 className="font-hand text-2xl font-bold text-maroon">Resepsi</h4>
            <p className="mt-1 font-hand text-xl text-navy">11.00 WIB</p>
          </div>
          {/* center rings */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <WeddingRings className="h-16 w-24" />
          </div>
        </div>

        {/* ornament below event times */}
        <div className="mt-8 flex justify-center">
          <OrnamentImage className="h-10 w-full max-w-[280px] object-contain" />
        </div>
      </div>
    </section>
  );
}
