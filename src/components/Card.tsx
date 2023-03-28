// type Props = {
//   href?: string;
//   title: string;
//   description: string;
// };

// const Card = (props: Props) => {
//   return (
//     <a
//       target="_blank"
//       rel="noopener noreferrer"
//       href={props.href}
//       className="block max-w-md max-h-full w-1/1 ml-3  md:w-1/6 p-6 bg-transparent border border-gray-600 rounded-lg shadow hover:shadow-xs hover:shadow-white"
//     >
//       <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
//         {props.title}
//       </h5>
//       <p className="font-normal text-gray-400">{props.description}</p>
//     </a>
//   );
// };

// export default Card;
import { FC } from "react";

type Props = {
  href: string;
  title: string;
  description: string;
  // logoUrl: string;
};

const Card: FC<Props> = ({ href, title, description }) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className="block max-w-md max-h-full w-1/1 ml-3  md:w-1/6 p-6 bg-transparent border border-gray-600 rounded-lg shadow hover:shadow-xs hover:shadow-white"
    >
      <div className="mb-2 flex items-center">
        {/* <img className="h-6 w-6 mr-2" src={logoUrl} alt="Logo" /> */}
        <h5 className="text-2xl font-bold tracking-tight text-white">
          {title}
        </h5>
      </div>
      <p className="font-normal text-gray-400">{description}</p>
    </a>
  );
};

export default Card;
