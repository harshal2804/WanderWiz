export default function itinerary(name, city, country, startDate, endDate, activities) {        
    return {
        getName: () => name,
        getCity: () => city,
        getCountry: () => country,
        getStartDate: () => startDate,
        getEndDate: () => endDate,
        getActivities: () => activities
    }
}