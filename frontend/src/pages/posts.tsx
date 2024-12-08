import { AppBar } from "../components/AppBar"
import { PostCard } from "../components/postCard"

export const Posts = () => {
    return <div>
        <div>
            <AppBar />
        </div>
        <div className="flex justify-center">
            <div className=" max-w-2xl">
                <PostCard 
                    title = {"How an ugly single page website makes $5000 a month with affiliate marketing"}
                    content={"No need to create a fancy and modern website with hundreds of pages to make money online. Making money online is the dream for man"}
                    authorName={"Aruj Garg"}
                    publishedDate={"Dec 8, 2024"}   
                />

                <PostCard 
                    title = {"How an ugly single page website makes $5000 a month with affiliate marketing"}
                    content={"No need to create a fancy and modern website with hundreds of pages to make money online. Making money online is the dream for man"}
                    authorName={"Aruj Garg"}
                    publishedDate={"Dec 8, 2024"}   
                />

                <PostCard 
                    title = {"How an ugly single page website makes $5000 a month with affiliate marketing"}
                    content={"No need to create a fancy and modern website with hundreds of pages to make money online. Making money online is the dream for man"}
                    authorName={"Aruj Garg"}
                    publishedDate={"Dec 8, 2024"}   
                />
            </div>
        </div>
    </div>
}