import java.util.HashMap;

public class ValidAnagram {
    public boolean solution(String s, String t) {
        if (s.length() != t.length()) {
            return false;
        }

        HashMap<Character, Integer> freq = new HashMap<Character, Integer>();
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            freq.put(c, freq.getOrDefault(c, 0) + 1);
        }

        for (int i = 0; i < t.length(); i++) {
            char c = t.charAt(i);
            if (!freq.containsKey(c))
                return false;
            freq.put(c, freq.get(c) - 1);
            if (freq.get(c) < 0)
                return false;
        }
        return true;
    }
}
