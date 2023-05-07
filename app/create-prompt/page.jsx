"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import { Form } from "@components";

const CreatePrompt = () => {
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    title: "",
    tag: "",
  });

  const createPrompt = async (e) => {};

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
};

export default CreatePrompt;
