import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

test('Get full year', () => {
    const year = getFullYear();
    expect(year).toBe(new Date().getFullYear());
});

test('Get footer when index is True', () => {
    const result = getFooterCopy(true);
    expect(result).toBe('Holberton School');
});

test('Get footer when index is False', () => {
    const result = getFooterCopy(false);
    expect(result).toBe('Holberton School main dashboard');
});

test('Get latest notification', () => {
    const result = getLatestNotification();
    expect(result).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});
