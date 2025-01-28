import Header from "../components/Header";

export default function HomeView() {
    return (
        <>
            <Header />

            <main className="bg-gray-100 py-10 min-h-screen">
                <div className="max-w-5xl mx-auto mt-10">
                    <div className="lg:w-1/2 px-10 lg:px-0 space-y-6">
                        <h1 className="text-6xl font-black">Todas Tus <span className="text-cyan-400">Redes Sociales </span>
                            en un enlace
                        </h1>
                        <p className="text-slate-800 text-xl">Unete a muchos developers compartiendo sus redes sociales,
                            comparte tu perfil de TikTok, YouTube, Facebook, Instagram, GitHub y mucho mas</p>
                    </div>
                </div>
            </main>
        </>
    )
}