import getItineraries from "application/usecases/itinerary/getItineraries";

describe('getItineraries', () => {
  it('calls getAll method of itineraryRepository with correct arguments and returns its result', () => {
    const itineraryRepository = { getAll: jest.fn() };
    const limit = 5;
    const pageNumber = 1;
    const getAllResult = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
    itineraryRepository.getAll.mockReturnValue(getAllResult);

    const result = getItineraries(limit, pageNumber, itineraryRepository);

    expect(itineraryRepository.getAll).toHaveBeenCalledWith(limit, pageNumber);
    expect(result).toEqual(getAllResult);
  });
});