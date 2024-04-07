import { toast, toastType, Message, ToastContainer } from "@/components";
import { toastsSelector, flushToastsAction } from "@/redux/toasts";
import { useLayoutEffect } from "react";
import { connect } from "react-redux";

const Toasts = ({ toasts, flushToasts }) => {
  useLayoutEffect(() => {
    if (!toasts.length) {
      return;
    }

    toasts.forEach(({ type, message, details }) => {
      toast(<Message message={message} details={details} />, {
        type,
        ...(type === toastType.ERROR || !!details
          ? {
              autoClose: false,
              closeOnClick: false,
            }
          : {}),
      });
    });

    flushToasts();
  }, [toasts]);

  return <ToastContainer />;
};

const mapStateToProps = (state) => ({
  toasts: toastsSelector(state),
});

const mapDispatchToProps = {
  flushToasts: flushToastsAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Toasts);
