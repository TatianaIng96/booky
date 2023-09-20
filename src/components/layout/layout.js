import NavScrollExample from "@/components/header";
import Footer from "@/components/footer";

export default function Layout({ children }) {
  return (
    <>
      <NavScrollExample />
      <main>{children}</main>
      <Footer />
    </>
  );
}
