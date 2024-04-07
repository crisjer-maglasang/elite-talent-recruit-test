import { memo, useEffect, useRef } from "react";
import { ToastContainer as BaseToastContainer } from "react-toastify";

const ToastContainer = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    containerRef.current?.setAttribute("data-headlessui-portal", "");
  }, []);

  return (
    <BaseToastContainer
      ref={containerRef}
      enableMultiContainer={true}
      position="bottom-right"
      autoClose={5000}
      pauseOnHover={true}
      pauseOnFocusLoss={true}
      theme="light"
    />
  );
};

export default memo(ToastContainer);
