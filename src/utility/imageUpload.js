import axios from "axios";

export const uploadImage = async (photoData) => {
  const formData = new FormData();
  formData.append("image", photoData);
  const { data } = axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_Image_URL}`,
    formData
  );
  return data?.data?.display_url;
};
