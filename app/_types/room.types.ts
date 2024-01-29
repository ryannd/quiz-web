import { SpotifyPlaylist } from "./spotify.types";

export type Player = {
    id: string;
    name: string;
    score: number;
    answer: string;
    room: string;
    ready: boolean;
}

export type Room = {
    id: string;
    hostId: string;
    players: { [id: string]: Player };
    playlist: SpotifyPlaylist | undefined;
    numReady: number;
}