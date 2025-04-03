// // "use client";

// // import React, { useState, useEffect } from "react";
// // import { Button } from "@/components/ui/button";
// // import {
// //   NavigationMenu,
// //   NavigationMenuItem,
// //   NavigationMenuLink,
// //   NavigationMenuList,
// // } from "@/components/ui/navigation-menu";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { Menu, X } from "lucide-react";
// // import { useRouter } from "next/navigation";

// // export const HeaderSection = () => {
// //   const router = useRouter();
// //   const [scrolled, setScrolled] = useState(false);
// //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setScrolled(window.scrollY > 20);
// //     };

// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   // Navigation menu items data with added links
// //   const navItems = [
// //     { label: "Home", href: "/", active: true },
// //     // { label: "About", href: "/about", active: false },
// //     { label: "Our Process", href: "/our-process", active: false },
// //     // { label: "Services", href: "/services", active: false },
// //     { label: "Case Studies", href: "/case-studies", active: false },
// //     // { label: "Build with AI", href: "/ai", active: false },
// //   ];

// //   const toggleMobileMenu = () => {
// //     setMobileMenuOpen(!mobileMenuOpen);
// //   };

// //   return (
// //     <header
// //       className={`fixed top-0 left-2 right-2 z-50 transition-all duration-300 ${
// //         scrolled ? "py-0 top-0" : ""
// //       }`}
// //     >
// //       <div
// //         className={`py-4 relative rounded-[0px_0px_26px_26px] bg-[#f0f0f0] backdrop-blur-[2.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2.5px)_brightness(100%)] overflow-hidden ${
// //           scrolled ? "" : "mx-0"
// //         }`}
// //       >
// //         <div className="flex items-center justify-between h-full px-5">
// //           {/* Desktop Navigation Menu - Hidden on mobile/tablet */}
// //           <div className="hidden lg:block">
// //             <NavigationMenu>
// //               <NavigationMenuList className="flex items-center gap-6">
// //                 {navItems.map((item, index) => (
// //                   <NavigationMenuItem key={index}>
// //                     <Link href={item.href} legacyBehavior passHref>
// //                       <NavigationMenuLink
// //                         className={`relative w-fit font-normal text-[15px] tracking-[-0.30px] leading-[19.5px] whitespace-nowrap cursor-pointer hover:text-black transition-colors ${
// //                           item.active ? "text-[#0f0f0f]" : "text-[#0f0f0fa6]"
// //                         }`}
// //                       >
// //                         {item.label}
// //                       </NavigationMenuLink>
// //                     </Link>
// //                   </NavigationMenuItem>
// //                 ))}
// //               </NavigationMenuList>
// //             </NavigationMenu>
// //           </div>

// //           {/* Logo - Moved to left for tablet view */}
// //           <div className="flex items-center">
// //             <Link href="/">
// //               <img
// //                 src="/assets/AVS Logo.svg"
// //                 alt="Logo"
// //                 width={150}
// //                 height={150}
// //                 className="object-contain"
// //               />
// //             </Link>
// //           </div>

// //           {/* Right side section with button and menu toggle */}
// //           <div className="flex items-center gap-4">
// //             {/* Action Button - Hidden on mobile */}
// //             <Button
// //               onClick={() => router.push("/contact-us")}
// //               className="hidden md:block h-10 !rounded-full font-normal text-white text-[15px] tracking-[-0.30px] leading-[19.5px] bg-[#0f0f0f] hover:bg-gray-800 transition-colors"
// //             >
// //               Get in touch
// //             </Button>

// //             {/* Mobile Menu Toggle - Visible only on tablet and mobile */}
// //             <button
// //               onClick={toggleMobileMenu}
// //               className="lg:hidden flex items-center justify-center"
// //               aria-label="Toggle menu"
// //             >
// //               {mobileMenuOpen ? (
// //                 <X size={24} className="text-gray-900" />
// //               ) : (
// //                 <Menu size={24} className="text-gray-900" />
// //               )}
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Mobile Navigation Menu Overlay */}
// //       <AnimatePresence>
// //         {mobileMenuOpen && (
// //           <motion.div
// //             initial={{ opacity: 0, y: -20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             exit={{ opacity: 0, y: -20 }}
// //             transition={{ duration: 0.3 }}
// //             className="lg:hidden fixed top-20 left-2 right-2 bg-[#f0f0f0] rounded-b-3xl shadow-lg overflow-hidden z-40"
// //           >
// //             <motion.nav
// //               className="flex flex-col p-6"
// //               initial={{ height: 0 }}
// //               animate={{ height: "auto" }}
// //               exit={{ height: 0 }}
// //               transition={{ duration: 0.3 }}
// //             >
// //               {navItems.map((item, index) => (
// //                 <motion.div
// //                   key={index}
// //                   initial={{ opacity: 0, y: -10 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   exit={{ opacity: 0, y: -10 }}
// //                   transition={{ delay: index * 0.05 }}
// //                 >
// //                   <Link
// //                     href={item.href}
// //                     className={`block py-3 px-4 text-lg ${
// //                       item.active
// //                         ? "text-[#0f0f0f] font-medium"
// //                         : "text-[#0f0f0fa6]"
// //                     } hover:bg-gray-200 rounded-lg transition-colors`}
// //                     onClick={() => setMobileMenuOpen(false)}
// //                   >
// //                     {item.label}
// //                   </Link>
// //                 </motion.div>
// //               ))}

// //               <motion.div
// //                 initial={{ opacity: 0, y: -10 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 exit={{ opacity: 0, y: -10 }}
// //                 transition={{ delay: navItems.length * 0.05 }}
// //                 className="mt-6"
// //               >
// //                 <Button
// //                   onClick={() => router.push("/contact-us")}
// //                   className="w-full h-12 rounded-full font-normal text-white text-[15px] tracking-[-0.30px] leading-[19.5px] bg-[#0f0f0f] hover:bg-gray-800 transition-colors"
// //                 >
// //                   Get in touch
// //                 </Button>
// //               </motion.div>
// //             </motion.nav>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </header>
// //   );
// // };


// "use client";

// import React, { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   NavigationMenu,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
// } from "@/components/ui/navigation-menu";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";
// import { usePathname, useRouter } from "next/navigation";

// export const HeaderSection = () => {
//   const router = useRouter();
//   const pathname = usePathname();
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navItems = [
//     { label: "Home", href: "/" },
//     { label: "Our Process", href: "/our-process" },
//     { label: "Case Studies", href: "/case-studies" },
//     { label: "Services", href: "/services" },
//     { label: "Contact", href: "/contact" },
//   ];

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

//   return (
//     <header
//       className={`fixed top-0 left-4 right-4 md:left-8 md:right-8 lg:left-16 lg:right-16 z-50 transition-all duration-300 ${scrolled ? "py-0 top-0" : ""}`}
//     >
//       <div className="py-4 relative rounded-[0px_0px_26px_26px] bg-[#f0f0f0] backdrop-blur-[2.5px] backdrop-brightness-[100%] overflow-hidden mx-auto max-w-[1400px]">
//         <div className="flex items-center justify-between h-full px-6 lg:px-12">
//           {/* Navigation menu - left side for desktop */}
//           <div className="hidden lg:flex flex-1">
//             <NavigationMenu>
//               <NavigationMenuList className="flex items-center gap-8">
//                 {navItems.map((item, index) => (
//                   <NavigationMenuItem key={index}>
//                     <Link href={item.href} legacyBehavior passHref>
//                       <NavigationMenuLink
//                         className={`relative w-fit font-normal text-[15px] tracking-[-0.30px] leading-[19.5px] whitespace-nowrap cursor-pointer hover:text-black transition-colors ${pathname === item.href ? "text-black font-bold" : "text-[#0f0f0fa6]"}`}
//                       >
//                         {item.label}
//                       </NavigationMenuLink>
//                     </Link>
//                   </NavigationMenuItem>
//                 ))}
//               </NavigationMenuList>
//             </NavigationMenu>
//           </div>

//           {/* Logo - centered */}
//           <div className="flex items-center justify-center flex-1 lg:flex-none">
//             <Link href="/">
//               <img
//                 src="/assets/AVS Logo.svg"
//                 alt="Logo"
//                 width={150}
//                 height={150}
//                 className="object-contain"
//               />
//             </Link>
//           </div>

//           {/* Buttons and mobile menu toggle - right side */}
//           <div className="flex items-center justify-end gap-4 flex-1">
//             <Button
//               onClick={() => router.push("/contact-us")}
//               className="hidden md:block h-10 !rounded-full font-normal text-white text-[15px] tracking-[-0.30px] leading-[19.5px] bg-[#0f0f0f] hover:bg-gray-800 transition-colors"
//             >
//               Get in touch
//             </Button>

//             <button
//               onClick={toggleMobileMenu}
//               className="lg:hidden flex items-center justify-center"
//               aria-label="Toggle menu"
//             >
//               {mobileMenuOpen ? (
//                 <X size={24} className="text-gray-900" />
//               ) : (
//                 <Menu size={24} className="text-gray-900" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         <AnimatePresence>
//           {mobileMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               className="lg:hidden absolute top-full left-0 w-full bg-[#f0f0f0] shadow-md p-4"
//             >
//               <nav className="flex flex-col gap-4">
//                 {navItems.map((item, index) => (
//                   <Link key={index} href={item.href} className={`text-[15px] font-normal tracking-[-0.30px] leading-[19.5px] cursor-pointer hover:text-black transition-colors ${pathname === item.href ? "text-black font-bold" : "text-[#0f0f0fa6]"}`}>
//                     {item.label}
//                   </Link>
//                 ))}
//               </nav>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </header>
//   );
// };


"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export const HeaderSection = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Our Process", href: "/our-process" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-4 right-4 md:left-8 md:right-8 lg:left-16 lg:right-16 z-50 transition-all duration-300 ${scrolled ? "py-0 top-0" : ""}`}
    >
      <div className="py-4 relative rounded-[0px_0px_26px_26px] bg-[#f0f0f0] backdrop-blur-[2.5px] overflow-hidden mx-auto max-w-[1400px]">
        <div className="flex items-center justify-between h-full px-6 lg:px-12">
          {/* Navigation menu - left side for desktop */}
          <div className="hidden lg:flex flex-1">
            <NavigationMenu>
              <NavigationMenuList className="flex items-center gap-8">
                {navItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={`relative w-fit font-normal text-[15px] tracking-[-0.30px] leading-[19.5px] whitespace-nowrap cursor-pointer hover:text-black transition-colors ${pathname === item.href ? "text-black font-bold" : "text-[#0f0f0fa6]"}`}
                      >
                        {item.label}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Logo - centered */}
          <div className="flex items-center justify-center flex-1 lg:flex-none">
            <Link href="/">
              <img
                src="/assets/AVS Logo.svg"
                alt="Logo"
                width={150}
                height={150}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Buttons and mobile menu toggle - right side */}
          <div className="flex items-center justify-end gap-4 flex-1">
            <Button
              onClick={() => router.push("/contact-us")}
              className="hidden md:block h-10 !rounded-full font-normal text-white bg-[#0f0f0f] hover:bg-gray-800 transition-colors"
            >
              Get in touch
            </Button>

            <button
              onClick={toggleMobileMenu}
              className="lg:hidden flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} className="text-gray-900" /> : <Menu size={24} className="text-gray-900" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-20 left-4 right-4 bg-[#f0f0f0] rounded-b-3xl shadow-lg overflow-hidden z-40"
          >
            <motion.nav
              className="flex flex-col p-6"
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className={`block py-3 px-4 text-lg ${pathname === item.href ? "text-black font-medium" : "text-[#0f0f0fa6]"} hover:bg-gray-200 rounded-lg transition-colors`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: navItems.length * 0.05 }}
                className="mt-6"
              >
                <Button
                  onClick={() => router.push("/contact-us")}
                  className="w-full h-12 rounded-full font-normal text-white bg-[#0f0f0f] hover:bg-gray-800 transition-colors"
                >
                  Get in touch
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
