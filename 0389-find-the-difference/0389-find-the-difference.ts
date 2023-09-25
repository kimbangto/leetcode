function findTheDifference(s: string, t: string): string {
    for(const char of s) {
      t = t.replace(char, '');
    }
    return t;
};