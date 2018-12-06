describe('jest verification', () => {
	it('should render valid snapshot', () => {
		const element = { testProp1: 'test', testProp2: 124251234 };
		expect(element).toMatchSnapshot();
	});
	it('should assert correctly', () => {
		expect(1).toBe(1);
	});
});
