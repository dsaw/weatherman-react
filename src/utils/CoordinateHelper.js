

const parseCoordinates = (latLng) => {
  const latlngArr = latLng.split(',').map(v => parseFloat(v));
  return {lat: latlngArr[0], lng: latlngArr[1]};
};

export default parseCoordinates;
