// 3. Longest Substring Without Repeating Characters
// Runtime: 112 ms, faster than 70.87% of JavaScript online submissions for Longest Substring Without Repeating Characters.
//Memory Usage: 46.1 MB, less than 84.33% of JavaScript online submissions for Longest Substring Without Repeating Characters.

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    let current = [];
    let longest = 0;
    
    for (let i = 0; i < s.length; i++) {
        const currentChar = current.indexOf(s[i]);
        if (currentChar !== -1) {
            current.splice(0, currentChar + 1);
        }
        current.push(s[i]);
        longest = Math.max(longest, current.length);
    }
    return longest;
};

// Found this other solution using Sets, saving for myself to study

const lengthOfLongestSubstring = function (s) {
    // Initialise a set to store the longest string in
    let longest = 0;

    // Loop through the provided string
    for (let i = 0; i < s.length; i++) {
        // Initialise a set to store the string created from the current point
        let current = new Set();

        // Loop through the letters from the current point
        for (let x = i; x < s.length; x++) {
            // Check if the current letter exists in the current Set
            if (current.has(s[x])) {
                // Move on from the current letter without adding it (as it already exists in the set)
                break;
            } else {
                // Character not found, add it to the set
                current.add(s[x]);
            }
        }

        // Update the longest string length (if this one was bigger)
        longest = Math.max(
            longest,
            current.size
        );
    }

    return longest;
};
