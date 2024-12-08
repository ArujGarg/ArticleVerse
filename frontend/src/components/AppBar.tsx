import { Avatar } from "./postCard"

export const AppBar = () => {
    return <div className="border-b flex justify-center flex-col px-10 py-4">
        <div className="flex justify-between">
            <div className="flex justify-center flex-col font-bold text-2xl">
                Medium
            </div>
            <div>
                <Avatar size="big" authorName="Aruj Garg" />
            </div>
        </div>
    </div>
}