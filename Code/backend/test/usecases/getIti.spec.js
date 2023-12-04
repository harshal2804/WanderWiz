import getItinerary from "application/usecases/itinerary/getItinerary";

describe('getItinerary', () => {
  it('calls getById method of itineraryRepository with correct argument and returns its result', () => {
    const itineraryRepository = { getById: jest.fn() };
    const id = 1;
    const getByIdResult = { id: 1 };
    itineraryRepository.getById.mockReturnValue(getByIdResult);

    const result = getItinerary(id, itineraryRepository);

    expect(itineraryRepository.getById).toHaveBeenCalledWith(id);
    expect(result).toEqual(getByIdResult);
  });
});