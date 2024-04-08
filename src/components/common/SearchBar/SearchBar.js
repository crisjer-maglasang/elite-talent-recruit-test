import { GoSearch } from "react-icons/go";
import PropTypes from "prop-types";
import { memo, useEffect, useState } from "react";
import { CustomErrorMessage } from "@/components/common/Form";
import { removeTrailingSpaces } from "@/lib/utils/strings";
import { MIN_2_CHARS, validateStringLength } from "@/lib/validations";
import { addFsExcludeClass, mergeClassName } from "@/lib/utils";
import classNames from "classnames";

const SearchBar = ({
  label,
  placeholder,
  searchText,
  inputName,
  disabled,
  className,
  onSearchClick,
  onSearchValueChange,
  labelClassName,
  inputClassName,
  iconClassName,
  wrapperClassName,
}) => {
  const [searchValue, setSearchValue] = useState("");

  const [isValid, setIsValid] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setSearchValue(searchText);
  }, [searchText]);

  useEffect(() => {
    const isValid = validateStringLength(searchValue, 2, "min");

    setIsValid(isValid);

    if (isSubmitted && isValid) {
      const defaultSearchValue = searchText;
      const removedSpacesValue = removeTrailingSpaces(searchValue);
      if (removedSpacesValue !== defaultSearchValue) {
        onSearchClick({
          searchText: removedSpacesValue,
        });
      }
    }
  }, [isSubmitted]);

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);

    if (onSearchValueChange) {
      onSearchValueChange(event.target.value);
    }

    if (isSubmitted) {
      setIsSubmitted(false);
    }
    if (!isValid) {
      setIsValid(true);
    }
  };

  const onSubmitSearch = (event) => {
    event.preventDefault();

    setIsSubmitted(true);
  };

  return (
    <form
      onSubmit={onSubmitSearch}
      className={mergeClassName("relative", className)}
    >
      {label && (
        <label
          htmlFor="search"
          className={classNames(
            labelClassName ?? "block mb-2 text-sm text-gray-900"
          )}
        >
          {label}
        </label>
      )}
      <div
        className={classNames(
          wrapperClassName ??
            "flex border-2 border-gray-700 rounded-md px-2 py-1 gap-2 focus:outline"
        )}
      >
        <input
          id="search"
          type="text"
          name={inputName}
          value={searchValue}
          onChange={onChangeSearchValue}
          placeholder={placeholder}
          disabled={disabled}
          className={classNames(inputClassName ?? " focus:outline-none")}
        />
        <button type="submit" className={mergeClassName(iconClassName)}>
          <GoSearch className="h-5 w-5 text-primary-300" />
        </button>
      </div>
      {!isValid ? (
        <CustomErrorMessage
          text={MIN_2_CHARS}
          className="absolute left-0 -bottom-6"
        />
      ) : null}
    </form>
  );
};

SearchBar.defaultProps = {
  disabled: false,
  placeholder: "Search",
};

SearchBar.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  searchText: PropTypes.string,
  inputName: PropTypes.string,
  selectName: PropTypes.string,
  onSearchClick: PropTypes.func,
  onSearchValueChange: PropTypes.func,
};

export default memo(SearchBar);
