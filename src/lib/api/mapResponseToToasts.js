export const mapErrorToastsData = (error) => {
  const { message, name } = error ?? {};

  return [
    {
      type: "error",
      message: message,
      details: name,
    },
  ];
};

export const mapSuccessToastsData = (response) => {
  const { message } = response?.data?.attributes ?? {};

  return [
    {
      type: "success",
      message: message,
      details: null,
    },
  ];
};
