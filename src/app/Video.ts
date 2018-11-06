export class Video {
    idKind:string;
    channelId:string;
    videoId:string;
    title:string;

    constructor(
    idKind:string,
    channelId:string,
    videoId:string,
    title:string,
    ) {
    this.idKind = idKind;
    this.channelId = channelId;
    this.videoId = videoId;
    this.title = title;
    }
}