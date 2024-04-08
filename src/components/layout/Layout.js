import { Footer, Toasts, TopNav, AppBar, StartPage } from "@/components/layout";
import { Outlet } from "react-router";
import { locationDataSelector } from "@/redux/modules/LocationReverse";
import { connect } from "react-redux";

const LayOut = ({ location }) => {
  return (
    <div className="w-full flex flex-col min-h-screen bg-gray-50">
      <AppBar />
      <TopNav />
      <div className="flex grow">
        {location.length > 0 ? <Outlet /> : <StartPage />}
      </div>
      <Footer />
      <Toasts />
    </div>
  );
};

const mapStateToProps = (state) => ({
  location: locationDataSelector(state),
});

export default connect(mapStateToProps, null)(LayOut);
