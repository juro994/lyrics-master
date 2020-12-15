interface ArtistCredit {
    'name': string;
}

interface Release {
    'title': string;
    'artist-credit': ArtistCredit[];
}

export default Release;