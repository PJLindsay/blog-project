"use server";

// Server actions go in here...
import { redirect } from "next/navigation";
import { storePost } from "@/lib/posts";

// example of a server action
export async function createPost(prevState, formData) {
  const title = formData.get("title");
  const image = formData.get("image");
  const content = formData.get("content");

  let errors = [];

  if (!title || title.length.trim().length === 0) {
    errors.push("Title is required.");
  }

  if (!content || content.length.trim().length === 0) {
    errors.push("Content is required.");
  }

  if (!image || image.size === 0) {
    errors.push("Image is required!");
  }

  if (errors.length > 0) {
    return { errors };
  }

  storePost({
    imageUrl: "",
    title,
    content,
    userId: 1,
  });

  redirect("/feed");
}