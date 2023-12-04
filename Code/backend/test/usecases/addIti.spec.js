import addItinerary from "application/usecases/itinerary/add"

describe('addItinerary', () => {
  it('creates a new itinerary correctly', () => {
    const itineraryRepository = { create: jest.fn() };
    const itineraryData = {
      name: 'Test Itinerary',
      country: 'Test Country',
      startDate: new Date(),
      endDate: new Date(),
      activities: ['Test Activity'],
      user: 'Test User',
    };

    addItinerary(
      itineraryData.name,
      itineraryData.country,
      itineraryData.startDate,
      itineraryData.endDate,
      itineraryData.activities,
      itineraryData.user,
      itineraryRepository
    );

    expect(itineraryRepository.create).toHaveBeenCalledWith(
      {
        getActivities: expect.any(Function),
        getCountry: expect.any(Function),
        getEndDate: expect.any(Function),
        getName: expect.any(Function),
        getStartDate: expect.any(Function),
        getUser: expect.any(Function),
      }
    );
  });
});