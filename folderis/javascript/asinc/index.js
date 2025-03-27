const getData = async (url) => {
  const response = await fetch(url);
  if (response.status === 200) {
    return response.json();
  } else {
    throw "Ivyko klaida";
  }
};
