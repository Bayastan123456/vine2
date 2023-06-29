import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";

const Activation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  let formData = new FormData();

  for (let [key, value] of searchParams.entries()) {
    formData.append(key, value);
  }

  useEffect(() => {
    dispatch(activation(formData));
  });

  return <div>Activation</div>;
};

export default Activation;
