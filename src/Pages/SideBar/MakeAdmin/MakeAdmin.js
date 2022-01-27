import { Alert, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const {token} = useAuth();

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleMakeAdmin = (e) => {
    const user = { email };

    fetch("https://peaceful-sea-14435.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
          'authorization' : `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
          setEmail("");
          console.log(data);
        }
      });

    e.preventDefault();
  };
  return (
    <div>
      <h2>Make a admin</h2>
      <form onSubmit={handleMakeAdmin}>
        <TextField
          sx={{ width: "50%", m: 1 }}
          label="Email"
          type="email"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <Button type="submit" variant="contained">
          Make Admin
        </Button>
      </form>
      {success && <Alert severity="success">Made admin successfull</Alert>}
    </div>
  );
};

export default MakeAdmin;
