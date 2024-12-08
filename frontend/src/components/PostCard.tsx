interface postCardProps {
    title: string,
    content: string,
    authorName: string,
    publishedDate: string
}

export const PostCard = ({
    title,
    content,
    authorName,
    publishedDate
}: postCardProps ) => {
    return (
        <div className="border-b pb-8 mt-6">
            <div className="flex">
                <Avatar authorName={authorName}/>
                <div className="pl-2 font-light">
                    {authorName}
                </div>
                <div className="pl-1 pr-1 text-slate-500">
                    &#x2022;
                </div>
                <div className="text-slate-500 font-light">
                    {publishedDate}
                </div>
            </div>
            <div className="pt-2 font-bold text-2xl">
                {title}
            </div>
            <div className="pt-1 font-light text-md">
                {content.slice(0, 100) + "..."}
            </div>
            <div className="pt-5 text-slate-500">
                {`${Math.ceil(content.length / 100)} min read`}
            </div>

        </div>
    )
}

export const Avatar = ({authorName, size = "small"} : {authorName: string, size?: "small" | "big"}) => {
    return<div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
    <span className={`text-gray-600 dark:text-gray-300 ${size === "small" ? "text-xs" : "text-xl"}`}>
        {authorName[0].toUpperCase()}                    
    </span>
    </div>
}