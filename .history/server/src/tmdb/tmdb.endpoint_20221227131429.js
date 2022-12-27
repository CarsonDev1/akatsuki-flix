import tmdbConfig from "./tmdb.config";

const tmdbEndpoint = {
	mediaList: ({ mediaType, mediaCategory, page }) => tmdbConfig,
};

export default tmdbEndpoint;
