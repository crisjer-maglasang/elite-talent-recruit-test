import classNames from "classnames";
import { twMerge } from "tailwind-merge";

export const mergeClassName = (...classes) => {
  return twMerge(classNames(...classes));
};

export const splitPathBySlashes = (path) => {
  const cleanedPath = path.replace(/^\/|\/$/g, "");

  return cleanedPath.split("/").join(".");
};

export const addFsExcludeClass = (classes = "") =>
  mergeClassName(classes, "fs-exclude");
