import Link from "next/link"

const Footer = () => {
    return (
        <footer className="-translate-y-[1px] bg-white border-t border-primary/10">
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="max-w-3xl mx-auto  gap-10 sm:gap-16 px-4 sm:px-7 py-4 md:py-7">
                        <p>2026 © Designed by <a href={"https://www.instagram.com/riski_siburian/"} target="_blank" className="hover:text-primary">Risky Siburian</a> — All rights reserved </p>
                        <p>Created with care · <Link href={"https://www.typescriptlang.org/"} target="_blank" className="hover:text-primary">TypeScripts</Link> </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer