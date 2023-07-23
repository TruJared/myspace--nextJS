"use client";

import style from "./ProfileForm.module.css";
import { useState, useEffect } from "react";

  // TODO convert this use actions

export function ProfileForm({ user }: any) {
  const [message, setMessage] = useState("");
  useEffect(() => {}, [message]);

  const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    setMessage("Updating Profile");

    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const body = {
      name: formData.get("name"),
      bio: formData.get("bio"),
      age: formData.get("age"),
      image: formData.get("image"),
    };

    try {
      const res = await fetch("/api/user", {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });

      await res.json();
      setMessage("Profile updated successfully!");
    } catch (error) {
      setMessage("Error updating profile");
    }
  };

  return (
    <div>
      <h2>Edit Your Profile</h2>
      <form onSubmit={updateUser}>
        <label htmlFor="name">Name</label>
        <input
          className={style.input}
          type="text"
          name="name"
          defaultValue={user?.name ?? ""}
        />
        <label htmlFor="bio">Bio</label>
        <textarea
          className={style.input}
          name="bio"
          cols={30}
          rows={10}
          defaultValue={user?.bio ?? ""}
        ></textarea>
        <label htmlFor="age">Age</label>
        <input
          className={style.input}
          type="text"
          name="age"
          defaultValue={user?.age ?? 0}
        />
        <label htmlFor="image">Profile Image URL</label>
        <input
          className={style.input}
          type="text"
          name="image"
          defaultValue={user?.image ?? ""}
        />
        <p>{message}</p>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
