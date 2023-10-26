export class Series {
    id: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    url: string;
    poster: string;

    constructor (id: number, name: string, channel: string, seasons: number, description: string, url: string, poster: string) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.url = url;
        this.poster = poster;
    }


}
