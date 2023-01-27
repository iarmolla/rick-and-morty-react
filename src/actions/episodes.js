function getEpisodes(page) {
  return {
    type: "GET_EPISODES",
    page
  };
}

function getEpisodesSuccess(episodes) {
  return {
    type: "GET_EPISODES_SUCCESS",
    episodes,
  };
}

export default { getEpisodes, getEpisodesSuccess };
