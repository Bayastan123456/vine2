import React from "react";

const FogotPassword = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="RESET PASSWORD"
        className="modal_inp__all"
        onChange={(e) => setResetEmail(e.target.value)}
        value={resetEmail}
      />
    </div>
  );
};

export default FogotPassword;
