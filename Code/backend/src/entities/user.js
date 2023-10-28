export default  function user(name, email, password, currentCity, itineraries) {
    return {
        getName: () => name,
        getEmail: () => email,
        getPassword: () => password,
        getCurrentCity: () => currentCity,
        getItineraries: () => itineraries,
    }
}