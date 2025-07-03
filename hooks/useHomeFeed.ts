import { useCallback, useState, useEffect } from "react";
import firestore, { Post } from "@/lib/firestore";

export function useHomeFeed() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchPosts = useCallback(async () => {
    try {
      const fetchedPosts = await firestore.getPost();
      const sorted = fetchedPosts.sort(
        (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
      );
      setPosts(sorted);
    } catch (err) {
      console.error("Failed to fetch posts:", err);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchPosts();
    setRefreshing(false);
  };

  return {
    posts,
    refreshing,
    handleRefresh
  };
}
