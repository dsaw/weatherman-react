
 const fetchIPLocation = async () => {
  var response
  try {
    response = await fetch('https://ipapi.co/json').then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return  response.json();
  });

  }
  catch (error) {
    response = {};
    console.log(error);
  }
  finally {
    return response;
  }

}

export default fetchIPLocation;
