export default function LoginPage() {
    return(
        <div className = "w-full h-screen flex">

            {/*left side */}
            <div className = "w-1/2 h-screen bg-[#1A7A6E] flex flex-col items-center justify-center">
                
            </div>
                

            {/*right side */}
            <div className = "w-1/2 h-screen bg-white flex flex-col ">
                <h1 className = "text-5xl text-black font-bold pl-20 pt-20">Welcome Back!</h1>
                <h2 className = "text-2xl text-black pt-5 pl-20">Sign in to manage your Sri Lanka journey</h2>

                <div className = "pl-20 pt-10">
                    <label className = "block text-gray-700 font-bold mb-2 text-xl">Email Address</label>
                    <input className = "w-[700px] h-[50px] shadow rounded py-2 px-3 bg-[#F5EDD6] text-gray-700" id="email" type="text" placeholder="Enter your email address" />
                </div>

                <div className = "pl-20 pt-10">
                    <label className = "block text-gray-700 font-bold mb-2 text-xl">Password</label>
                    <input className = "w-[700px] h-[50px] shadow rounded py-2 px-3 bg-[#F5EDD6] text-gray-700" id="password" type="password" placeholder="Enter your password" />
                </div>

            </div>

            
        </div>
    )
}