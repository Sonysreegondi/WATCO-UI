
import { useForm } from 'react-hook-form';

export default function RegisterForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: any) => console.log('Register', data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto p-4 border rounded bg-white shadow">
      <h2 className="text-xl font-bold text-center">Register</h2>
      <input {...register('name')} placeholder="Full Name" className="w-full p-2 border rounded" />
      <input {...register('email')} type="email" placeholder="Email" className="w-full p-2 border rounded" />
      <input {...register('password')} type="password" placeholder="Password" className="w-full p-2 border rounded" />
      <button type="submit" className="w-full bg-green-600 text-white p-2 rounded">Register</button>
    </form>
  );
}
