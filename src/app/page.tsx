import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Ignite Your Coding Passion 🔥
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Join SPARK and become a part of an active coding community!
        </p>
        <Link href="/join">
          <button className="mt-6 bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-400 cursor-pointer">
            Join Now 🚀
          </button>
        </Link>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold">About SPARK</h2>
        <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
          SPARK is a coding community that fosters innovation, organizes
          contests, and helps students enhance their problem-solving skills.
        </p>
      </section>

      {/* Events Section */}
      <section className="py-16 px-6 bg-gray-800 text-center">
        <h2 className="text-3xl font-bold">Upcoming Events</h2>
        <p className="mt-4 text-gray-300">
          Stay updated with our latest coding contests and workshops.
        </p>
        <div className="mt-6 flex justify-center">
          <Link href="/events">
            <button className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-400 cursor-pointer">
              View Events 📅
            </button>
          </Link>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold">Learn & Grow</h2>
        <p className="mt-4 text-gray-300">
          Access tutorials, problem-solving guides, and expert mentorship.
        </p>
        <div className="mt-6 flex justify-center">
          <Link href="/resources">
            <button className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-400 cursor-pointer">
              Explore Resources 📚
            </button>
          </Link>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-16 px-6 bg-gray-800 text-center">
        <h2 className="text-3xl font-bold">Ready to Join?</h2>
        <p className="mt-4 text-gray-300">
          Be a part of the SPARK community and kickstart your coding journey!
        </p>
        <div className="mt-6 flex justify-center">
          <Link href="/join">
            <button className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-400 cursor-pointer">
              Join Now 🚀
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
