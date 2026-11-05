interface LoginProps{
    onRegister: () => void;
}

const Login = ({onRegister}: LoginProps) => {
    return (
        <div className="w-full max-w-md bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h1 className="text-xl font-bold text-slate-900 mb-5">Welcome back</h1>
            <form className="space-y-4">
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
                    Log In 
                </button>
            </form>

            {/* Register link */}
            <p className="text-center text-sm text-slate-500 mt-4">
                Don't have an account?{" "}
                <button
                    type="button"
                    onClick={onRegister}
                    className="text-green-500 font-semibold hover:underline"
                >
                Register
                </button>
            </p>
        </div>
    );

}

export default Login;