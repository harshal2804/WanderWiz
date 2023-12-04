import getPlaceDetail from "application/usecases/place/getPlaceDetail";

describe('getPlaceDetail', () => {
  it('calls getByApiId method of placeRepository with correct argument and returns its result', () => {
    const placeRepository = { getByApiId: jest.fn() };
    const fsq_id = 'Test ID';
    const getByApiIdResult = { fsq_id: 'Test ID' };
    placeRepository.getByApiId.mockReturnValue(getByApiIdResult);

    const result = getPlaceDetail(fsq_id, placeRepository);

    expect(placeRepository.getByApiId).toHaveBeenCalledWith(fsq_id);
    expect(result).toEqual(getByApiIdResult);
  });
});