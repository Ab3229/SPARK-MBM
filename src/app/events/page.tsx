import { v4 as uuidv4 } from "uuid";

type Event = {
  id: string;
  title: string;
  date: string;
  description: string;
  link: string;
};

const EventsPage = async () => {
  let events: Event[] = [
    // {
    //   id: uuidv4(),
    //   title: "Contest 3.0",
    //   date: "April 08, 2025 (Tentative)",
    //   description: `Gear up for "Contest 2.0," our upcoming coding competition designed to challenge and refine your programming skills. Engage with a series of thought-provoking problems that will test your algorithmic prowess and problem-solving abilities. Stay tuned for more details as we approach the event date. `,
    //   link: "/register",
    // },
    // Add more upcoming events as needed
  ];
  let pastevents: Event[] = [
    {
      id: uuidv4(),
      title: "Contest 2.0 Beginners",
      date: "April 8, 2025",
      description:
        "Unleash Your Code, Challenge the Best.",
      link: "https://www.hackerrank.com/sparkbeginner",
    },
    {
      id: uuidv4(),
      title: "Contest 2.0 Intermediate",
      date: "April 8, 2025",
      description:
        "Crack the logic, Conquer the leaderboard.",
      link: "https://www.hackerrank.com/sparkintermediate",
    },
    {
      id: uuidv4(),
      title: "Contest 2.0 Advanced",
      date: "April 8, 2025",
      description:
        "Where Coders Rise to the challenge",
      link: "https://www.hackerrank.com/sparkadvanced",
    },
    {
      id: uuidv4(),
      title: "Contest 1.0 Beginners",
      date: "March 19, 2025",
      description:
        "You don’t have to be great to start, but you have to start to be great! 💡",
      link: "https://www.hackerrank.com/contests/spark-beginner/challenges",
    },
    {
      id: uuidv4(),
      title: "Contest 1.0 Intermediate",
      date: "March 19, 2025",
      description: "Unleash your code, challenge the best.",
      link: "https://www.hackerrank.com/contests/spark-intermediate/challenges",
    },
    {
      id: uuidv4(),
      title: "Contest 1.0 Advanced",
      date: "March 19, 2025",
      description: "Code like a pro, inspire like a visionary.",
      link: "https://www.hackerrank.com/contests/spark-advanced",
    },
    // Add more past events as needed
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Upcoming Events Section */}
      <section className="py-7 px-6 text-center">
        <h1 className="text-4xl font-bold">Upcoming Events</h1>
        <p className="mt-4 text-lg text-gray-300">
          Join us in our upcoming events to enhance your coding skills and
          network with peers.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.length > 0 ? (
            events.map((event) => (
              <div
                key={event.id}
                className="bg-gray-800 p-6 rounded-lg shadow-md h-full flex flex-col"
              >
                <div className="flex-grow">
                  <h2 className="text-2xl font-semibold">{event.title}</h2>
                  <p className="mt-2 text-gray-400">{event.date}</p>
                  <p className="mt-4 text-gray-300">{event.description}</p>
                </div>
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400"
                >
                  Register
                </a>
              </div>
            ))
          ) : (
            <p className="col-span-full text-gray-300 text-xl font-medium bg-gray-800 py-6 px-4 rounded-lg shadow-md border border-gray-700">
              No upcoming events at the moment. Please check back later.
            </p>
          )}
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-7 px-6 text-center">
        <h1 className="text-4xl font-bold">Past Events</h1>
        <p className="mt-4 text-lg text-gray-300">
          Explore our past events to see the challenges we've hosted and the
          skills we've covered.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pastevents.length > 0 ? (
            pastevents.map((event) => (
              <div
                key={event.id}
                className="bg-gray-800 p-6 rounded-lg shadow-md h-full flex flex-col"
              >
                <div className="flex-grow">
                  <h2 className="text-2xl font-semibold">{event.title}</h2>
                  <p className="mt-2 text-gray-400">{event.date}</p>
                  <p className="mt-4 text-gray-300">{event.description}</p>
                </div>
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400"
                >
                  Visit
                </a>
              </div>
            ))
          ) : (
            <p className="col-span-full text-gray-300 text-xl font-medium bg-gray-800 py-6 px-4 rounded-lg shadow-md border border-gray-700">
              No past events at the moment. Please check back later.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
