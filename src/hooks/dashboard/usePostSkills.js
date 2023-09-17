import axios from "axios";
import { useCookies } from "react-cookie";

const usePostSkills = () => {
  const [, setCookie] = useCookies(["studentId"]);
  return async (studentId, skills) => {
    try {
      const postData = {
        ...skills,
      };
      await axios.post(`https://api.projectszero.tech/skills/${studentId}`, postData);
      setCookie("studentId", studentId);
      console.log(postData);
      alert("送出成功");
    } catch (error) {
      alert(error);
      console.log(studentId);
      console.log(skills);
    }
  };
};

export default usePostSkills;
