import {redirect} from "react-router";

export async function fetchPostData(url: string) {
    try {
        const request = await fetch(url);
        if(!request.ok) throw new Error("Some error ocured");
        const text = await request.text();

        if(text.includes("<!doctype html>")) {
            redirect("/404");
            return;
        }

        return text;

    } catch (e) {
        console.error(e);
    }

}
