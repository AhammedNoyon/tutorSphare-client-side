import student1 from "../../assets/banner/banner1.jpg";
import student2 from "../../assets/banner/banner2.jpg";
import student3 from "../../assets/banner/banner3.jpg";
import student4 from "../../assets/banner/banner4.jpg";
import student5 from "../../assets/banner/banner5.jpg";
import student6 from "../../assets/banner/banner1.jpg";
const Testimonial = () => {
  return (
    <section className="bg-gray-50 dark:bg-[#111627] py-16 px-6 md:px-12 mt-10 md:mt-20">
      <div className=" mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white md:text-5xl dark:text-white">
          What Our Students Say
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Hear from our students who’ve transformed their learning journeys with
          us.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3 w-11/12 md:w-3/4 mx-auto">
        {/* Testimonial 1 */}
        <div className="bg-white dark:bg-slate-800 shadow-xl rounded-lg p-8 hover:shadow-2xl transition-shadow">
          <p className="italic text-gray-600 mb-6 dark:text-gray-300">
            "This platform has been a game-changer. The mentors and resources
            are exceptional!"
          </p>
          <div className="flex items-center gap-4">
            <img
              src={student1}
              alt="Student"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="font-bold text-gray-800 dark:text-white">
                Jane Doe
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                student
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-white dark:bg-slate-800 shadow-xl rounded-lg p-8 hover:shadow-2xl transition-shadow">
          <p className="italic text-gray-600 mb-6 dark:text-gray-300">
            "The interactive courses are practical and engaging. I’ve learned so
            much!"
          </p>
          <div className="flex items-center gap-4">
            <img
              src={student2}
              alt="Student"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="font-bold text-gray-800 dark:text-white">
                John Smith
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                student
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-white dark:bg-slate-800 shadow-xl rounded-lg p-8 hover:shadow-2xl transition-shadow">
          <p className="italic text-gray-600 mb-6 dark:text-gray-300">
            "Flexible learning schedules and fantastic support. Highly
            recommend!"
          </p>
          <div className="flex items-center gap-4">
            <img
              src={student3}
              alt="Student"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="font-bold text-gray-800 dark:text-white">
                Emily Brown
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                student
              </p>
            </div>
          </div>
        </div>
        {/* Testimonial 4 */}
        <div className="bg-white dark:bg-slate-800 shadow-xl rounded-lg p-8 hover:shadow-2xl transition-shadow">
          <p className="italic text-gray-600 mb-6 dark:text-gray-300">
            "Flexible learning schedules and fantastic support. Highly
            recommend!"
          </p>
          <div className="flex items-center gap-4">
            <img
              src={student4}
              alt="Student"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="font-bold text-gray-800 dark:text-white">
                Ms Jony
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                student
              </p>
            </div>
          </div>
        </div>
        {/* Testimonial 5 */}
        <div className="bg-white dark:bg-slate-800 shadow-xl rounded-lg p-8 hover:shadow-2xl transition-shadow">
          <p className="italic text-gray-600 mb-6 dark:text-gray-300">
            "Flexible learning schedules and fantastic support. Highly
            recommend!"
          </p>
          <div className="flex items-center gap-4">
            <img
              src={student5}
              alt="Student"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="font-bold text-gray-800 dark:text-white">
                Sporshiya Jahan
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                student
              </p>
            </div>
          </div>
        </div>
        {/* Testimonial 6 */}
        <div className="bg-white dark:bg-slate-800 shadow-xl rounded-lg p-8 hover:shadow-2xl transition-shadow">
          <p className="italic text-gray-600 mb-6 dark:text-gray-300">
            "Flexible learning schedules and fantastic support. Highly
            recommend!"
          </p>
          <div className="flex items-center gap-4">
            <img
              src={student6}
              alt="Student"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="font-bold text-gray-800 dark:text-white">
                Ayati Smili
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                student
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
