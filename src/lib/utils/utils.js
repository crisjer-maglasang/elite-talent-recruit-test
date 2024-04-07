import classNames from "classnames";
import { twMerge } from "tailwind-merge";

export const mergeClassName = (...classes) => {
  return twMerge(classNames(...classes));
};
