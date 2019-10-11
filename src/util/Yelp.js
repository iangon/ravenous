const apiKey =
  "PTsmLzHQQMqOmdsYca6MaEtzq1enuNk3FeyEU4xWyTIxgmyX7Wm9GoJ3I3iLbhlwTkI6cpcrpZC6SI22G1F7KKe5m5Skdtw1W77KiP6KcGnJ6xeHsyIjQf4uRQKgXXYx";

const Yelp = {
  search: (term, location, sortBy) => {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      { headers: { Authorization: `Bearer ${apiKey}` } }
    )
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        if (jsonResponse.businesses) {
          console.log(jsonResponse.businesses);
          return jsonResponse.businesses.map(business => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count
            };
          });
        }
      });
  }
};

export default Yelp;
