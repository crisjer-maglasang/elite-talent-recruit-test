import { Footer, Toasts, TopNav, AppBar } from "@/components/layout";
import { Outlet } from "react-router";

const LayOut = () => {
  return (
    <div className="w-full flex flex-col min-h-screen bg-gray-50">
      <AppBar />
      <TopNav />
      <div className="grow">
        <Outlet />
      </div>
      <Footer />
      <Toasts />
    </div>
  );
};

export default LayOut;
