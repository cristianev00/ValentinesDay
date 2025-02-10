import ResponseSection from "@/components/buttons";
import ConfettiComponent from "@/components/confetti";
import Footer from "@/components/footer";
import Header from "@/components/header";
import PhoneMockup from "@/components/phone-mockup";


export default function InvitationPage() {
  return (
    <div className="max-h-screen flex flex-col relative overflow-hidden overflow-y-auto">
      <Header />
      <ConfettiComponent />

      <main className="flex-grow container mx-auto p-4 pt-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          <div className="flex justify-center sm:justify-end">
            <PhoneMockup />
          </div>
          <div className="flex flex-col justify-center text-center sm:text-left px-4">
            <h1 className="text-4xl font-extrabold text-pink-600 mb-4 font-romantic font-karla text-center">
              Will You Be My Valentine?
            </h1>
            <ResponseSection />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}