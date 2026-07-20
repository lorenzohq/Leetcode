function groupAnagrams(strs: string[]): string[][] {
    let map: Map<string, Array<string>> = new Map();
    for (let str of strs) {
        const key = str.split("").sort().join("")
        if (map.has(key)) {
            let prevArr = map.get(key)!
            map.set(key, [...prevArr, str])
        } else {
            map.set(key, [str])
        }
    }

    return Array.from(map.values());
};