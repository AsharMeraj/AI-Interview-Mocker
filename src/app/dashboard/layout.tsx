import React from "react";
import Header from "./_components/Header";
import Footer from "../_homeComponents/Footer";

function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <Header />
      <main className="mx-5 md:mx-20   xl:mx-52">
        {children}
      </main>
    </section>
  );
}

export default DashboardLayout