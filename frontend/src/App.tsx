import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { useMutation } from "@apollo/client";

import { CreateUserMutation } from "./client/user";

import { useCreateUserMutation } from "./generated/graphql";

function App() {
  const [createUser, { data }] = useCreateUserMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUser({
      variables: {
        age,
        favoriteFood,
        firstName,
        height,
      },
    });
  };

  const [age, setAge] = useState<number>(0);
  const [favoriteFood, setFavoriteFood] = useState("");
  const [firstName, setFirstName] = useState("");
  const [height, setHeight] = useState<number>(0);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label>Age</label>
        <input
          value={age}
          type="number"
          onChange={(e) => setAge(e.target.valueAsNumber)}
        />
        <label>Height</label>
        <input
          value={height}
          onChange={(e) => setHeight(e.target.valueAsNumber)}
        />
        <label>Favorite Food</label>
        <input
          value={favoriteFood}
          onChange={(e) => setFavoriteFood(e.target.value)}
        />
        <button type="submit" />
      </form>
    </div>
  );
}

export default App;
