interface RegisterProps{
    onLogin: () => void;
}

const Register = ({onLogin}: RegisterProps) => {
    return (
        <div className="w-full max-w-md bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h1 className="text-xl font-bold text-slate-900 mb-5">Create your account</h1>
            <form className="space-y-4">

                {/* Name Field */}
                <div>
                    <label className="block text-sm font-semibold mb-1">
                        Name
                    </label>

                    <input 
                        type="text"
                        required
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-green-400" 
                    />
                </div>
                
                {/* Email Field */}
                <div>
                    <label className="block text-sm font-semibold mb-1">
                        Email
                    </label>
                    <input 
                        type="email"
                        required
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-green-400" 
                    />
                </div>

                {/* Password Field */}
                <div>
                    <label className="block text-sm font-semibold mb-1">
                        Password
                    </label>
                    <input 
                        type="password"
                        required
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-green-400" 
                    />
                </div>

                {/* Login Button */}
                <button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-2 rounded-lg transition"
                >
                    Register Now 
                </button>
            </form>

            {/* Register link */}
            <p className="text-center text-sm text-slate-500 mt-4">
                Already have an account?{" "}
                <button
                    type="button"
                    onClick={onLogin}
                    className="text-green-500 font-semibold hover:underline"
                >
                Log in
                </button>
            </p>
        </div>
    );

}

export default Register;