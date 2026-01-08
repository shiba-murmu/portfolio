import React, { useState } from 'react'

function AdminLogin() {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div
            className="
                min-h-screen 
              flex justify-center pt-30 md:pt-0  md:items-center
                p-4
                bg-linear-to-br
                from-(--color-primary)
                to-(--color-secondary)
            "
        >
            {/* Login Card */}
            <div
                className="
                    w-full max-w-md 
                    bg-(--color-primary) 
                    text-white 
                    rounded-2xl 
                    shadow-xl 
                    p-8
                    h-96
                "
            >
                {/* Heading */}
                <h1 className="text-3xl font-semibold text-center mb-6">
                    Admin Login
                </h1>

                {/* Form */}
                <form className="flex flex-col gap-5">

                    {/* Username */}
                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor="username"
                            className="text-sm opacity-80"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            required
                            className="
                                bg-(--color-secondary)
                                text-white
                                rounded-lg
                                px-4 py-2
                                outline-none
                                focus:ring-2
                                focus:ring-(--color-button-background)
                            "
                        />
                    </div>

                    {/* Password */}
                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor="password"
                            className="text-sm opacity-80"
                        >
                            Password
                        </label>

                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                name="password"
                                required
                                className="
                                    w-full
                                    bg-(--color-secondary)
                                    text-white
                                    rounded-lg
                                    px-4 py-2
                                    pr-12
                                    outline-none
                                    focus:ring-2
                                    focus:ring-(--color-button-background)
                                "
                            />

                            {/* Toggle Button */}
                            <button
                                type="button"
                                onClick={() => setShowPassword(prev => !prev)}
                                className="
                                    absolute right-3 top-1/2 
                                    -translate-y-1/2
                                    text-sm
                                    opacity-70
                                    cursor-pointer
                                    hover:opacity-100
                                "
                                aria-label="Toggle password visibility"
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </button>
                        </div>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="
                            mt-4
                            bg-(--color-button-background)
                            text-white
                            font-medium
                            py-2
                            cursor-pointer
                            rounded-xl
                            hover:opacity-90
                            transition
                        "
                    >
                        Login
                    </button>
                </form>

                {/* Footer */}
                <p className="text-xs text-center opacity-60 mt-6">
                    Authorized access only
                </p>
            </div>
        </div>
    )
}

export default AdminLogin
