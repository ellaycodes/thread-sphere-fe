import { BodyHeader } from "./BodyHeader"
import { ArticleList } from "./ArticleList"

export const AllArticles = () => {
    return (
        <>
        <BodyHeader title={"Trending Articles"}/>
        <ArticleList />
        </>
    )
}