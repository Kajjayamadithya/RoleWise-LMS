const AdminDashboard = () => {
  const users = [
    { id: 1, name: 'Tarun Adithya', role: 'student', email: 'tarunadithya@gmail.com' },
    { id: 2, name: 'Prof. Karne Raju', role: 'instructor', email: 'karneraju@gmail.com' },
    { id: 3, name: 'Vignesh', role: 'student', email: 'vignesh@gmail.com' },
  ];

  return (
    <div>
      <h3 className="text-2xl font-bold mb-6 text-white">🧑‍💼 User Management</h3>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-xl overflow-hidden text-white shadow-lg">
          <thead>
            <tr className="bg-white bg-opacity-20 text-white">
              <th className="p-4 text-left">👤 Name</th>
              <th className="p-4 text-left">📧 Email</th>
              <th className="p-4 text-left">🎓 Role</th>
              <th className="p-4 text-left">⚙ Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, idx) => (
              <tr
                key={u.id}
                className={`transition hover:bg-white hover:bg-opacity-10 ${
                  idx % 2 === 0 ? 'bg-white bg-opacity-5' : ''
                }`}
              >
                <td className="p-4">{u.name}</td>
                <td className="p-4">{u.email}</td>
                <td className="p-4 capitalize">{u.role}</td>
                <td className="p-4">
                  <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-full text-sm transition">
                    🗑 Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;