import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from '@tanstack/react-router';

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  role: yup.string().oneOf(['student', 'instructor', 'admin']).required(),
});

type FormData = yup.InferType<typeof schema>;

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      await axios.post('http://localhost:5000/api/auth/register', data);
      alert('Registration successful! Please login.');
      navigate({ to: '/login' });
    } catch (err: any) {
      alert(err?.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-700 via-purple-600 to-pink-500 px-4">
      <div className="w-full max-w-md bg-white bg-opacity-10 backdrop-blur-md rounded-2xl shadow-2xl border border-white border-opacity-20 p-8 text-white">
        <h2 className="text-3xl font-extrabold text-center mb-6">Create Your LMS Account</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              {...register('name')}
              placeholder="🙍‍♂ Full Name"
              className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-white border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white"
            />
            {errors.name && (
              <p className="text-sm text-red-300 mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              {...register('email')}
              placeholder="📧 Email Address"
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
              placeholder="🔒 Create Password"
              className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-white border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white"
            />
            {errors.password && (
              <p className="text-sm text-red-300 mt-1">{errors.password.message}</p>
            )}
          </div>

          <div>
            <select
              {...register('role')}
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-white border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white appearance-none"
                >
              <option value="" className="text-black">📚 Select Role</option>
              <option value="student" className="text-black">🎓 Student</option>
              <option value="instructor" className="text-black">🧑‍🏫 Instructor</option>
              <option value="admin" className="text-black">🛡 Admin</option>
          </select>

            {errors.role && (
              <p className="text-sm text-red-300 mt-1">{errors.role.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-white bg-opacity-20 hover:bg-opacity-40 rounded-lg text-white font-semibold border border-white border-opacity-30 transition-all duration-300 hover:scale-105"
          >
            🚀 Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;