// import React from "react";

// function Report() {
//   // Data based on the image and previous context
//   const summaryData = {
//     overall_score: 85,
//     sections: {
//       contact_info: {
//         score: 95,
//         comment: "Perfectly structured and complete.",
//       },
//       experience: { score: 88, comment: "Strong bullet points and impact." },
//       education: { score: 70, comment: "Consider adding relevant coursework." },
//       skills: { score: 60, comment: "Expand on specific skill proficiencies." },
//     },
//     tips: [
//       "Quantify Achievements: Add more numbers and metrics to your experience section to show impact.",
//       "Keyword Optimization: Integrate more industry-specific keywords relevant to your target roles.",
//       "Action Verbs: Use strong action verbs to enhance your accomplishments.",
//     ],
//   };

//   return (
//     <div className="w-full max-w-md p-6 bg-gray-50 rounded-lg shadow-lg">
//       <h2 className="text-2xl font-bold text-blue-700 mb-4">
//         AI Analysis Results
//       </h2>

//       {/* Overall Score */}
//       <div className="bg-white p-4 rounded-lg mb-6 shadow">
//         <h3 className="text-xl font-semibold text-gray-800 mb-2">
//           Overall Score
//         </h3>
//         <div className="flex items-center">
//           <span className="text-4xl font-bold text-blue-600">
//             {summaryData.overall_score}/100
//           </span>
//           <span className="ml-2 text-green-600 font-medium">Excellent!</span>
//         </div>
//         <p className="text-gray-600 mt-2">
//           Your resume is strong, but there are areas to refine.
//         </p>
//         <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
//           <div
//             className="bg-blue-600 h-2.5 rounded-full"
//             style={{ width: `${(summaryData.overall_score / 100) * 100}%` }}
//           ></div>
//         </div>
//       </div>

//       {/* Section Scores */}
//       <div className="space-y-4">
//         <div className="bg-white p-4 rounded-lg shadow">
//           <h4 className="text-lg font-medium text-gray-800">Contact Info</h4>
//           <div className="flex items-center mt-2">
//             <span className="text-2xl font-bold text-green-600">
//               {summaryData.sections.contact_info.score}%
//             </span>
//             <p className="ml-2 text-gray-600">
//               {summaryData.sections.contact_info.comment}
//             </p>
//           </div>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow">
//           <h4 className="text-lg font-medium text-gray-800">Experience</h4>
//           <div className="flex items-center mt-2">
//             <span className="text-2xl font-bold text-green-600">
//               {summaryData.sections.experience.score}%
//             </span>
//             <p className="ml-2 text-gray-600">
//               {summaryData.sections.experience.comment}
//             </p>
//           </div>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow">
//           <h4 className="text-lg font-medium text-gray-800">Education</h4>
//           <div className="flex items-center mt-2">
//             <span className="text-2xl font-bold text-yellow-600">
//               {summaryData.sections.education.score}%
//             </span>
//             <p className="ml-2 text-gray-600">
//               {summaryData.sections.education.comment}
//             </p>
//           </div>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow">
//           <h4 className="text-lg font-medium text-gray-800">Skills</h4>
//           <div className="flex items-center mt-2">
//             <span className="text-2xl font-bold text-red-600">
//               {summaryData.sections.skills.score}%
//             </span>
//             <p className="ml-2 text-gray-600">
//               {summaryData.sections.skills.comment}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Tips for Improvement */}
//       <div className="bg-white p-4 rounded-lg shadow mt-6">
//         <h3 className="text-lg font-semibold text-gray-800 mb-2">
//           Tips for Improvement
//         </h3>
//         <ul className="list-disc pl-5 text-gray-600 space-y-2">
//           {summaryData.tips.map((tip, index) => (
//             <li key={index}>{tip}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Report;

// export default function Report({ aiReport }: any) {
//   return (
//     <div className="bg-gray-100 min-h-screen p-6">
//       <div className="max-w-md mx-auto">
//         {/* Header */}
//         <div className="flex items-center mb-6">
//           <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
//             <span className="text-white text-sm font-bold">AI</span>
//           </div>
//           <h1 className="text-xl font-semibold text-gray-800">
//             AI Resume Analyzer
//           </h1>
//         </div>

//         {/* AI Analysis Results Header */}
//         <div className="mb-6 ">
//           <div className="flex items-center gap-3">
//             <h2 className="text-lg font-semibold text-blue-600">
//               AI Analysis Results
//             </h2>
//             <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
//               Re-analyze
//             </button>
//           </div>
//         </div>

//         {/* Overall Score Card */}
//         <div className="bg-gradient-to-tr from-[#BE5757] via-[#A338E3] to-[#AC76D6] rounded-lg p-6 mb-6 shadow-sm">
//           <h3 className="text-white text-sm mb-2">Overall Score</h3>
//           <div className="flex items-baseline gap-2 mb-2">
//             <span className="text-4xl font-bold text-white">
//               {aiReport?.overall_score}
//             </span>
//             <span className="text-white">/100</span>
//             <span className="ml-auto text-green-500 font-medium">
//               Excellent!
//             </span>
//           </div>
//           <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
//             <div
//               className="bg-white h-2 rounded-full"
//               style={{ width: "85%" }}
//             ></div>
//           </div>
//           <p className="text-white text-sm">
//             Your resume is strong, but there are areas to refine.
//           </p>
//         </div>

//         {/* Metrics Grid */}
//         <div className="grid grid-cols-2 gap-4 mb-6">
//           {/* Contact Info */}
//           <div className="bg-white rounded-lg p-4 shadow-sm">
//             <h4 className="text-gray-600 text-sm mb-2">Contact Info</h4>
//             <div className="text-2xl font-bold text-green-500 mb-1">
//               {aiReport?.sections.contact_info.score}
//             </div>
//             <p className="text-gray-500 text-xs">
//               Perfectly structured and complete
//             </p>
//           </div>

//           {/* Experience */}
//           <div className="bg-white rounded-lg p-4 shadow-sm">
//             <h4 className="text-gray-600 text-sm mb-2">Experience</h4>
//             <div className="text-2xl font-bold text-green-500 mb-1">
//               {aiReport?.sections.experience.score}
//             </div>
//             <p className="text-gray-500 text-xs">
//               Strong bullet points and impact
//             </p>
//           </div>

//           {/* Education */}
//           <div className="bg-white rounded-lg p-4 shadow-sm">
//             <h4 className="text-gray-600 text-sm mb-2">Education</h4>
//             <div className="text-2xl font-bold text-yellow-500 mb-1">
//               {aiReport?.sections.education.score}
//             </div>
//             <p className="text-gray-500 text-xs">
//               Consider adding relevant coursework
//             </p>
//           </div>

//           {/* Skills */}
//           <div className="bg-white rounded-lg p-4 shadow-sm">
//             <h4 className="text-gray-600 text-sm mb-2">Skills</h4>
//             <div className="text-2xl font-bold text-red-500 mb-1">
//               {aiReport?.sections.skills.score}
//             </div>
//             <p className="text-gray-500 text-xs">
//               Expand on specific skill proficiencies
//             </p>
//           </div>
//         </div>

//         {/* Tips for Improvement */}
//         <div className="bg-white rounded-lg p-6 shadow-sm">
//           <h3 className="text-gray-800 font-semibold mb-4">
//             Tips for Improvement
//           </h3>

//           <div className="space-y-4">
//             <div className="flex gap-3">
//               <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
//                 <span className="text-blue-600 text-sm font-bold">1</span>
//               </div>
//               <div>
//                 <h4 className="font-medium text-gray-800 mb-1">
//                   {aiReport?.sections.experience.tips_for_improvement}
//                 </h4>
//                 <p className="text-gray-600 text-sm">
//                   Add more numbers and metrics to your experience section to
//                   show impact.
//                 </p>
//               </div>
//             </div>

//             <div className="flex gap-3">
//               <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
//                 <span className="text-blue-600 text-sm font-bold">2</span>
//               </div>
//               <div>
//                 <h4 className="font-medium text-gray-800 mb-1">
//                   Keywords Optimization:
//                 </h4>
//                 <p className="text-gray-600 text-sm">
//                   Integrate more industry-specific keywords relevant to your
//                   target roles.
//                 </p>
//               </div>
//             </div>

//             <div className="flex gap-3">
//               <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
//                 <span className="text-blue-600 text-sm font-bold">3</span>
//               </div>
//               <div>
//                 <h4 className="font-medium text-gray-800 mb-1">
//                   Action Verbs:
//                 </h4>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// interface Section {
//   comment: string;
//   needs_improvement: string[];
//   score: number;
//   tips_for_improvement: string[];
//   whats_good: string[];
// }

// interface AiReport {
//   aiAgentType: string;
//   overall_feedback: string;
//   overall_score: number;
//   sections: {
//     contact_info: Section;
//     experience: Section;
//     education: Section;
//     skills: Section;
//   };
//   summary_comment: string;
//   createdAt: string;
//   id: number;
//   metaData: string;
//   recordId: string;
//   userEmail: string;
// }

// interface ReportProps {
//   aiReport: AiReport | null;
// }

// export default function Report({ aiReport }: ReportProps) {
//   const getScoreColor = (score: number): string => {
//     if (score >= 80) return "text-green-500";
//     if (score >= 60) return "text-yellow-500";
//     return "text-red-500";
//   };

//   const getProgressBarColor = (score: number): string => {
//     if (score >= 80) return "bg-green-500";
//     if (score >= 60) return "bg-yellow-500";
//     return "bg-red-500";
//   };

//   if (!aiReport) {
//     return (
//       <div className="bg-gray-100 min-h-screen p-6">
//         <div className="max-w-md mx-auto">
//           <div className="text-center text-gray-600">
//             Loading report data... Please wait.
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gray-100 min-h-screen p-6">
//       <div className="max-w-md mx-auto">
//         {/* Header */}
//         <div className="flex items-center mb-6">
//           <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
//             <span className="text-white text-sm font-bold">AI</span>
//           </div>
//           <h1 className="text-xl font-semibold text-gray-800">
//             AI Resume Analyzer
//           </h1>
//         </div>

//         {/* AI Analysis Results Header */}
//         <div className="mb-6">
//           <div className="flex items-center gap-3">
//             <h2 className="text-lg font-semibold text-blue-600">
//               AI Analysis Results
//             </h2>
//             <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
//               Re-analyze
//             </button>
//           </div>
//         </div>

//         {/* Overall Score Card */}
//         <div className="bg-gradient-to-tr from-[#BE5757] via-[#A338E3] to-[#AC76D6] rounded-lg p-6 mb-6 shadow-sm">
//           <h3 className="text-white text-sm mb-2">Overall Score</h3>
//           <div className="flex items-baseline gap-2 mb-2">
//             <span className="text-4xl font-bold text-white">
//               {aiReport.overall_score}
//             </span>
//             <span className="text-white">/100</span>
//             <span
//               className={`ml-auto font-medium ${getScoreColor(
//                 aiReport.overall_score
//               )}`}
//             >
//               {aiReport.overall_score >= 80
//                 ? "Excellent!"
//                 : aiReport.overall_score >= 60
//                 ? "Good!"
//                 : "Needs Work!"}
//             </span>
//           </div>
//           <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
//             <div
//               className={`h-2 rounded-full ${getProgressBarColor(
//                 aiReport.overall_score
//               )}`}
//               style={{ width: `${aiReport.overall_score}%` }}
//             ></div>
//           </div>
//           <p className="text-white text-sm">{aiReport.overall_feedback}</p>
//         </div>

//         {/* Metrics Grid */}
//         <div className="grid grid-cols-2 gap-4 mb-6">
//           {/* Contact Info */}
//           <div className="bg-white rounded-lg p-4 shadow-sm">
//             <h4 className="text-gray-600 text-sm mb-2">Contact Info</h4>
//             <div
//               className={`text-2xl font-bold ${getScoreColor(
//                 aiReport.sections.contact_info.score
//               )} mb-1`}
//             >
//               {aiReport.sections.contact_info.score}
//             </div>
//             <p className="text-gray-500 text-xs">
//               {aiReport.sections.contact_info.comment}
//             </p>
//           </div>

//           {/* Experience */}
//           <div className="bg-white rounded-lg p-4 shadow-sm">
//             <h4 className="text-gray-600 text-sm mb-2">Experience</h4>
//             <div
//               className={`text-2xl font-bold ${getScoreColor(
//                 aiReport.sections.experience.score
//               )} mb-1`}
//             >
//               {aiReport.sections.experience.score}
//             </div>
//             <p className="text-gray-500 text-xs">
//               {aiReport.sections.experience.comment}
//             </p>
//           </div>

//           {/* Education */}
//           <div className="bg-white rounded-lg p-4 shadow-sm">
//             <h4 className="text-gray-600 text-sm mb-2">Education</h4>
//             <div
//               className={`text-2xl font-bold ${getScoreColor(
//                 aiReport.sections.education.score
//               )} mb-1`}
//             >
//               {aiReport.sections.education.score}
//             </div>
//             <p className="text-gray-500 text-xs">
//               {aiReport.sections.education.comment}
//             </p>
//           </div>

//           {/* Skills */}
//           <div className="bg-white rounded-lg p-4 shadow-sm">
//             <h4 className="text-gray-600 text-sm mb-2">Skills</h4>
//             <div
//               className={`text-2xl font-bold ${getScoreColor(
//                 aiReport.sections.skills.score
//               )} mb-1`}
//             >
//               {aiReport.sections.skills.score}
//             </div>
//             <p className="text-gray-500 text-xs">
//               {aiReport.sections.skills.comment}
//             </p>
//           </div>
//         </div>

//         {/* Tips for Improvement */}
//         <div className="bg-white rounded-lg p-6 shadow-sm">
//           <h3 className="text-gray-800 font-semibold mb-4">
//             Tips for Improvement
//           </h3>
//           <div className="space-y-4">
//             {[
//               {
//                 section: "Contact Info",
//                 tips: aiReport.sections.contact_info.tips_for_improvement,
//               },
//               {
//                 section: "Experience",
//                 tips: aiReport.sections.experience.tips_for_improvement,
//               },
//               {
//                 section: "Education",
//                 tips: aiReport.sections.education.tips_for_improvement,
//               },
//               {
//                 section: "Skills",
//                 tips: aiReport.sections.skills.tips_for_improvement,
//               },
//             ].map(({ section, tips }, index) =>
//               tips?.length > 0
//                 ? tips.map((tip: string, tipIndex: number) => (
//                     <div key={`${section}-${tipIndex}`} className="flex gap-3">
//                       <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
//                         <span className="text-blue-600 text-sm font-bold">
//                           {index * 10 + tipIndex + 1}
//                         </span>
//                       </div>
//                       <div>
//                         <h4 className="font-medium text-gray-800 mb-1">
//                           {section}
//                         </h4>
//                         <p className="text-gray-600 text-sm">{tip}</p>
//                       </div>
//                     </div>
//                   ))
//                 : null
//             )}
//           </div>
//         </div>

//         {/* Summary Comment */}
//         {aiReport.summary_comment && (
//           <div className="bg-white rounded-lg p-6 shadow-sm mt-6">
//             <h3 className="text-gray-800 font-semibold mb-4">Summary</h3>
//             <p className="text-gray-600 text-sm">{aiReport.summary_comment}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// interface Section {
//   comment: string;
//   needs_improvement: string[];
//   score: number;
//   tips_for_improvement: string[];
//   whats_good: string[];
// }

// interface AiReport {
//   aiAgentType: string;
//   overall_feedback: string;
//   overall_score: number;
//   sections: {
//     contact_info: Section;
//     experience: Section;
//     education: Section;
//     skills: Section;
//   };
//   summary_comment: string;
//   createdAt: string;
//   id: number;
//   metaData: string;
//   recordId: string;
//   userEmail: string;
// }

// interface ReportProps {
//   aiReport: AiReport | null;
// }

// export default function Report({ aiReport }: ReportProps) {
//   const getScoreColor = (score: number): string => {
//     if (score >= 80) return "text-green-500";
//     if (score >= 60) return "text-yellow-500";
//     return "text-red-500";
//   };

//   const getProgressBarColor = (score: number): string => {
//     if (score >= 80) return "bg-green-500";
//     if (score >= 60) return "bg-yellow-500";
//     return "bg-red-500";
//   };

//   if (!aiReport) {
//     return (
//       <div className="bg-gray-100 min-h-screen p-6">
//         <div className="max-w-md mx-auto">
//           <div className="text-center text-gray-600">
//             Loading report data... Please wait.
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Flatten tips for sequential numbering
//   const allTips: { section: string; tip: string }[] = [
//     ...aiReport.sections.contact_info.tips_for_improvement.map((tip) => ({
//       section: "Contact Info",
//       tip,
//     })),
//     ...aiReport.sections.experience.tips_for_improvement.map((tip) => ({
//       section: "Experience",
//       tip,
//     })),
//     ...aiReport.sections.education.tips_for_improvement.map((tip) => ({
//       section: "Education",
//       tip,
//     })),
//     ...aiReport.sections.skills.tips_for_improvement.map((tip) => ({
//       section: "Skills",
//       tip,
//     })),
//   ];

//   return (
//     <div className="bg-gray-100 min-h-screen p-6">
//       <div className="max-w-md mx-auto">
//         {/* Header */}
//         <div className="flex items-center mb-6">
//           <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
//             <span className="text-white text-sm font-bold">AI</span>
//           </div>
//           <h1 className="text-xl font-semibold text-gray-800">
//             AI Resume Analyzer
//           </h1>
//         </div>

//         {/* AI Analysis Results Header */}
//         <div className="mb-6">
//           <div className="flex items-center gap-3">
//             <h2 className="text-lg font-semibold text-blue-600">
//               AI Analysis Results
//             </h2>
//             <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
//               Re-analyze
//             </button>
//           </div>
//         </div>

//         {/* Overall Score Card */}
//         <div className="bg-gradient-to-tr from-[#BE5757] via-[#A338E3] to-[#AC76D6] rounded-lg p-6 mb-6 shadow-sm">
//           <h3 className="text-white text-sm mb-2">Overall Score</h3>
//           <div className="flex items-baseline gap-2 mb-2">
//             <span className="text-4xl font-bold text-white">
//               {aiReport.overall_score}
//             </span>
//             <span className="text-white">/100</span>
//             <span
//               className={`ml-auto font-medium ${getScoreColor(
//                 aiReport.overall_score
//               )}`}
//             >
//               {aiReport.overall_score >= 80
//                 ? "Excellent!"
//                 : aiReport.overall_score >= 60
//                 ? "Good!"
//                 : "Needs Work!"}
//             </span>
//           </div>
//           <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
//             <div
//               className={`h-2 rounded-full ${getProgressBarColor(
//                 aiReport.overall_score
//               )}`}
//               style={{ width: `${aiReport.overall_score}%` }}
//             ></div>
//           </div>
//           <p className="text-white text-sm">{aiReport.overall_feedback}</p>
//         </div>

//         {/* Metrics Grid */}
//         <div className="grid grid-cols-2 gap-4 mb-6">
//           {/* Contact Info */}
//           <div className="bg-white rounded-lg p-4 shadow-sm">
//             <h4 className="text-gray-600 text-sm mb-2">Contact Info</h4>
//             <div
//               className={`text-2xl font-bold ${getScoreColor(
//                 aiReport.sections.contact_info.score
//               )} mb-1`}
//             >
//               {aiReport.sections.contact_info.score}
//             </div>
//             <p className="text-gray-500 text-xs">
//               {aiReport.sections.contact_info.comment}
//             </p>
//           </div>

//           {/* Experience */}
//           <div className="bg-white rounded-lg p-4 shadow-sm">
//             <h4 className="text-gray-600 text-sm mb-2">Experience</h4>
//             <div
//               className={`text-2xl font-bold ${getScoreColor(
//                 aiReport.sections.experience.score
//               )} mb-1`}
//             >
//               {aiReport.sections.experience.score}
//             </div>
//             <p className="text-gray-500 text-xs">
//               {aiReport.sections.experience.comment}
//             </p>
//           </div>

//           {/* Education */}
//           <div className="bg-white rounded-lg p-4 shadow-sm">
//             <h4 className="text-gray-600 text-sm mb-2">Education</h4>
//             <div
//               className={`text-2xl font-bold ${getScoreColor(
//                 aiReport.sections.education.score
//               )} mb-1`}
//             >
//               {aiReport.sections.education.score}
//             </div>
//             <p className="text-gray-500 text-xs">
//               {aiReport.sections.education.comment}
//             </p>
//           </div>

//           {/* Skills */}
//           <div className="bg-white rounded-lg p-4 shadow-sm">
//             <h4 className="text-gray-600 text-sm mb-2">Skills</h4>
//             <div
//               className={`text-2xl font-bold ${getScoreColor(
//                 aiReport.sections.skills.score
//               )} mb-1`}
//             >
//               {aiReport.sections.skills.score}
//             </div>
//             <p className="text-gray-500 text-xs">
//               {aiReport.sections.skills.comment}
//             </p>
//           </div>
//         </div>

//         {/* Tips for Improvement */}
//         <div className="bg-white rounded-lg p-6 shadow-sm">
//           <h3 className="text-gray-800 font-semibold mb-4">
//             Tips for Improvement
//           </h3>
//           <div className="space-y-4">
//             {allTips.length > 0 ? (
//               allTips.map(({ section, tip }, index) => (
//                 <div key={`${section}-${index}`} className="flex gap-3">
//                   <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
//                     <span className="text-blue-600 text-sm font-bold">
//                       {index + 1}
//                     </span>
//                   </div>
//                   <div>
//                     <h4 className="font-medium text-gray-800 mb-1">
//                       {section}
//                     </h4>
//                     <p className="text-gray-600 text-sm">{tip}</p>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p className="text-gray-600 text-sm">
//                 No tips for improvement provided.
//               </p>
//             )}
//           </div>
//         </div>

//         {/* Summary Comment */}
//         {aiReport.summary_comment && (
//           <div className="bg-white rounded-lg p-6 shadow-sm mt-6">
//             <h3 className="text-gray-800 font-semibold mb-4">Summary</h3>
//             <p className="text-gray-600 text-sm">{aiReport.summary_comment}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
import ResumeUploadDialog from "@/app/(routes)/dashboard/_components/ResumeUploadDialog";
import { motion } from "framer-motion";
import { useState } from "react";

interface Section {
  comment: string;
  needs_improvement: string[];
  score: number;
  tips_for_improvement: string[];
  whats_good: string[];
}

interface AiReport {
  aiAgentType: string;
  overall_feedback: string;
  overall_score: number;
  sections: {
    contact_info: Section;
    experience: Section;
    education: Section;
    skills: Section;
  };
  summary_comment: string;
  createdAt: string;
  id: number;
  metaData: string;
  recordId: string;
  userEmail: string;
}

interface ReportProps {
  aiReport: AiReport | null;
}

export default function Report({ aiReport }: ReportProps) {
  const [openResumeUpload, setOpenResumeDialog] = useState(false);

  const getScoreColor = (score: number): string => {
    if (score >= 80) return "text-emerald-400";
    if (score >= 60) return "text-amber-400";
    return "text-red-400";
  };

  const getProgressBarColor = (score: number): string => {
    if (score >= 80) return "bg-gradient-to-r from-emerald-400 to-emerald-500";
    if (score >= 60) return "bg-gradient-to-r from-amber-400 to-amber-500";
    return "bg-gradient-to-r from-red-400 to-red-500";
  };

  const getScoreGlow = (score: number): string => {
    if (score >= 80) return "shadow-emerald-400/20";
    if (score >= 60) return "shadow-amber-400/20";
    return "shadow-red-400/20";
  };

  if (!aiReport) {
    return (
      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen p-6">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="animate-spin w-8 h-8 border-2 border-purple-400 border-t-transparent rounded-full mx-auto mb-4"></div>
              <div className="text-purple-200">
                Loading report data... Please wait.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Flatten tips for sequential numbering
  const allTips: { section: string; tip: string }[] = [
    ...aiReport.sections.contact_info.tips_for_improvement.map((tip) => ({
      section: "Contact Info",
      tip,
    })),
    ...aiReport.sections.experience.tips_for_improvement.map((tip) => ({
      section: "Experience",
      tip,
    })),
    ...aiReport.sections.education.tips_for_improvement.map((tip) => ({
      section: "Education",
      tip,
    })),
    ...aiReport.sections.skills.tips_for_improvement.map((tip) => ({
      section: "Skills",
      tip,
    })),
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen p-6">
      <motion.div
        className="max-w-md mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Header */}
        <motion.div className="flex items-center mb-8" variants={itemVariants}>
          <motion.div
            className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-purple-500/25"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-white text-sm font-bold">AI</span>
          </motion.div>
          <h1 className="text-xl font-semibold text-white">
            AI Resume Analyzer
          </h1>
        </motion.div>

        {/* AI Analysis Results Header */}
        <motion.div className="mb-8" variants={itemVariants}>
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-semibold text-purple-300">
              AI Analysis Results
            </h2>
            <motion.button
              onClick={() => setOpenResumeDialog(true)}
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg shadow-purple-600/25 border border-purple-500/20"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(168, 85, 247, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Re-analyze
            </motion.button>
          </div>
        </motion.div>

        {/* Overall Score Card */}
        <motion.div
          className="bg-gradient-to-br from-purple-800/40 via-purple-700/40 to-pink-800/40 backdrop-blur-lg rounded-2xl p-8 mb-8 shadow-2xl border border-purple-500/20 relative overflow-hidden"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-2xl"></div>
          <div className="relative z-10">
            <h3 className="text-purple-200 text-sm mb-3 font-medium">
              Overall Score
            </h3>
            <div className="flex items-baseline gap-3 mb-4">
              <motion.span
                className="text-5xl font-bold text-white"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              >
                {aiReport.overall_score}
              </motion.span>
              <span className="text-purple-200 text-lg">/100</span>
              <motion.span
                className={`ml-auto font-semibold text-lg ${getScoreColor(
                  aiReport.overall_score
                )} drop-shadow-sm`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                {aiReport.overall_score >= 80
                  ? "Excellent!"
                  : aiReport.overall_score >= 60
                  ? "Good!"
                  : "Needs Work!"}
              </motion.span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-3 mb-4 overflow-hidden">
              <motion.div
                className={`h-3 rounded-full ${getProgressBarColor(
                  aiReport.overall_score
                )} shadow-lg ${getScoreGlow(aiReport.overall_score)}`}
                initial={{ width: 0 }}
                animate={{ width: `${aiReport.overall_score}%` }}
                transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
              ></motion.div>
            </div>
            <p className="text-purple-100 text-sm leading-relaxed">
              {aiReport.overall_feedback}
            </p>
          </div>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          className="grid grid-cols-2 gap-4 mb-8"
          variants={itemVariants}
        >
          {/* Contact Info */}
          <motion.div
            className="bg-white/5 backdrop-blur-lg rounded-xl p-5 shadow-xl border border-white/10 hover:border-purple-400/30 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h4 className="text-purple-300 text-sm mb-3 font-medium">
              Contact Info
            </h4>
            <div
              className={`text-3xl font-bold ${getScoreColor(
                aiReport.sections.contact_info.score
              )} mb-2 drop-shadow-sm`}
            >
              {aiReport.sections.contact_info.score}
            </div>
            <p className="text-purple-200/70 text-xs leading-relaxed">
              {aiReport.sections.contact_info.comment}
            </p>
          </motion.div>

          {/* Experience */}
          <motion.div
            className="bg-white/5 backdrop-blur-lg rounded-xl p-5 shadow-xl border border-white/10 hover:border-purple-400/30 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h4 className="text-purple-300 text-sm mb-3 font-medium">
              Experience
            </h4>
            <div
              className={`text-3xl font-bold ${getScoreColor(
                aiReport.sections.experience.score
              )} mb-2 drop-shadow-sm`}
            >
              {aiReport.sections.experience.score}
            </div>
            <p className="text-purple-200/70 text-xs leading-relaxed">
              {aiReport.sections.experience.comment}
            </p>
          </motion.div>

          {/* Education */}
          <motion.div
            className="bg-white/5 backdrop-blur-lg rounded-xl p-5 shadow-xl border border-white/10 hover:border-purple-400/30 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h4 className="text-purple-300 text-sm mb-3 font-medium">
              Education
            </h4>
            <div
              className={`text-3xl font-bold ${getScoreColor(
                aiReport.sections.education.score
              )} mb-2 drop-shadow-sm`}
            >
              {aiReport.sections.education.score}
            </div>
            <p className="text-purple-200/70 text-xs leading-relaxed">
              {aiReport.sections.education.comment}
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div
            className="bg-white/5 backdrop-blur-lg rounded-xl p-5 shadow-xl border border-white/10 hover:border-purple-400/30 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h4 className="text-purple-300 text-sm mb-3 font-medium">Skills</h4>
            <div
              className={`text-3xl font-bold ${getScoreColor(
                aiReport.sections.skills.score
              )} mb-2 drop-shadow-sm`}
            >
              {aiReport.sections.skills.score}
            </div>
            <p className="text-purple-200/70 text-xs leading-relaxed">
              {aiReport.sections.skills.comment}
            </p>
          </motion.div>
        </motion.div>

        {/* Tips for Improvement */}
        <motion.div
          className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/10 mb-6"
          variants={itemVariants}
        >
          <h3 className="text-white font-semibold mb-6 text-lg">
            Tips for Improvement
          </h3>
          <div className="space-y-5">
            {allTips.length > 0 ? (
              allTips.map(({ section, tip }, index) => (
                <motion.div
                  key={`${section}-${index}`}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-purple-500/25"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <span className="text-white text-sm font-bold">
                      {index + 1}
                    </span>
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-purple-200 mb-2">
                      {section}
                    </h4>
                    <p className="text-purple-100/80 text-sm leading-relaxed">
                      {tip}
                    </p>
                  </div>
                </motion.div>
              ))
            ) : (
              <p className="text-purple-200/70 text-sm">
                No tips for improvement provided.
              </p>
            )}
          </div>
        </motion.div>

        {/* Summary Comment */}
        {aiReport.summary_comment && (
          <motion.div
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/10"
            variants={itemVariants}
          >
            <h3 className="text-white font-semibold mb-4 text-lg">Summary</h3>
            <p className="text-purple-100/80 text-sm leading-relaxed">
              {aiReport.summary_comment}
            </p>
          </motion.div>
        )}
      </motion.div>
      <ResumeUploadDialog
        openResumeUpload={openResumeUpload}
        setOpenResumeDialog={() => setOpenResumeDialog(false)}
      />
    </div>
  );
}
