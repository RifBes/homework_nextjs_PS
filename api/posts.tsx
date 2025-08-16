import { PostItem } from "@/interfaces/posts.interface";
import { BASE_URL } from "@/constants";

export async function getPost(): Promise<PostItem[]> {
    const res = await fetch(BASE_URL + "/posts/");

    if (!res.ok) {
        return [];
    }
    return res.json();
}
