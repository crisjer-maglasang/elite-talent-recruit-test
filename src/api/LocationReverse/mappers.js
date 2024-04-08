export const getGeoData = (response) => {
  const geoData = response.map((data) => {
    const { name, lat, lon, country, state } = data;

    return { name, lat, lon, country, state };
  });

  return geoData;
};
