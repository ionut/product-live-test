
import React from "react";
import { Packs } from "../ui/packs-page/Packs";
import { Header } from "../ui/packs-page/Header";
import { Footer } from "../ui/packs-page/Footer";

export default function Page({ searchParams }) {

  return (
    <section className="bg-mainSection bg-deep-pink background-main">
      <div className="container py-20 flex flex-col gap-[60px]">
        <Header />
        <Packs searchParams={searchParams} />
        <Footer />
      </div>
    </section>
  );
}
