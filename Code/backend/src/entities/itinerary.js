export default function itinerary(name, country, startDate, endDate, activities, user) {        
    return {
        getName: () => name,
        getCountry: () => country,
        getStartDate: () => startDate,
        getEndDate: () => endDate,
        getActivities: () => activities,
        getUser: () => user
    }
}