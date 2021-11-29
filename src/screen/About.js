import { getData } from "../Redux-config/Action";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const About = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData);
  }, []);

  return <div></div>;
};

export default About;
