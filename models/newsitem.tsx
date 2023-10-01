type NewsItemType = {item : {
    url_hash:string,
    news_url:string,
    headline:string,
    summary:string,
    published:string,
    media : {
        image_url : string,
        video_url: string|null,
    },
}};

export default NewsItemType;