// import { FC } from "react";

// type Props = {
//   title: string;
//   level: string;
// };

// const SkillCard: FC<Props> = ({ title, level }) => {
//   const levels: { [key: string]: string } = {
//     Beginner: "bg-red-500",
//     Intermediate: "bg-yellow-500",
//     Advanced: "bg-green-500",
//   };

//   return (
//     <div className="max-w-md w-full p-6 bg-transparent border border-gray-600 rounded-lg shadow hover:shadow-xs hover:shadow-white">
//       <h5 className="text-2xl font-bold tracking-tight text-white">{title}</h5>
//       <div className="h-2 my-4">
//         <div className={`w-full h-full rounded-full ${levels[level]}`}></div>
//       </div>
//       <p className="font-normal text-gray-400">{level}</p>
//     </div>
//   );
// };

// export default SkillCard;
// import { FC } from "react";

// type Props = {
//   title: string;
//   level: string;
//   category: string;
// };

// const SkillCard: FC<Props> = ({ title, level, category }) => {
//   const levels: { [key: string]: string } = {
//     Beginner: "bg-red-500",
//     Intermediate: "bg-yellow-500",
//     Advanced: "bg-green-500",
//   };

//   const categories: { [key: string]: string } = {
//     "Programming Languages": "text-yellow-400",
//     "Frameworks and Libraries": "text-green-400",
//     "Servers, Databases and Cloud Hosting": "text-blue-400",
//   };

//   return (
//     <div className="max-w-md w-full p-6 bg-transparent border border-gray-600 rounded-lg shadow hover:shadow-xs hover:shadow-white">
//       <h5
//         className={`text-2xl font-bold tracking-tight ${categories[category]}`}
//       >
//         {title}
//       </h5>
//       <div className="h-2 my-4">
//         <div className={`w-full h-full rounded-full ${levels[level]}`}></div>
//       </div>
//       <p className="font-normal text-gray-400">{level}</p>
//     </div>
//   );
// };

// export default SkillCard;
import { FC } from "react";

type Props = {
  title: string;
  level: string;
  category: string;
};

const SkillCard: FC<Props> = ({ title, level, category }) => {
  const levels: { [key: string]: string } = {
    Beginner: "bg-red-500",
    Intermediate: "bg-yellow-500",
    Advanced: "bg-green-500",
  };

  return (
    <div className="max-w-md w-full p-6 bg-transparent border border-gray-600 rounded-lg shadow hover:shadow-xs hover:shadow-white">
      <h5 className="text-2xl font-bold tracking-tight text-white">{title}</h5>
      {/* <p className="font-normal text-gray-400">{category}</p> */}
      <div className="h-2 my-4">
        <div className={`w-full h-full rounded-full ${levels[level]}`}></div>
      </div>
      <p className="font-normal text-gray-400">{level}</p>
    </div>
  );
};

export default SkillCard;
