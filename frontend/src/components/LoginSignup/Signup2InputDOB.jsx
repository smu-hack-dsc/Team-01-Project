// import React, { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { Button } from "components/Button";
// import api from "../../api";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const Signup2InputDOB = () => {
//   const [day, setDay] = useState("");
//   const [month, setMonth] = useState("");
//   const [year, setYear] = useState("");
//   const [description, setDescription] = useState("");

//   const navigate = useNavigate();
//   const location = useLocation();
//   const role = location.state?.role;

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     const dateOfBirth = `${year}-${month}-${day}`;
//     try {
//       await api.put("/user/profile", {
//         dateOfBirth: dateOfBirth,
//         description: description,
//       });
//       navigate("/signup_personalise", { state: { role } });
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   const [startDate, setStartDate] = useState(new Date());

//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   const years = Array.from({ length: 100 }, (_, index) => 2023 - index);

//   return (
//     <div>
//       <form onSubmit={handleSignup}>
//         <input
//           type="text"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           required
//           placeholder="Name"
//           class="w-full rounded-xl border-[1px] border-black font-DMSans text-xl mb-4 py-4 px-5 placeholder:text-gray-200"
//         />

//         {/* make this prettier later */}
//         <DatePicker
//           selected={startDate}
//           onChange={(date) => setStartDate(date)}
//         />

//         {/* <div className="flex items-center justify-between mb-32 space-x-4">
//           <input
//             type="number"
//             value={day}
//             onChange={(e) => setDay(e.target.value)}
//             min="1"
//             max="31"
//             required
//             placeholder="Day"
//             className="w-40 h-[80px] flex-shrink-0 rounded-xl border-[1px] border-black font-RecoletaAlt text-2xl py-4 px-8 placeholder:text-gray-200"
//           />

//           <select
//             value={month}
//             onChange={(e) => setMonth(e.target.value)}
//             required
//             className={`w-56 h-[80px] flex-shrink-0 rounded-xl border-[1px] border-black font-RecoletaAlt text-2xl py-4 px-8 ${month ? 'text-black' : 'text-gray-200'}`}
//           >
//             <option value="">Month</option>
//             {months.map((month, index) => (
//               <option key={index} value={index + 1}>
//                 {month}
//               </option>
//             ))}
//           </select>

//           <select
//             value={year}
//             onChange={(e) => setYear(e.target.value)}
//             required
//             className={`w-56 h-[80px] flex-shrink-0 rounded-xl border-[1px] border-black font-RecoletaAlt text-2xl py-4 px-8 ${year ? 'text-black' : 'text-gray-200'}`}
//           >
//             <option value="">Year</option>
//             {years.map((year) => (
//               <option key={year} value={year}>
//                 {year}
//               </option>
//             ))}
//           </select>
//         </div> */}

//         <div className="flex justify-end mt-4">
//           {/* fix navigation */}
//           <Button variant="purple" size="small" onClick={() => navigate("/signup_personalise")}>
//             Next
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Signup2InputDOB;
