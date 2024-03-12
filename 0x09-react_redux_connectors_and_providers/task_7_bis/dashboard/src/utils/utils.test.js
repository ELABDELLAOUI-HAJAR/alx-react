import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

test('Get full year', () => {
	const year = getFullYear();
	expect(year).toBe(new Date().getFullYear());
});

test('Get footer (index page)', () => {
	const result = getFooterCopy(true);
	expect(result).toBe('Holberton School');
});

test('Get footer (main dashboard page)', () => {
	const result = getFooterCopy(false);
	expect(result).toBe('Holberton School main dashboard');
});

test('Get latest notification', () => {
	const result = getLatestNotification();
	expect(result).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});
