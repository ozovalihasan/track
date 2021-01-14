import setIntervalTime from '../setIntervalTime';

beforeEach(() => {
  Date.now = jest.fn(() => new Date('2000-01-03T00:00:00Z').getTime());
});

describe('setIntervalTime function', () => {
  it('return an array containing three interval', () => {
    const dateNow = Date.now();
    const date = new Date(dateNow);

    const result = setIntervalTime(date, 604800);
    expect(result).toEqual([
      { start: 946850400000, end: 947455200000 },
      { start: 946245600000, end: 946850400000 },
      { start: 945640800000, end: 946245600000 },
    ]);
  });
});
