import React, { useContext, useState, useEffect } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthContex";

const Profile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setPhoto(
        user.photoURL ||
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
      );
    }
  }, [user]);

  const handleSave = async () => {
    setLoading(true);
    try {
      await updateUserProfile(name, photo);
      Swal.fire({
        title: "Profile Updated!",
        text: "Your profile has been successfully updated.",
        icon: "success",
        confirmButtonColor: "#2f5349",
      });
      setEditMode(false);
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message,
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-10 px-4 flex justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-md w-full border border-greenColor">
        <h2 className="text-3xl font-bold text-greenColor text-center mb-6">
          My Profile
        </h2>

        <div className="flex justify-center mb-6">
          <img
            src={photo}
            alt="User"
            className="w-32 h-32 rounded-full border-4 border-greenColor object-cover"
          />
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Full Name
            </label>
            {editMode ? (
              <input
                type="text"
                value={name}
                defaultValue={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-greenColor"
              />
            ) : (
              <p className="text-gray-800 font-medium">
                {name || "Not provided"}
              </p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Email
            </label>
            <p className="text-gray-800 font-medium">{user?.email}</p>
          </div>

          {editMode && (
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Photo URL
              </label>
              <input
                type="text"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-greenColor"
              />
            </div>
          )}

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Last Login
            </label>
            <p className="text-gray-800 font-medium">
              {user?.metadata?.lastSignInTime
                ? new Date(user.metadata.lastSignInTime).toLocaleString()
                : "N/A"}
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          {!editMode ? (
            <button
              onClick={() => setEditMode(true)}
              className="bg-greenColor text-yellowColor px-6 py-2 rounded-md font-semibold hover:bg-yellowColor hover:text-greenColor transition-all duration-300"
            >
              Edit Profile
            </button>
          ) : (
            <>
              <button
                onClick={handleSave}
                disabled={loading}
                className="bg-greenColor text-yellowColor px-6 py-2 rounded-md font-semibold hover:bg-yellowColor hover:text-greenColor transition-all duration-300 disabled:opacity-60"
              >
                {loading ? "Saving..." : "Save Changes"}
              </button>
              <button
                onClick={() => setEditMode(false)}
                className="bg-gray-300 text-gray-800 px-6 py-2 rounded-md font-semibold hover:bg-gray-400 transition-all duration-300"
              >
                Cancel
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
