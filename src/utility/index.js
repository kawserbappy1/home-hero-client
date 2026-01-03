import axios from "axios";

export const uploadImage = async (photoData) => {
  const formData = new FormData();
  formData.append("image", photoData);
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_Image_URL}`,
    formData
  );

  return data?.data?.display_url;
};

export const claudinaryImageUpload = async (photoData) => {
  try {
    const formData = new FormData();
    formData.append("file", photoData);
    formData.append(
      "upload_preset",
      import.meta.env.VITE_CLOUDINARY_PRESET_NAME
    );

    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

    const res = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      formData
    );

    return res.data.secure_url;
  } catch (error) {
    console.error(
      "Cloudinary upload error:",
      error.response?.data || error.message
    );
    return null;
  }
};

export const savedOrGetNewUser = async (userData) => {
  const { data } = await axios.post(
    `${import.meta.env.VITE_BASE_URL}/users`,
    userData
  );

  return data;
};
