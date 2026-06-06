import Header from "../components/header";

export default function Home() {
    return(
        <div className = "w-full h-screen flex flex-col">
            <Header />

            {/*Left side */}
            <div className = "w-full h-[calc(100vh-100px)] flex items-center justify-center">
                <div className = "bg-[#0D4F46] w-3/4 h-full flex items-center justify-center p-10">
                    <h2 className = "text-4xl text-white font-bold">Welcome to GoLanka</h2>
                </div>


                {/*Right side */}
                <div className = "bg-green-900 w-1/4 h-full flex items-center justify-center p-10">
                    <p className = "text-xl text-white">Discover the beauty of Sri Lanka with our expertly curated tours and experiences.</p>
                </div>
            </div>
            
        </div>
    )
}