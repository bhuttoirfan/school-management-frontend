import axiosInstance from "../config/axios";

export const createSchool = async () => {
  const allSchools = await axiosInstance.post("/session/1/students");
  console.log("--------------");
  console.log(allSchools);
  console.log("--------------");
};
