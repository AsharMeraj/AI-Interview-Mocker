import React from "react";
import Header from "./_components/Header";

function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <Header />
      <main className="mx-5 md:mx-20 lg:mx-36">
        {children}
      </main>
    </section>
  );
}

export default DashboardLayout