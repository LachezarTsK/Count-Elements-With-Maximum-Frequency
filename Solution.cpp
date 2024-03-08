
#include <array>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {

    static constexpr array<int, 2> RANGE_OF_VALUES { { 1, 100 } };

public:
    int maxFrequencyElements(const vector<int>& input) const {
        array<int, RANGE_OF_VALUES[1] + 1> frequency{};
        int maxFrequency = 0;
        int numberOfMaxFrequencyElements = 0;

        for (const auto& value : input) {
            if (++frequency[value] > maxFrequency) {
                maxFrequency = frequency[value];
                numberOfMaxFrequencyElements = 0;
            }
            numberOfMaxFrequencyElements += (frequency[value] == maxFrequency) ? frequency[value] : 0;
        }

        return numberOfMaxFrequencyElements;
    }
};
