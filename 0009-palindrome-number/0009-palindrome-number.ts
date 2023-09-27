function isPalindrome(x: number): boolean {
    const s = x.toString(10).split('');
    const reverse = Array.from(s);
    reverse.reverse();
    console.log(s, reverse);
    return (s.join('') === reverse.join(''));
};