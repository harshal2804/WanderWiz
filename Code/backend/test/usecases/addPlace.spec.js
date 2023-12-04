import addPlace from "application/usecases/place/add";
import place from "entities/place";

describe('addPlace', () => {
  it('creates a new place correctly', () => {
    const placeRepository = { create: jest.fn() };
    const placeData = {
      fsq_id: 'Test ID',
      categories: ['Test Category'],
      description: 'Test Description',
      hours: 'Test Hours',
      hours_popular: 'Test Popular Hours',
      location: 'Test Location',
      name: 'Test Name',
      popularity: 'Test Popularity',
      rating: 'Test Rating',
      related_places: ['Test Related Place'],
      social_media: 'Test Social Media',
      photos: ['Test Photo'],
      tips: 'Test Tips',
      email: 'Test Email',
      website: 'Test Website',
      tel: 'Test Tel',
      timezone: 'Test Timezone',
      stats: 'Test Stats',
    };

    addPlace(
      placeData.fsq_id,
      placeData.categories,
      placeData.description,
      placeData.hours,
      placeData.hours_popular,
      placeData.location,
      placeData.name,
      placeData.popularity,
      placeData.rating,
      placeData.related_places,
      placeData.social_media,
      placeData.photos,
      placeData.tips,
      placeData.email,
      placeData.website,
      placeData.tel,
      placeData.timezone,
      placeData.stats,
      placeRepository
    );

    expect(placeRepository.create).toHaveBeenCalledWith(
      {
        fsq_id: placeData.fsq_id,
        getCategory: expect.any(Function),
        getDescription: expect.any(Function),
        getEmail: expect.any(Function),
        getHours: expect.any(Function),
        getHoursPopular: expect.any(Function),
        getLocation: expect.any(Function),
        getName: expect.any(Function),
        getPhotos: expect.any(Function),
        getPopularity: expect.any(Function),
        getRating: expect.any(Function),
        getRelatedPlaces: expect.any(Function),
        getSocialMedia: expect.any(Function),
        getStats: expect.any(Function),
        getTel: expect.any(Function),
        getTimezone: expect.any(Function),
        getTips: expect.any(Function),
        getWebsite: expect.any(Function),
      }
    );
  });
});