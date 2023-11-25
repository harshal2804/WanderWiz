export default function place(categories, description, hours, hours_popular, location, name, popularity, rating, related_places, social_media, photos, tips, email, website, tel, timezone, stats) {        
    return {
        getCategory: () => categories,
        getDescription: () => description,
        getHours: () => hours,
        getHoursPopular: () => hours_popular,
        getLocation: () => location,
        getName: () => name,
        getPopularity: () => popularity,
        getRating: () => rating,
        getRelatedPlaces: () => related_places,
        getSocialMedia: () => social_media,
        getPhotos: () => photos,
        getTips: () => tips,
        getEmail: () => email,
        getWebsite: () => website,
        getTel: () => tel,
        getTimezone: () => timezone,
        getStats: () => stats
    }
}