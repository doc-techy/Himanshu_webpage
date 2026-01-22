import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 w-full border-b border-[#e6e3df] bg-white shadow-sm z-50">
      <div className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between md:gap-8">
          {/* Logo and Title */}
          <Link href="/" className="flex items-center gap-3 md:gap-4 hover:opacity-90 transition-opacity">
            <Image
              src="/images/logo.gif"
              alt="Recover Clinic Logo"
              width={64}
              height={64}
              className="h-12 w-12 md:h-14 md:w-14 flex-shrink-0 object-contain"
              priority
              unoptimized
            />
            <div className="flex flex-col leading-tight">
              <div className="text-base font-bold tracking-wide text-[#0b6f66] md:text-lg lg:text-xl">
                RECOVER CLINIC
              </div>
              <div className="text-[10px] font-semibold uppercase tracking-wide text-[#0b6f66]/80 md:text-xs">
                ROBOTIC SURGERY CENTER &amp; LIMB RECONSTRUCTION
              </div>
            </div>
          </Link>
          
          {/* Navigation */}
          <nav className="flex flex-wrap items-center gap-3 md:gap-4">
            <a 
              href="/#home" 
              className="px-4 py-2 text-sm font-semibold text-[#2b4c56] rounded-md hover:text-[#0b6f66] hover:bg-[#0b6f66]/5 transition-all duration-200 whitespace-nowrap"
            >
              Home
            </a>
            <a 
              href="/#about" 
              className="px-4 py-2 text-sm font-semibold text-[#2b4c56] rounded-md hover:text-[#0b6f66] hover:bg-[#0b6f66]/5 transition-all duration-200 whitespace-nowrap"
            >
              About Dr. Singh
            </a>
            <Link 
              href="/services" 
              className="px-4 py-2 text-sm font-semibold text-[#2b4c56] rounded-md hover:text-[#0b6f66] hover:bg-[#0b6f66]/5 transition-all duration-200 whitespace-nowrap"
            >
              Services
            </Link>
            <a 
              href="/#contact" 
              className="px-5 py-2.5 text-sm font-bold text-white bg-[#d5a028] rounded-md hover:bg-[#c08f1f] shadow-sm transition-all duration-200 whitespace-nowrap"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
