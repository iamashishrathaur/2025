import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login form submitted:', formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation Bar */}
      {/* <div className="sticky top-0 bg-white px-4 py-3 flex items-center border-b border-gray-100">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft className="h-6 w-6 text-gray-700" />
        </button>
        <h1 className="ml-4 text-xl font-semibold">Sign In</h1>
      </div> */}
      <div className="sticky top-0 bg-white px-4 py-3 flex items-center justify-center border-b border-gray-100">
        <h1 className="text-center text-xl font-semibold">Login In</h1>
      </div>

      <div className="px-4 pt-6 pb-4 space-y-6">
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="block text-[4vw] leading-[5.333333vw]">Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="block w-full pl-11 pr-4 py-3 border border-gray-200 rounded-[2.133333vw] outline-none"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-[4vw] leading-[5.333333vw]">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="block w-full pl-11 pr-12 py-3 border border-gray-200 rounded-[2.133333vw] outline-none"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          {/* Bottom Action Buttons */}
          <div className="pt-6 space-y-4">
            <button
              className="w-full bg-[#4CA335] hover:bg-[#3e8c2a] text-white py-3 rounded-[2.133333vw] text-[4.266667vw]"
              type="submit"
            >
              Sign In
            </button>

            <div className="w-full text-center text-sm">
              Don't have an account?{' '}
              <span
                className="text-[#459330] font-medium cursor-pointer"
                onClick={() => navigate('/registration')}
              >
                Sign up
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
