import { GrDocumentUpdate } from "react-icons/gr";
import { MdDeleteOutline, MdSystemUpdateAlt } from "react-icons/md";

const MyTutorials = () => {
  return (
    // <div>
    //   <div
    //     className="hero min-h-[400px]"
    //     style={{
    //       backgroundImage:
    //         "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
    //     }}
    //   >
    //     <div className="hero-overlay bg-opacity-60"></div>
    //     <div className="hero-content text-neutral-content text-center">
    //       <div className="max-w-md">
    //         <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
    //         <p className="mb-5">
    //           Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
    //           excepturi exercitationem quasi. In deleniti eaque aut repudiandae
    //           et a id nisi.
    //         </p>
    //         <button className="btn btn-primary">Get Started</button>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="overflow-x-auto w-11/12 md:w-3/4 mx-auto">
    //     <table className="table border dark:border-slate-800 my-10 md:my-20 dark:bg-slate-800">
    //       {/* head */}
    //       <thead className="bg-gray-100 dark:bg-slate-800 dark:text-white text-xl">
    //         <tr>
    //           <th>Total</th>
    //           <th>Name</th>
    //           <th>Description</th>
    //           <th>Price</th>
    //           <th>Review</th>
    //           <th>Action</th>
    //         </tr>
    //       </thead>
    //       <tbody className="">
    //         {/* row 1 */}
    //         <tr>
    //           <td>1</td>
    //           <td>
    //             <div className="flex items-center gap-3">
    //               <div className="avatar">
    //                 <div className="mask mask-squircle h-12 w-12">
    //                   <img
    //                     src="https://img.daisyui.com/images/profile/demo/2@94.webp"
    //                     alt="Avatar Tailwind CSS Component"
    //                   />
    //                 </div>
    //               </div>
    //               <div>
    //                 <div className="font-bold dark:text-white">name</div>
    //                 <div className="text-sm opacity-50 dark:text-gray-100">
    //                   language
    //                 </div>
    //               </div>
    //             </div>
    //           </td>
    //           <td className="dark:text-white">description</td>
    //           <td className="dark:text-white">Price</td>
    //           <td className="dark:text-white">Review</td>
    //           <th className="flex items-center gap-x-2">
    //             <div>
    //               <button
    //                 onClick={() =>
    //                   document.getElementById("my_modal_3").showModal()
    //                 }
    //                 className="btn text-xl bg-primaryColor text-white"
    //               >
    //                 <MdSystemUpdateAlt />
    //               </button>
    //               {/*//======>>>>modal */}
    //               <dialog id="my_modal_3" className="modal">
    //                 <div className="modal-box dark:bg-slate-800">
    //                   <form method="dialog">
    //                     {/* if there is a button in form, it will close the modal */}
    //                     <button className="btn text-xl btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-white">
    //                       ✕
    //                     </button>
    //                   </form>
    //                   <form className="space-y-6 ">
    //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
    //                       {/* Name */}
    //                       <div className="space-y-2">
    //                         <label className="block text-sm font-medium text-gray-700 dark:text-white">
    //                           Name
    //                         </label>
    //                         <input
    //                           type="text"
    //                           name="name"
    //                           className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primaryColor focus:outline-none dark:bg-slate-800"
    //                           placeholder="Your Name"
    //                         />
    //                       </div>

    //                       {/* Email */}
    //                       <div className="space-y-2">
    //                         <label className="block text-sm font-medium text-gray-700 dark:text-white">
    //                           Email
    //                         </label>
    //                         <input
    //                           type="email"
    //                           name="email"
    //                           className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primaryColor focus:outline-none dark:bg-slate-800"
    //                           placeholder="Your Email"
    //                         />
    //                       </div>
    //                       {/* Image */}
    //                       <div className="space-y-2">
    //                         <label className="block text-sm font-medium text-gray-700 dark:text-white">
    //                           Name
    //                         </label>
    //                         <input
    //                           type="url"
    //                           name="image"
    //                           className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primaryColor focus:outline-none dark:bg-slate-800"
    //                           placeholder="Tutorial photo url"
    //                         />
    //                       </div>
    //                       {/* Language */}
    //                       <div className="space-y-2">
    //                         <label className="block text-sm font-medium text-gray-700 dark:text-white">
    //                           Language
    //                         </label>
    //                         <input
    //                           type="text"
    //                           name="language"
    //                           className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primaryColor focus:outline-none dark:bg-slate-800"
    //                           placeholder="Tutorial Language"
    //                         />
    //                       </div>

    //                       {/* Price */}
    //                       <div className="space-y-2">
    //                         <label className="block text-sm font-medium text-gray-700 dark:text-white">
    //                           Price
    //                         </label>
    //                         <input
    //                           type="number"
    //                           name="price"
    //                           className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primaryColor focus:outline-none dark:bg-slate-800"
    //                           placeholder="Price"
    //                         />
    //                       </div>
    //                       {/* Review */}
    //                       <div className="space-y-2">
    //                         <label className="block text-sm font-medium text-gray-700 dark:text-white">
    //                           Review
    //                         </label>
    //                         <input
    //                           type="number"
    //                           name="review"
    //                           className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primaryColor focus:outline-none dark:bg-slate-800"
    //                           placeholder=" 0"
    //                           disabled
    //                         />
    //                       </div>
    //                     </div>

    //                     {/* Description */}
    //                     <div className="space-y-2">
    //                       <label className="block text-sm font-medium text-gray-700 dark:text-white">
    //                         Description
    //                       </label>
    //                       <textarea
    //                         name="description"
    //                         className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primaryColor focus:outline-none dark:bg-slate-800"
    //                         rows="4"
    //                         placeholder="Tutorial Description"
    //                       ></textarea>
    //                     </div>

    //                     {/* Submit Button */}
    //                     <div className="mt-6">
    //                       <button
    //                         type="submit"
    //                         className="w-full bg-gradient-to-r from-primaryColor/60 to-primaryColor/70 text-white py-2  rounded-md shadow-lg hover:bg-primaryColor  transition duration-300 flex justify-center items-center text-xl"
    //                       >
    //                         <GrDocumentUpdate className="mr-2" />
    //                         <span>Update</span>
    //                       </button>
    //                     </div>
    //                   </form>
    //                 </div>
    //               </dialog>
    //             </div>
    //             <button className="btn text-xl bg-error text-white ">
    //               <MdDeleteOutline />
    //             </button>
    //           </th>
    //         </tr>
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
  );
};

export default MyTutorials;
