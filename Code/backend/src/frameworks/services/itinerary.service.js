import axios from 'axios';

export default function itineraryService(){

    const placeSearch = async (display_name, country, latitude, longitude, startDate, endDate) => {

        const placeSearchApi = process.env.VITE_PLACE_API;
        const startDateFormatted = new Date(startDate).toISOString().split('T')[0];
        const endDateFormatted = new Date(endDate).toISOString().split('T')[0];
        const days = Math.floor((Date.parse(endDateFormatted) - Date.parse(startDateFormatted)) / 86400000) + 1;
        const activities = await axios.get(`${placeSearchApi}search?ll=${latitude}%2C${longitude}&radius=100000&categories=10000%2C14000%2C16000&fields=fsq_id%2Cname%2Chours_popular&sort=POPULARITY&limit=${(days - 1)*4}`, {
                headers: {
                    accept: "application/json",
                    authorization: `${process.env.VITE_API_AUTH}`
                }
            })
        
        const activitiesWithPhoto = await Promise.all(activities.data.results.map(async (place) => {
            const placeWithPhoto = await axios.get(`${placeSearchApi}${place.fsq_id}/photos?limit=1&sort=POPULAR&classifications=outdoor%2Cindoor`, {
                headers: {
                    accept: "application/json",
                    authorization: `${process.env.VITE_API_AUTH}`
                }
            }).then((res) => {
                return {
                    ...place,
                    photo: res.data[0]
                }
            }).catch((err) => {
                console.log(err)
            })
            return placeWithPhoto;
        }))

        return {
            name: display_name,
            country: country,
            startDate: startDate,
            endDate: endDate,
            activities: activitiesWithPhoto,
        }
    }

    return {
        placeSearch
    }
}