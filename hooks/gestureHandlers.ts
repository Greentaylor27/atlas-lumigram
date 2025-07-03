import type { Post } from "@/lib/firestore";
import firestore from "@/lib/firestore";
import { useAuth } from "@/components/AuthProvider";

export function handleDoublePress(item: Post, userId: string) {
  // console.log(`adding ${item.image} to favorites`);
  alert('Added to Favorites!!');
  firestore.addToFavorite(item, userId);
};

export function handleLongPress(item: Post) {
  //console.log("LONG PRESS TRIGGERED");
  alert(item.caption);
};

