import { useMemo } from "react";
import classNames from "classnames";

const CustomInput = ({
  id,
  name,
  type,
  disabled,
  formValue,
  value,
  hasError,
  max,
  className,
  onChange,
  register,
  childOrientation,
  ariaDescribedBy,
  placeholder,
  autoComplete,
  baseClasses,
  children,
  onBlur,
  required,
  onKeyDown,
  wrapClasses,
}) => {
  const classes = useMemo(() => {
    const base =
      type !== "checkbox"
        ? baseClasses?.[hasError ? "errorClasses" : "standardClasses"] || ""
        : "";

    return classNames(
      "shadow-sm block w-full sm:text-md rounded-md",
      base,
      className,
      { "text-gray-400": disabled }
    );
  }, [hasError, className, baseClasses, type]);

  return (
    <div className={classNames("flex", wrapClasses)}>
      {childOrientation === "left" ? children : null}
      <input
        {...(register && { ...register(name) })}
        id={id}
        max={max}
        name={name}
        type={type}
        value={register ? formValue : value}
        className={classes}
        {...(onChange && { onChange })}
        disabled={disabled}
        placeholder={placeholder}
        aria-describedby={ariaDescribedBy}
        aria-invalid={hasError}
        autoComplete={autoComplete}
        {...(onBlur && { onBlur })}
        required={required || false}
        onKeyDown={onKeyDown}
      />
      {childOrientation === "right" ? children : null}
    </div>
  );
};

export default CustomInput;
