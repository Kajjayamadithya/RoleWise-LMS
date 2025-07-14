const InstructorDashboard = () => {
  const managedCourses = [
    { id: 101, title: 'Advanced React', enrolled: 22 },
    { id: 102, title: 'Node.js Essentials', enrolled: 17 },
  ];

  return (
    <div>
      <h3 className="text-2xl font-bold mb-6 text-white">🛠 Manage Courses</h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {managedCourses.map((course) => (
          <li
            key={course.id}
            className="p-6 rounded-2xl bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 shadow-lg text-white transition hover:scale-105 hover:bg-opacity-20"
          >
            <h4 className="text-xl font-semibold mb-1">📚 {course.title}</h4>
            <p className="text-sm text-gray-200">👥 Enrolled Students: {course.enrolled}</p>
            <div className="mt-4 flex gap-3">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm transition">
                ✏ Edit
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm transition">
                🗑 Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InstructorDashboard;