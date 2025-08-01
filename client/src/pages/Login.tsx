import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from '@tanstack/react-router';
import { useAuth } from '../context/AuthContext';

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

type FormData = yup.InferType<typeof schema>;

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', data);
      login(res.data.token);
      navigate({ to: '/dashboard' });
    } catch (err: any) {
      alert(err?.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-700 via-purple-600 to-pink-500 px-4">
      <div className="w-full max-w-md bg-white bg-opacity-10 backdrop-blur-md rounded-2xl shadow-2xl border border-white border-opacity-20 p-8 text-white">
        <h2 className="text-3xl font-extrabold text-center mb-6">Login to LMS</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              {...register('email')}
              placeholder="📧 Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-white border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white"
            />
            {errors.email && (
              <p className="text-sm text-red-300 mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              {...register('password')}
              placeholder="🔒 Enter your password"
              className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-white border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white"
            />
            {errors.password && (
              <p className="text-sm text-red-300 mt-1">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-white bg-opacity-20 hover:bg-opacity-40 rounded-lg text-white font-semibold border border-white border-opacity-30 transition-all duration-300 hover:scale-105"
          >
            🚀 Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;