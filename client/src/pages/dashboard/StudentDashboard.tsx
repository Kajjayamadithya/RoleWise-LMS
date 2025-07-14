const StudentDashboard = () => {
  const courses = [
    { id: 1, title: 'MERN Stack Development', instructor: 'Prof. Karne Raju' },
    { id: 2, title: 'React Basics', instructor: 'Prof.Abhinaya' },
    { id: 3, title: 'Database Design', instructor: 'Dr. Kiran' },
  ];

  return (
    <div>
      <h3 className="text-2xl font-bold mb-6 text-white">📘 My Courses</h3>
      {courses.length === 0 ? (
        <p className="text-gray-100">You are not enrolled in any courses yet.</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course) => (
            <li
              key={course.id}
              className="p-6 rounded-2xl bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 shadow-lg text-white transition hover:scale-105 hover:bg-opacity-20"
            >
              <h4 className="text-xl font-semibold mb-1">📖 {course.title}</h4>
              <p className="text-sm text-gray-200">👨‍🏫 Instructor: {course.instructor}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StudentDashboard;