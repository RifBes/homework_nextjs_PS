import { PostItem } from "@/interfaces/posts.interface";
import { BASE_URL } from "@/constants";

export async function getPost(id: string): Promise<PostItem> {
    const res = await fetch(BASE_URL + "/posts/" + id);
    return res.json();
}
