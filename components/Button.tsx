import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  className,
  type = "button",
  ...props
}: Props) {
  return <button {...props} className={`${className || ""} px-4 sm:px-10 py-3 font-bold text-white uppercase transition duration-300 ease-in-out rounded-full bg-violet focus:bg-purple focus:shadow focus:outline-none hover:bg-purple hover:shadow active:bg-indigo active:shadow-none disabled:shadow-none disabled:bg-dark-steel disabled:cursor-not-allowed`} type={type}>{children}</button>;
}
