import { PostItem } from "@/interfaces/posts.interface";
import { API } from "./api";

export async function getPost(): Promise<PostItem[]> {
    const res = await fetch(API.posts.get);

    if (!res.ok) {
        return [];
    }
    return res.json();
}
