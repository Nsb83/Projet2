export class Video {
    videoId: string;
    title: string;
    thumbnail: string;

    constructor(
    videoId: string,
    title: string,
    thumbnail: string
    ) {
    this.videoId = videoId;
    this.title = title;
    this.thumbnail = thumbnail;
    }
}
