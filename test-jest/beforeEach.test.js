describe('id test', () => {
  let mockObj = { id: '123' };

  beforeEach(() => {
    mockObj = { id: '234' };
  });

  describe('sample 1', () => {
    it('has valid id', () => {
      expect.assertions(1);
      expect(mockObj.id).toBe('234');
    });
  });
});
