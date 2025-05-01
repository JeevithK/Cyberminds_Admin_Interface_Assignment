const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "This service completely transformed our hiring process. We found perfect candidates in half the time.",
      author: "Sanjay",
      role: "HR Director, Cognizant",
    },
    {
      id: 2,
      quote:
        "As a recent graduate, I landed my dream job through this platform within two weeks of signing up.",
      author: "Anirudh",
      role: "Software Engineer",
    },
    {
      id: 3,
      quote:
        "The quality of applicants we receive is consistently outstanding. Worth every penny.",
      author: "Jeevith K",
      role: "Founder, Jolt Solutions",
    },
  ];

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-light text-gray-900 sm:text-4xl">
            What people are saying
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 py-8">
                <div className="-mt-6">
                  <div className="flex items-center">
                    <svg
                      className="h-12 w-12 text-purple-500"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                  </div>
                  <blockquote className="mt-6">
                    <p className="text-lg text-gray-600">
                      "{testimonial.quote}"
                    </p>
                  </blockquote>
                  <footer className="mt-6">
                    <p className="text-base font-medium text-gray-900">
                      {testimonial.author}
                    </p>
                    <p className="text-base text-gray-500">
                      {testimonial.role}
                    </p>
                  </footer>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
