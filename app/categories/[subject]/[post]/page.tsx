export default function Page({
    params
}: {
    params: { subject: string, post: string }
}) {
    return (
        <div>
            <h1>Subject: {params.subject}</h1>
            <h1>Post: {params.post}</h1>
        </div>
    )
}