'use client';

import { useParamsStore } from "@/stores/params";
import { useEffect } from "react";

export default function Page({
    params
}: {
    params: { subject: string, post: string }
}) {
    const post = useParamsStore((state) => state.setPost);
    const subject = useParamsStore((state) => state.setSubject);

    useEffect(() => {
        post(params.post);
        subject(params.subject);
    }, [params]);

    return (
        <div>
            <h1>Subject: {params.subject}</h1>
            <h1>Post: {params.post}</h1>
        </div>
    )
}