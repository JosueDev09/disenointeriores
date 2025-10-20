import { useEffect, useState } from "react";

const nav = [
    {
        name: "Inicio",
        href: "/",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        )
    },
    // { 
    //     name: "Habilidades", 
    //     href: "#habilidades", 
    //     icon: (
    //         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    //         </svg>
    //     )
    // },
    {
        name: "Proyectos",
        href: "/projects",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
        )
    },
    // {
    //     name: "CV",
    //     href: "/cv",
    //     icon: (
    //         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    //         </svg>
    //     )
    // },
    {
        name: "Contacto",
        href: "/contact",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        )
    },
];

export default function Menu() {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScroll(true);

            } else {
                setScroll(false);
            }

        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Función para scroll smooth
    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        // Solo aplicar scroll smooth para enlaces internos (que empiezan con #)
        if (href.startsWith('#')) {
            e.preventDefault();

            const targetId = href.substring(1); // Quitar el #
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const headerOffset = 100; // Offset para el header fijo
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
        // Para enlaces externos (como "/") dejamos el comportamiento normal
    };

    return (
        <>
            {/* Desktop Header */}
            <header
                className={`hidden md:flex fixed left-1/4 w-[45%] items-center justify-center rounded-2xl z-50 px-6 py-3
                transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)]
                ${scroll
                        ? "top-3 bg-gradient-to-br from-[rgba(250,249,246,0.95)] via-[rgba(245,241,235,0.90)] to-[rgba(248,248,248,0.85)] backdrop-blur-[20px] border border-[rgba(156,175,136,0.3)] hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(212,165,116,0.35)] hover:border-[rgba(232,180,160,0.4)]"
                        : "top-6 bg-transparent border border-transparent"
                    }`}
            >
                <nav className="flex items-center justify-center w-full" >
                    {/* Logo Desktop */}
                    <div className="flex-shrink-0 mr-10 text-2xl font-bold">
                        <a
                            href="/"
                            className={`text-2xl font-bold transition-all duration-500 ${scroll 
                                ? "bg-gradient-to-r from-[#9CAF88] via-[#D4A574] to-[#E8B4A0] bg-clip-text text-transparent" 
                                : "bg-gradient-to-r from-[#9CAF88] to-[#D4A574] bg-clip-text text-transparent"
                                }`}
                        >
                            Diseño Interiores
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="flex items-center space-x-6">
                        {nav.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => handleSmoothScroll(e, item.href)}
                                className={`relative px-4 py-2 rounded-xl text-lg font-semibold tracking-wide
                                    transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)]
                                    hover:scale-[1.05]
                                    hover:shadow-[0_0_20px_rgba(212,165,116,0.3)]
                                    before:absolute before:inset-0 before:rounded-xl
                                    before:bg-gradient-to-r before:from-[rgba(232,180,160,0.15)] before:to-[rgba(212,165,116,0.15)] before:backdrop-blur-[12px]
                                    before:opacity-0 hover:before:opacity-100
                                    before:transition-all before:duration-500 before:ease-[cubic-bezier(0.25,0.8,0.25,1)]
                                    ${scroll 
                                        ? "text-[#2F2F2F] hover:text-[#9CAF88]" 
                                        : "text-[#FAF9F6] hover:text-[#E8B4A0] drop-shadow-[0_1px_2px_rgba(47,47,47,0.3)]"
                                    }`}
                            >
                                <span className="relative z-10">{item.name}</span>
                            </a>
                        ))}
                    </div>

                </nav>
            </header>


            {/* Mobile Header - Solo Logo */}
            <header className="md:hidden fixed left-2 right-2 w-auto rounded-2xl z-50 top-1.5 px-4 py-3 bg-transparent">
                <div className="flex justify-center text-2xl font-bold">
                    <a href="/" className="font-bold text-lg text-2xl bg-gradient-to-r from-[#9CAF88] to-[#D4A574] bg-clip-text text-transparent drop-shadow-[0_1px_2px_rgba(47,47,47,0.3)]">
                        Diseño Interiores
                    </a>
                </div>
            </header>

            {/* Mobile Bottom Tab Bar */}
            <nav className="md:hidden fixed bottom-4 left-4 right-4 z-50">
                <div className="bg-gradient-to-r from-[rgba(250,249,246,0.95)] via-[rgba(248,248,248,0.90)] to-[rgba(245,241,235,0.95)] backdrop-blur-lg rounded-2xl shadow-2xl border border-[rgba(156,175,136,0.3)]">
                    <div className="flex justify-around items-center py-3">
                        {nav.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => handleSmoothScroll(e, item.href)}
                                className="flex flex-col items-center space-y-1 px-3 py-2 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-[rgba(232,180,160,0.2)] hover:to-[rgba(212,165,116,0.2)] active:scale-95"
                            >
                                <div className="text-[#2F2F2F] hover:text-[#9CAF88] transition-colors duration-300">
                                    {item.icon}
                                </div>
                                <span className="text-xs text-[#2F2F2F] hover:text-[#9CAF88] transition-colors duration-300 font-medium">
                                    {item.name}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </nav>
        </>

    )


}