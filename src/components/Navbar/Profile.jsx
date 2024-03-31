import { IoIosLogIn } from "react-icons/io";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { CiLogout } from "react-icons/ci";
import { toast } from "react-toastify";

const Profile = () => {
  const { user, logOut } = useAuth();

  // handel LogOut
  const handleLogOut = async () => {
    await logOut();
    toast.success("user Logged out successfully", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div>
      {user ? (
        <div className="flex items-center justify-center gap-4">
          <img
            width={40}
            src="https://i.ibb.co/t2tKFTF/user2-1.jpg"
            alt="Profile.png"
          />
          <button
            onClick={handleLogOut}
            className="flex items-center gap-2 hover:text-[#ef6f18]"
          >
            <CiLogout className="text-2xl"></CiLogout> LogOut
          </button>
        </div>
      ) : (
        <Link
          to="/login"
          className="flex items-center gap-2 hover:border hover:text-[#ef6f18]"
        >
          <IoIosLogIn className="text-2xl"></IoIosLogIn> Login
        </Link>
      )}
    </div>
  );
};

export default Profile;
