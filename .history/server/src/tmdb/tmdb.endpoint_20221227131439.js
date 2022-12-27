import tmdbConfig from "./tmdb.config.js";

const tmdbEndpoint = {
	mediaList: ({ mediaType, mediaCategory, page }) => tmdbConfig,
};

export default tmdbEndpoint;
