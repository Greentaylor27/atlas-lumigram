import { db } from "@/firebaseConfig";
import { addDoc, collection, getDocs } from "firebase/firestore";

export type Post = {
  caption: string;
  image: string;
  createdAt: Date;
  createBy: string;
}

const posts = collection(db, "posts");

async function addPost(post: Post) {
  await addDoc(posts, post);
}

async function getPost() {
  const result = await getDocs(posts);
  const data = result.docs.map((doc) => {
    const postData = doc.data();

    // console.log("Raw postData: ", postData);
    // console.log("Raw postData created at: ", postData.createdAt);

    return {
      ...postData,
      createdAt: postData.createdAt?.toDate?.() ?? new Date(0),
    } as Post;
  });

  // console.log("Final data array: ", data);
  return data;
}

export default {
  addPost,
  getPost,
}
