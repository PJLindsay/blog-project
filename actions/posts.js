"use server";

// Server actions go in here...
import { redirect } from "next/navigation";
import { storePost, updatePostLikeStatus } from "@/lib/posts";
import { uploadImage } from "@/lib/cloudinary";
import { revalidatePath } from "next/cache";

// example of a server action
export async function createPost(prevState, formData) {
  const title = formData.get("title");
  const image = formData.get("image");
  const content = formData.get("content");

  console.log("title ==> ", title);

  let errors = [];

  if (!title || title.trim().length === 0) {
    errors.push("Title is required.");
  }

  if (!content || content.trim().length === 0) {
    errors.push("Content is required.");
  }

  if (!image || image.size === 0) {
    errors.push("Image is required!");
  }

  if (errors.length > 0) {
    return { errors };
  }

  let imageUrl;

  try {
    imageUrl = await uploadImage(image);
  } catch (error) {
    throw new Error(
      "Image upload failed, post was not created. Please try again later.",
    );
  }

  storePost({
    imageUrl: imageUrl,
    title,
    content,
    userId: 1,
  });

  // revalidate *all data* - we will tweak cache refreshing later\
  // because of aggressive caching in production (and pre-built)...
  // we won't see new posts (because they were created AFTER the build)
  // revalidatePath()... to update cache will make this problem in production go away (npm run build && npm run start)
  revalidatePath("/", "/layout");
  redirect("/feed");
}

export async function togglePostLikeStatus(postId) {
  await updatePostLikeStatus(postId, 2);
  revalidatePath("/feed");
  // example of revalidate *all data*
  //revalidatePath("/", "/layout");
}
